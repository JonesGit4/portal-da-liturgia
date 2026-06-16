# Design: Integração Directus

## Abordagem

Directus instalado como container Docker no manager1 (mesmo servidor do PostgreSQL), conectando diretamente ao banco existente. Next.js consome a API REST pública em tempo de build (SSG) com revalidação sob demanda (ISR).

## Arquitetura

```
┌─────────────────────────────────────────────────┐
│                    manager1                      │
│                                                  │
│  ┌──────────┐    ┌──────────────┐               │
│  │ Directus │───▶│  PostgreSQL  │               │
│  │ :8055    │    │  portal_da_  │               │
│  │ (admin)  │    │  liturgia    │               │
│  └────┬─────┘    └──────────────┘               │
│       │ API REST                                 │
└───────┼──────────────────────────────────────────┘
        │
   ┌────▼─────┐
   │  Vercel  │  Next.js SSG + ISR
   │  (site)  │  fetch() no build time
   └──────────┘
```

## Fluxo de dados

1. **Build**: `next build` → fetch da API Directus → páginas estáticas
2. **Edição**: Pe. Maciel edita artigo → Directus salva no PostgreSQL
3. **Rebuild**: Webhook Directus → Vercel Deploy Hook → ISR revalida páginas
4. **Leitura**: Visitante → página estática cacheada na Vercel Edge

## Docker Compose

```yaml
services:
  directus:
    image: directus/directus:11
    environment:
      DB_CLIENT: pg
      DB_HOST: postgres_postgres
      DB_PORT: 5432
      DB_DATABASE: portal_da_liturgia
      DB_USER: postgres
      DB_PASSWORD: Mfcd62!!Mfcd62!!
      ADMIN_EMAIL: jones@duobro.com.br
      ADMIN_PASSWORD: ${DIRECTUS_ADMIN_PASSWORD}
      PUBLIC_URL: https://admin.portaldaliturgia.com.br
      CORS_ENABLED: true
      CORS_ORIGINS: https://portaldaliturgia.com.br,https://portal-da-liturgia-*.vercel.app
    ports:
      - 8055:8055
    networks:
      - network_public
```

## Collections (mapeamento automático)

| Tabela PG | Collection Directus | Tipo |
|-----------|-------------------|------|
| musicas | musicas | Conteúdo |
| oracoes | oracoes | Conteúdo |
| artigos | artigos | Conteúdo |
| eventos | eventos | Conteúdo |
| subsidios | subsidios | Conteúdo |
| autores | autores | Lookup |
| categorias | categorias | Lookup |
| tipos_oracao | tipos_oracao | Lookup |

## Roles

| Role | Permissões |
|------|-----------|
| **Admin** | Tudo (Jones) |
| **Editor** | CRUD em: musicas, oracoes, artigos, eventos, subsidios. Read em lookup tables |
| **Public** | Read em todas as collections |

## Integração Next.js

```typescript
// lib/directus.ts
const DIRECTUS_URL = process.env.DIRECTUS_URL || 'http://directus:8055';

export async function getItems(collection: string, params?: Record<string, string>) {
  const url = new URL(`${DIRECTUS_URL}/items/${collection}`);
  if (params) Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
  return res.json();
}
```

## Decisões

| Decisão | Razão | Alternativa |
|----------|-------|-------------|
| Directus (não Payload) | Conecta ao PG existente sem migração; já usado no Sedevacante | Payload exigiria migrar dados |
| API REST (não GraphQL) | Simplicidade; queries previsíveis | GraphQL seria overkill |
| ISR (não SSR) | Performance; conteúdo muda pouco | SSR desnecessário |
| Webhook seletivo | Rebuild só da página afetada | Rebuild completo lento |

## Riscos

| Risco | Prob | Impacto | Mitigação |
|-------|------|---------|-----------|
| Directus alterar schema | Baixa | Alto | Directus 11 NÃO altera tabelas existentes |
| Performance API com 500+ itens | Média | Médio | Paginação + cache ISR |
| Editor quebrar dados | Média | Médio | Backup PG; role sem permissão delete |
