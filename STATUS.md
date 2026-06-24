# Portal da Liturgia — Status do Projeto

**Data:** 24/06/2026  
**Reunião com:** Pe. Maciel (cliente)

---

## Resumo Executivo

Migração do site legado (portaldaliturgia.com, React CRA + MySQL/HostGator) para nova stack (Next.js 16 + Directus 11, portaldaliturgia.com.br).

---

## O que foi feito

### ✅ Banco de dados legado — 100% extraído
- Dump SQL completo do MySQL HostGator (40 MB)
- 13 tabelas, ~2000 registros
- Arquivos salvos em `data/banco.sql.zip` e `data/localhost.sql`

### ✅ Acesso ao servidor legado
- cPanel: `nicolas.benitiz@gmail.com` / token API configurado
- SFTP: chave ED25519 importada e autorizada (shell bloqueado pela HostGator)
- MySQL: credenciais obtidas (acesso bloqueado externamente)

### ✅ Usuário Pe. Maciel no Directus
- Criado em `admin.portaldaliturgia.com.br`
- Email: `macieldasilva@ive.org`
- Role: Editor

---

## Conteúdo extraído

| Tabela | Registros | Conteúdo | Status |
|--------|-----------|----------|--------|
| `tb_musicas` | 583 | Cifras + links YouTube/Drive | ⚠️ Ver abaixo |
| `tb_oracoes` | 396 | Texto completo PT + Latim | ✅ Pronto para importar |
| `tb_artigos` | 39 | HTML completo (mediumblob) | ✅ Pronto para importar |
| `tb_subsidios` | 217 | Links Google Docs (externos) | ⚠️ Ver abaixo |
| `tb_missas` | 46 | Celebrações litúrgicas | ✅ Pronto para importar |
| `tb_calendario` | 1 | Datas das missas | ✅ |
| `tb_subdivisao_subsidio` | 18 | Categorias de subsídios | ✅ |
| `tb_tipos_oracoes` | 32 | Categorias de oração | ✅ |
| `tb_musicas_missas` | 2 | Relacionamento música-missa | ✅ |
| `tb_usuarios` | 2 | Usuários legados | ✅ |

---

## Pendências para decisão do cliente

### 🔴 Músicas (583 registros)
**Situação:** Não há arquivos MP3 no servidor. O site legado usava:
- 344 links do YouTube (embeds)
- 214 links do Google Drive (partituras)
- 400 cifras (notação de acordes)

**Alternativas:**
1. **YouTube embed** — player nativo do YouTube no site novo
2. **Download + MP3 próprio** — baixar áudios do YouTube, hospedar localmente
3. **Manter links externos** — como o site antigo fazia

### 🔴 Subsídios (217 documentos)
**Situação:** Todos são links do Google Docs (externos). Nenhum PDF/arquivo local.

**Alternativas:**
1. **Manter links** — redirecionar para Google Docs
2. **Download + PDF próprio** — baixar cada documento, converter e hospedar

---

## Próximos passos

1. Reunião com Pe. Maciel para decidir abordagem de músicas e subsídios
2. Após decisão, iniciar importação para Directus
3. Definir se deploy produção deve ser agendado

---

## Issues relacionadas

| # | Título | Status |
|---|--------|--------|
| 8 | DNS Cloudflare | 🟡 Propagando |
| 11 | Criar usuário Pe. Maciel | ✅ Fechado |
| 12 | Migrar áudios do site legado | 🔄 Aguardando decisão |
| 13 | Deploy produção | 🟡 Aguardando finalização |
| 14 | Verificação 7 dias Directus | 🟢 Cron automático |

---

## Credenciais (referência)

| Serviço | URL | Usuário |
|---------|-----|---------|
| Directus | admin.portaldaliturgia.com.br | jones@duobro.com.br |
| cPanel | cpanel.portaldaliturgia.com | nicolas.benitiz@gmail.com |
| SFTP | 108.179.252.244:22 | por87206 |
| MySQL | br536.hostgator.com.br | por87206_nicolasbenitiz |
