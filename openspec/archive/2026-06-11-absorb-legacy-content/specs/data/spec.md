# Spec: Data Extraction & Storage

> Delta spec for change: absorb-legacy-content
> Status: draft

## Requirements

### REQ-001: Extract all content from legacy API endpoints
All 6 legacy API endpoints must be queried and their complete payloads captured as structured data.

**Priority:** P0 (critical)

**Scenarios:**
- **Given** the legacy Vercel API is running at portal-da-liturgia-back.vercel.app
- **When** the extraction script calls each endpoint
- **Then** all records are returned with HTTP 200
- **And** the total count matches known baselines (491 músicas, 271 orações, 38 artigos, 210 subsídios)

### REQ-002: Design normalized PostgreSQL schema
Content must be stored in normalized tables with proper foreign keys, not as JSON blobs.

**Priority:** P0

**Scenarios:**
- **Given** the extracted JSON data from all endpoints
- **When** the schema is designed
- **Then** each content type has its own table (musicas, oracoes, artigos, eventos, subsidios)
- **And** shared entities (autores, categorias, tipos) are normalized into separate tables
- **And** foreign key constraints enforce referential integrity

### REQ-003: Transform and insert all records
All extracted data must be transformed to fit the normalized schema and inserted without loss.

**Priority:** P0

**Scenarios:**
- **Given** extracted JSON data and a populated schema
- **When** the migration script runs
- **Then** all 1,010+ records are inserted successfully
- **And** no record is truncated, re-encoded incorrectly, or orphaned
- **And** duplicate detection prevents double-insertion on re-run (idempotent)

### REQ-004: Preserve media references
Music files, images, and videos referenced in the content must have their URLs stored.

**Priority:** P1 (high)

**Scenarios:**
- **Given** a record with a media URL field (e.g., `url_audio`, `url_cifra`)
- **When** the record is inserted
- **Then** the original URL is preserved in a text column
- **And** a `media_type` enum or flag identifies the type (audio, image, video, pdf)
- **And** empty/null URLs are stored as NULL, not empty strings

### REQ-005: Full-text search capability
Content must be searchable in Portuguese, including diacritics and liturgical terms.

**Priority:** P2 (medium)

**Scenarios:**
- **Given** all content is in the database
- **When** a user searches for "eucaristia"
- **Then** results include artigos, oracoes, and musicas containing the term
- **And** accent-insensitive matching works ("eucaristía" finds "eucaristia")
- **And** results are ranked by relevance

## Edge Cases

| # | Condition | Expected Behavior |
|---|-----------|-------------------|
| 1 | API endpoint returns empty array | Log warning, create table with zero rows, continue |
| 2 | Record contains HTML tags in text fields | Strip HTML, preserve line breaks as `\n`, store clean text |
| 3 | Record has NULL required field | Log error with record ID, skip record, report in summary |
| 4 | Duplicate record (same ID, re-extraction) | Upsert — update if exists, insert if new |
| 5 | Latin text with special chars (e.g., "Kyrie eleïson") | Store in UTF-8, preserve all diacritics, no mojibake |
| 6 | API timeout or 5xx error | Retry 3x with exponential backoff (2s, 4s, 8s), then abort and report |
| 7 | Field name mismatch between endpoints | Map explicitly in transformation layer, no automatic guessing |

## Dependencies

- Legacy Vercel API must be online during extraction
- Supabase project must exist under DuoBro organization
- DB credentials available (service role key or connection string)

## Version History
| Date | Version | Author | Change |
|------|---------|--------|--------|
| 2026-06-11 | 1.0 | Hermes | Initial spec |
