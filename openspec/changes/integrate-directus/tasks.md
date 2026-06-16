# Tasks: Integrar Directus

## Fase 1: Deploy

- [ ] 1.1 Criar stack Docker Compose para Directus no manager1
- [ ] 1.2 Configurar variáveis de ambiente (DB, admin, CORS, URL)
- [ ] 1.3 Deploy stack e verificar saúde (GET /server/health)
- [ ] 1.4 Configurar DNS Cloudflare: `admin.portaldaliturgia.com.br` → manager1

## Fase 2: Collections

- [ ] 2.1 Verificar auto-discovery das 8 tabelas como collections
- [ ] 2.2 Configurar campos relacionais (FKs → M2O/O2M)
- [ ] 2.3 Ajustar labels e descrições dos campos (português)
- [ ] 2.4 Configurar ordenação padrão por collection
- [ ] 2.5 Testar API REST pública: GET /items/musicas, /items/artigos

## Fase 3: Roles

- [ ] 3.1 Criar role "Editor"
- [ ] 3.2 Configurar permissões CRUD nas collections de conteúdo
- [ ] 3.3 Bloquear acesso a system collections e schema
- [ ] 3.4 Criar usuário para Pe. Maciel (email + senha)
- [ ] 3.5 Testar login e permissões do Editor

## Fase 4: Next.js

- [ ] 4.1 Criar `lib/directus.ts` com helper de fetch
- [ ] 4.2 Atualizar `Musica.tsx` — fetch músicas da API
- [ ] 4.3 Atualizar `Oracoes.tsx` — fetch orações da API
- [ ] 4.4 Atualizar `Artigos.tsx` — fetch artigos da API
- [ ] 4.5 Atualizar `Liturgia.tsx` — fetch evento do dia
- [ ] 4.6 Atualizar `Subsidios.tsx` — fetch subsídios da API
- [ ] 4.7 Adicionar `loading.tsx` (skeleton enquanto carrega)

## Fase 5: ISR

- [ ] 5.1 Criar `app/api/revalidate/route.ts` (webhook endpoint)
- [ ] 5.2 Configurar webhook no Directus → Vercel Deploy Hook
- [ ] 5.3 Testar: editar artigo no Directus → ver rebuild no Vercel
- [ ] 5.4 Adicionar `revalidate` nas páginas dinâmicas

## Fase 6: Verificação

- [ ] 6.1 Teste end-to-end: criar artigo no Directus → aparece no site
- [ ] 6.2 Verificar performance (Lighthouse pós-integração)
- [ ] 6.3 Verificar SEO (meta tags nos dados dinâmicos)
- [ ] 6.4 Backup do PostgreSQL antes de liberar acesso ao cliente
