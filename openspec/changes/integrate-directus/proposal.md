# Proposal: Integrar Directus como CMS

## Por quê

O Portal da Liturgia tem 1.527 registros em 8 tabelas no PostgreSQL do manager1, mas o site atual (Next.js) usa dados **hardcoded** nos componentes — artigos, músicas, orações, subsídios são estáticos e imutáveis sem deploy.

O Pe. Maciel precisa de um **painel admin** para gerenciar conteúdo (criar/editar artigos, adicionar músicas, publicar orações) sem depender da DuoBro para cada alteração.

**Directus** conecta diretamente ao PostgreSQL existente e expõe API REST/GraphQL automática sobre as tabelas. Já usamos no Sedevacante com sucesso — mesmo stack, mesmos pitfalls conhecidos.

## O que muda

- **Directus** instalado no manager1 (Docker), conectado ao banco `portal_da_liturgia`
- As 8 tabelas existentes viram **collections** no Directus (zero migração de dados)
- API REST gerada automaticamente: `/items/musicas`, `/items/oracoes`, `/items/artigos`, etc.
- **2 roles**: Admin (Jones) + Editor (Pe. Maciel)
- Componentes Next.js passam a consumir dados da API Directus (substituindo hardcoded)
- **ISR** (Incremental Static Regeneration) para rebuild sob demanda quando conteúdo mudar

## Escopo

### Dentro
- Deploy Directus via Docker no manager1
- Conectar ao PostgreSQL `portal_da_liturgia` (read/write nas 8 tabelas)
- Configurar collections, fields, relações (FKs viram M2O/O2M)
- Criar role Editor com permissões nas collections de conteúdo
- API pública (read) para o Next.js + API autenticada (write) para admin
- Atualizar componentes para consumir API Directus
- ISR webhook para rebuild quando conteúdo for editado

### Fora
- Migração de dados (já estão no PostgreSQL)
- Autenticação de usuários finais (site é público)
- Upload de imagens via Directus (usar Pexels ou upload separado)
- Substituir o banco PostgreSQL (Directus usa o mesmo, sem duplicação)

## Impacto

| Área | Impacto | Risco |
|------|---------|-------|
| PostgreSQL | Leitura/escrita pelo Directus, sem alteração de schema | Baixo |
| Next.js | Componentes passam a buscar dados via `fetch` + ISR | Médio |
| Deploy | Novo container Directus no manager1 | Baixo |
| SEO | Melhora — conteúdo dinâmico indexado via SSG | Positivo |

## Rollback

1. Remover container Directus (`docker stack rm directus`)
2. Componentes Next.js revertem para dados hardcoded (estão em commit anterior)
3. PostgreSQL permanece intacto (Directus não altera schema existente)
