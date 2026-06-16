# Spec: API de Dados via Directus

## Requirements

### REQ-001: API REST para todas as collections
As 8 tabelas do PostgreSQL devem ser expostas como endpoints REST públicos.

**Priority:** P0

**Scenarios:**
- **Given** Directus conectado ao banco `portal_da_liturgia`
- **When** requisição GET para `/items/musicas`
- **Then** retorna JSON com array de músicas (504 registros)
- **And** campos como `titulo`, `cifra`, `autor`, `url_youtube` estão presentes
- **And** resposta inclui meta `total_count` para paginação

### REQ-002: Relações entre tabelas preservadas
Foreign keys existentes devem ser expostas como campos relacionais.

**Priority:** P0

**Scenarios:**
- **Given** tabela `musicas` com FK `autor_id` → `autores(id)`
- **When** GET `/items/musicas?fields=*,autor_id.nome`
- **Then** resposta inclui `autor_id: { id: 1, nome: "Desconhecido" }`

### REQ-003: Filtros e busca full-text
API deve suportar filtros por campos e busca textual.

**Priority:** P1

**Scenarios:**
- **Given** collection `oracoes` com índice FTS português
- **When** GET `/items/oracoes?search=senhor`
- **Then** retorna orações contendo "senhor" no título ou texto
- **And** resultados ordenados por relevância

### REQ-004: Paginação e limite
Toda collection deve suportar paginação via `limit` e `offset`.

**Priority:** P1

**Scenarios:**
- **Given** 504 músicas na collection
- **When** GET `/items/musicas?limit=20&page=1`
- **Then** retorna 20 registros da primeira página
- **And** meta indica `page`, `page_count`, `total_count`

### REQ-005: Ordenação por qualquer campo
**Priority:** P2

**Scenarios:**
- **Given** collection `artigos` com campo `data_publicacao`
- **When** GET `/items/artigos?sort=-data_publicacao`
- **Then** retorna artigos do mais recente ao mais antigo
