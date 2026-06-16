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

- [ ] 3.1 Criar role "Editor 01" (genérico)
- [ ] 3.2 Criar role "Autor 01" (genérico)
- [ ] 3.3 Configurar permissões CRUD nas collections de conteúdo
- [ ] 3.4 Bloquear acesso a system collections e schema para não-admins
- [ ] 3.5 Criar usuário Admin para Maciel
- [ ] 3.6 Testar login e permissões de cada role

## Fase 4: Segurança

- [ ] 4.1 Substituir senhas hardcoded por Docker secrets
- [ ] 4.2 Confirmar que porta PG não está exposta ao host
- [ ] 4.3 Configurar CORS restrito
- [ ] 4.4 Testar rate-limit na API pública

## Fase 5: Next.js

- [ ] 5.1 Criar `lib/directus.ts` com helper de fetch
- [ ] 5.2 Atualizar `Musica.tsx` — fetch músicas da API
- [ ] 5.3 Atualizar `Oracoes.tsx` — fetch orações da API
- [ ] 5.4 Atualizar `Artigos.tsx` — fetch artigos da API
- [ ] 5.5 Atualizar `Liturgia.tsx` — fetch evento do dia
- [ ] 5.6 Atualizar `Subsidios.tsx` — fetch subsídios da API
- [ ] 5.7 Adicionar `loading.tsx` (skeleton enquanto carrega)

## Fase 6: ISR

- [ ] 6.1 Criar `app/api/revalidate/route.ts` (webhook endpoint)
- [ ] 6.2 Configurar webhook no Directus → Vercel Deploy Hook
- [ ] 6.3 Testar: editar artigo no Directus → ver rebuild no Vercel
- [ ] 6.4 Adicionar `revalidate` nas páginas dinâmicas

## Fase 7: Mídias do legado

- [ ] 7.1 Extrair imagens do site portaldaliturgia.com
- [ ] 7.2 Mapear imagens para collections do Directus
- [ ] 7.3 Upload via API Directus ou import direto

## Fase 8: Verificação

- [ ] 8.1 Teste end-to-end: criar artigo no Directus → aparece no site
- [ ] 8.2 Verificar performance (Lighthouse pós-integração)
- [ ] 8.3 Verificar SEO (meta tags nos dados dinâmicos)
- [ ] 8.4 Backup do PostgreSQL antes de liberar acesso ao cliente

## Fase 9: Documento para o Cliente

- [ ] 9.1 Criar PDF/MD "Guia do Editor — Portal da Liturgia" passo a passo para leigo
- [ ] 9.2 Conteúdo: como acessar o painel (admin.portaldaliturgia.com.br)
- [ ] 9.3 Conteúdo: como criar/editar artigo, música, oração, subsídio
- [ ] 9.4 Conteúdo: como publicar (status draft → published)
- [ ] 9.5 Conteúdo: como ver o resultado no site
- [ ] 9.6 Conteúdo: o que NÃO fazer (deletar collections, mexer em schema)
- [ ] 9.7 Enviar documento via WhatsApp para Pe. Maciel (+55 27 99888-8738)
