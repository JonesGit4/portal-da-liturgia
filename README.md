# Portal da Liturgia

**Cliente:** Maciel José da Silva (Pe. Maciel)
**Contrato:** Documenso #25 · Setup R$1.000 · Mensal R$500 (6 parcelas) · Total R$4.000
**Status:** Staging — aguardando imagens reais + propagação DNS

---

## 🔗 Links

| Recurso | URL |
|----------|-----|
| Site atual (legado) | https://portaldaliturgia.com |
| Staging (Vercel) | https://portal-da-liturgia-ttz0s5lor-joneslab-projects.vercel.app |
| Domínio novo | `portaldaliturgia.com.br` (zona CF criada, NS trocados, aguardando propagação) |
| Repo GitHub | [JonesGit4/portal-da-liturgia](https://github.com/JonesGit4/portal-da-liturgia) |
| Vercel Project | `prj_OWHejbRQ866fJwKfssXUdLoiNk0I` (joneslab-projects) |
| Cloudflare Zone | `2a80dceb1288acb3962069c1b6b1a7d6` |
|| PostgreSQL | manager1, DB `portal_da_liturgia` (1.527 registros) |
|| Directus CMS | `admin.portaldaliturgia.com.br` (HTTPS, Swarm) |
|| Guia Editor | [docs/guia-editor-maciel.pdf](docs/guia-editor-maciel.pdf) |

---

## 📋 Stack

- **Framework:** Next.js 16.2 + React 18
- **Estilo:** CSS vanilla com tokens OKLCH (sem Tailwind)
- **Fontes:** Cormorant Garamond + Hanken Grotesk + JetBrains Mono (`next/font/google`)
- **Hospedagem:** Vercel (SSG)
- **DNS:** Cloudflare (proxy ativo)
- **Dados:** PostgreSQL no manager1 (8 tabelas, FTS português)

---

## 🎨 Design System

| Token | Valor |
|-------|-------|
| Background | oklch(0.985 0.005 60) ≈ #FCFAF5 |
| Accent | oklch(0.5 0.21 27) ≈ #8B1A2B (vermelho litúrgico) |
| Gold | oklch(0.62 0.10 75) ≈ #B8934A |
| Display font | Cormorant Garamond (400-600) |
| Body font | Hanken Grotesk (300-700) |
| Dot rules | Assinatura visual — separadores com bolinhas vermelhas |

---

## ✅ Auditorias Concluídas

| Skill | Data | Resultado |
|-------|------|-----------|
| `hallmark-enxuta` (anti-slop) | 16/06 | 🔥0 ⚠️0 — limpo |
| `web-design-review` (a11y/UX) | 16/06 | 7 fixes aplicados |
| `landing-page-design-review` (visual) | 16/06 | 45/50 🟢 |

---

## 🔜 Pendências

- [x] Integrar Directus CMS (painel admin + API REST)
- [x] Configurar fluxo editorial (Autor draft → Editor publica → Public lê)
- [x] Editor Rich Text (WYSIWYG) nas 4 collections principais
- [x] Documentar padrão Directus DuoBro (`docs/padrao-directus-duobro.md`)
- [ ] Criar usuário Pe. Maciel no Directus (aguardando email)
- [ ] Migrar áudios legado (aguardando acesso servidor)
- [ ] Lighthouse audit final
- [ ] Deploy produção (`vercel --prod`)
- [ ] Aprovação do cliente para go-live

---

## 🖊️ Editor (Directus CMS)

**Painel:** `admin.portaldaliturgia.com.br`

| Role | Acesso | O que faz |
|------|--------|-----------|
| **Editor 01** (Pe. Maciel) | App completo | CRUD total, publica conteúdo |
| **Autor 01** | App restrito | Cria rascunhos, edita só os próprios |
| **Public** | Site apenas | Lê conteúdo publicado |

**Fluxo:** Autor cria rascunho → Editor revisa → muda status para "Publicado" → visível no site.

**Rich Text:** Editor WYSIWYG com toolbar completa (bold, headings, imagens, links) em:
- `artigos.conteudo`
- `musicas.letra`
- `oracoes.texto`
- `subsidios.descricao`

**Docs:** [Guia do Editor (PDF)](docs/guia-editor-maciel.pdf) · [Padrão Directus DuoBro](docs/padrao-directus-duobro.md)

---

## 📂 Estrutura

```
site/
├── app/
│   ├── globals.css         ← Design system completo (615 linhas, OKLCH)
│   ├── layout.tsx           ← Metadata, JSON-LD, skip-link, next/font
│   ├── page.tsx             ← Composição das 9 seções
│   ├── robots.ts            ← robots.txt dinâmico
│   └── sitemap.ts           ← sitemap.xml dinâmico
└── components/
    ├── Header.tsx           ← Sticky, nav 6 links, brand mark
    ├── NoticeMarquee.tsx    ← Ticker vermelho
    ├── Hero.tsx             ← Split layout, headline + badge
    ├── Musica.tsx           ← Grid 4-col com featured card
    ├── Oracoes.tsx          ← Quote sticky + grid 2-col
    ├── Liturgia.tsx         ← Card + leituras do dia
    ├── Video.tsx            ← Player + stats YouTube
    ├── Subsidios.tsx        ← Grid 3 cards
    ├── Artigos.tsx          ← Grid 12-col assimétrico
    ├── Footer.tsx           ← Dark, 4 colunas, links IVE
    └── icons.tsx            ← SVG icons (Search, ArrowRight, Calendar, etc.)
```
