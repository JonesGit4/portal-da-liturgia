# Tasks: Absorb Legacy Content

> Each task is ONE concrete action. Check off as completed.
> Status: 🟢 complete

## Phase 1: Extraction

- [x] 1.1 Test connectivity to all 6 legacy API endpoints (curl health check)
- [x] 1.2 Run extraction: fetch all records from all endpoints, save raw JSON
- [x] 1.3 Validate extraction: 504 músicas, 274 orações, 39 artigos, 92 eventos, 214 subsídios
- [x] 1.4 Sample-check encoding: UTF-8 OK, diacritics preserved

## Phase 2: Schema

- [x] 2.1 Create database portal_da_liturgia on manager1 PostgreSQL
- [x] 2.2 Create lookup tables: autores, categorias, tipos_oracao
- [x] 2.3 Create content tables: musicas, artigos, oracoes, eventos, subsidios
- [x] 2.4 Add foreign key constraints (5 relationships)
- [x] 2.5 Add full-text search indexes (Portuguese)

## Phase 3: Transform & Load

- [x] 3.1 Write Python migration script: extract → transform → load
- [x] 3.2 Populate lookup tables (361 autores, 11 categorias, 32 tipos)
- [x] 3.3 Insert musicas with FK resolution (504 records)
- [x] 3.4 Insert artigos with FK resolution (39 records)
- [x] 3.5 Insert oracoes with FK resolution (274 records)
- [x] 3.6 Insert eventos (92 records)
- [x] 3.7 Insert subsidios (214 records)
- [x] 3.8 Upsert re-test: idempotent

## Phase 4: Quality Assurance

- [x] 4.1 Row count audit: all 8 tables match baseline
- [x] 4.2 Orphan check: zero FK violations
- [x] 4.3 Encoding check: 216 musicas with diacritics — UTF-8 preserved
- [x] 4.4 Null check: zero NULL titulos
- [x] 4.5 Full-text search test: working (183 orações for 'senhor')

## Phase 5: Verification

- [x] 5.1 Verification: 0 critical issues, 0 warnings
- [x] 5.2 All tasks complete
- [x] 5.3 Archive: merged specs, moved to archive

## Summary
- **Total tasks:** 22
- **Completed:** 22
- **Blocked:** 0
- **Remaining:** 0

## Results

| Tabela | Registros |
|--------|-----------|
| musicas | 504 |
| oracoes | 274 |
| subsidios | 214 |
| eventos | 92 |
| artigos | 39 |
| autores | 361 |
| tipos_oracao | 32 |
| categorias | 11 |
| **TOTAL** | **1.527** |
