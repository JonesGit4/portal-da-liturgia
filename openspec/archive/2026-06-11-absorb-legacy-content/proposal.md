# Proposal: Absorb Legacy Content into Structured Database

## Why

Portal da Liturgia has **1,010+ content items** (491 músicas, 271 orações, 38 artigos, 210 subsídios, eventos litúrgicos) currently served via a Vercel REST API from the old React CRA frontend. The new site (Next.js + Tailwind, design ZIP already exists) needs this content in a **structured, queryable PostgreSQL database** — not as transient API calls to a legacy backend.

Absorbing the content now decouples the data from the old stack, enabling:
- Direct DB queries for the new Next.js site
- Full-text search across all liturgical content
- Relationship modeling (authors → articles, categories → prayers, dates → events)
- Backup, migration, and future-proofing independent of the old Vercel backend

## What Changes

- Extract 100% of content from the legacy Vercel API endpoints
- Design a normalized PostgreSQL schema (Supabase) for liturgical content
- Transform and insert all records into the new schema
- Preserve all existing relationships and metadata
- Store media references (file URLs, not binary blobs) for music/videos

## Scope

### In Scope
- Extract content from all 6 legacy API endpoints
- Design and create Supabase tables for: musicas, oracoes, artigos, eventos, subsidios, categorias, autores
- Transform JSON data to normalized relational schema
- Insert all records with proper foreign keys
- Run data quality checks (no orphans, no truncation, encoding OK)
- Store progress in Supabase project under DuoBro organization

### Out of Scope
- New site frontend (Next.js implementation)
- Design system application (separate change, design ZIP exists)
- Migration of the legacy frontend code
- DNS/domain changes (stays on HostGator + Cloudflare for now)
- Media file migration (images, MP3s, videos — URLs stored, files remain at source)
- User authentication system

## Impact

| Area | Impact | Risk Level |
|------|--------|------------|
| Legacy Vercel API | Read-only extraction, zero downtime | Low |
| Supabase DB | New tables created, no existing data to conflict | Low |
| Old site (portaldaliturgia.com) | No impact — extraction is from API, not scraping HTML | None |
| GitHub repo | New files in openspec/ + eventual DB schema files | Low |
| New site development | Unblocks — data ready when design integration starts | Positive |

## Rollback Plan

1. Supabase tables are new — drop them to roll back completely
2. Legacy API is untouched — read-only extraction
3. No DNS or routing changes to revert

## Timeline

- **Proposed:** 2026-06-11
- **Approved:** _pending_
- **Implemented:** _pending_
- **Archived:** _pending_
