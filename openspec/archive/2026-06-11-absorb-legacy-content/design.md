# Design: Absorb Legacy Content

## Approach

Extract content from the legacy Vercel API via HTTP GET requests, transform the flat JSON into a normalized relational schema on Supabase PostgreSQL, and insert all records with foreign key integrity. The extraction is a one-time migration with idempotent re-run capability (upsert on primary key). The new schema models the liturgical domain: musicas with authors and categories, orações with types, artigos with authors, eventos with dates, and subsídios with their associated references.

## Architecture

### Components

```
┌──────────────────────┐     ┌──────────────────────┐     ┌──────────────────────┐
│  Legacy Vercel API   │────▶│  Python Migration     │────▶│  Supabase PostgreSQL  │
│  portal-da-liturgia  │     │  Script (extract →    │     │  (DuoBro org)        │
│  -back.vercel.app    │     │   transform → load)   │     │                      │
└──────────────────────┘     └──────────────────────┘     └──────────────────────┘
```

### Data Flow

1. **Extract**: Python script calls all 6 endpoints via `requests`, captures JSON arrays
2. **Transform**: Normalize flat JSON → relational rows with FK resolution (author names → author_ids, category names → category_ids)
3. **Load**: Insert/upsert into Supabase via `psycopg2` or Supabase client, one table at a time in dependency order (lookup tables first, then main content tables)

### API Contracts (Legacy Extraction)

| Method | Endpoint | Response Shape | Records |
|--------|----------|---------------|---------|
| GET | `/get-musicas` | `[{id, titulo, autor, categoria, letra, url_audio, url_cifra, ...}]` | 491 |
| GET | `/get-all-artigos` | `[{id, titulo, autor, conteudo, data, categoria, ...}]` | 38 |
| GET | `/get-oracoes` | `[{id, titulo, texto, tipo, ...}]` | 271 |
| GET | `/get-missas` | `[{id, titulo, data, descricao, ...}]` | TBD |
| GET | `/get-subsidios` | `[{id, titulo, descricao, arquivo_url, ...}]` | 210 |
| GET | `/get-tipos-oracoes` | `[{id, nome, ...}]` | 31 |

### Database Schema (Target)

```sql
-- Lookup tables (insert first)
CREATE TABLE autores (id SERIAL PRIMARY KEY, nome TEXT UNIQUE NOT NULL);
CREATE TABLE categorias (id SERIAL PRIMARY KEY, nome TEXT UNIQUE NOT NULL);
CREATE TABLE tipos_oracao (id SERIAL PRIMARY KEY, nome TEXT UNIQUE NOT NULL);

-- Content tables (insert after lookups)
CREATE TABLE musicas (
  id INTEGER PRIMARY KEY,  -- preserve original ID
  titulo TEXT NOT NULL,
  autor_id INTEGER REFERENCES autores(id),
  categoria_id INTEGER REFERENCES categorias(id),
  letra TEXT,
  url_audio TEXT,
  url_cifra TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE artigos (
  id INTEGER PRIMARY KEY,
  titulo TEXT NOT NULL,
  autor_id INTEGER REFERENCES autores(id),
  conteudo TEXT,
  data_publicacao DATE,
  categoria_id INTEGER REFERENCES categorias(id),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE oracoes (
  id INTEGER PRIMARY KEY,
  titulo TEXT NOT NULL,
  texto TEXT,
  tipo_id INTEGER REFERENCES tipos_oracao(id),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE eventos (
  id INTEGER PRIMARY KEY,
  titulo TEXT NOT NULL,
  data_evento DATE,
  descricao TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE subsidios (
  id INTEGER PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT,
  arquivo_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Full-text search index (Portuguese)
CREATE INDEX idx_musicas_fts ON musicas USING GIN(to_tsvector('portuguese', titulo || ' ' || COALESCE(letra, '')));
CREATE INDEX idx_artigos_fts ON artigos USING GIN(to_tsvector('portuguese', titulo || ' ' || COALESCE(conteudo, '')));
CREATE INDEX idx_oracoes_fts ON oracoes USING GIN(to_tsvector('portuguese', titulo || ' ' || COALESCE(texto, '')));
```

## Decisions

| Decision | Rationale | Alternative Considered |
|----------|-----------|------------------------|
| Preserve original IDs as PK | Simplifies debugging, matches legacy references | Auto-increment surrogate keys (harder to trace) |
| Separate lookup tables (autores, categorias) | Normalization avoids duplication, enables filtering | Store names inline as text (duplication, no FK integrity) |
| Python migration script (not n8n) | Full control over transform logic, error handling, retries | n8n workflow (harder to debug, limited transform) |
| Supabase PostgreSQL (not NocoDB) | Relational integrity, FTS, scalable for new site | NocoDB (good for internal tools, not for site backend) |
| Upsert on re-run (not truncate+reload) | Safe for incremental updates, idempotent | Truncate+reload (data loss window, slower) |

## Dependencies

- Legacy API accessible from migration host (curl test first)
- Supabase project created and connection string available
- Python 3.11+ with `requests`, `psycopg2` (or `supabase-py`)

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Legacy API goes down during extraction | Low | Medium | Extract now while API is live; store raw JSON as backup |
| Encoding issues with Latin/Portuguese text | Medium | High | Force UTF-8 at every stage; validate with sample queries |
| Author/category name mismatches (typos) | Medium | Low | Deduplicate via `UNIQUE` constraint; log collisions |
| Media URLs point to dead links | Medium | Low | Store URLs as-is; dead link check is separate change |
