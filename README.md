# Portal da Liturgia

**Cliente:** Maciel José da Silva (Pe. Maciel)
**Contrato:** Documenso #25 · Setup R$1.000 · Mensal R$500 (6 parcelas) · Total R$4.000
**Status:** Ativo — contrato assinado, setup pago, novo site a iniciar

---

## 🔗 Links

| Recurso | URL |
|----------|-----|
| Site atual (legado) | https://portaldaliturgia.com |
| API Backend | https://portal-da-liturgia-back.vercel.app |
| Domínio | `portaldaliturgia.com` (HostGator + Cloudflare) |
| Google Drive | `CLIENTES_DUOBRO/Portal da Liturgia/` |
| Kanban | GitHub Project "Duobro Dashboard" |

---

## 📋 Stack Atual (site legado)

- **Frontend:** React CRA (Client-Side Rendering) — hospedado na HostGator
- **CDN/DNS:** Cloudflare (`hadlee.ns.cloudflare.com` / `shane.ns.cloudflare.com`)
- **Backend:** API REST pública em `portal-da-liturgia-back.vercel.app` (Vercel)
- **Domínio:** Registrado em 27/05/2024, expira 27/05/2027 (PDR Ltd. / HostGator Brasil)
- **Email:** `mail.portaldaliturgia.com` (HostGator, IP 108.179.252.244)

### Endpoints da API (legado)

| Endpoint | Conteúdo |
|----------|----------|
| `GET /get-musicas` | 491 músicas litúrgicas |
| `GET /get-all-artigos` | 38 artigos |
| `GET /get-oracoes` | 271 orações |
| `GET /get-missas` | Eventos litúrgicos |
| `GET /get-subsidios` | 210 subsídios |
| `GET /get-tipos-oracoes` | 31 categorias |

---

## 👤 Cliente

- **Nome:** Maciel José da Silva (Pe. Maciel)
- **CPF:** 995.149.154-53
- **RG:** 50.031.876-1
- **WhatsApp:** +55 27 99888-8738
- **Site:** portaldaliturgia.com
- **Email:** ⚠️ Não confirmado (placeholder `maciel@portaldaliturgia.com`)
- **Endereço/CEP:** ⚠️ Não consta nos documentos

---

## 📂 Estrutura do Repo

```
portal-da-liturgia/
├── README.md                          ← Este arquivo
├── docs/
│   ├── contrato.md                    ← Detalhes do contrato
│   ├── dominio.md                     ← Investigação de domínio/hospedagem
│   └── levantamentos/
│       ├── README.md                  ← Índice de auditorias
│       ├── 2026-05-07-seo-audit.md    ← Auditoria SEO inicial
│       ├── 2026-05-13-baseline.md     ← Marco zero (baseline)
│       └── 2026-05-29-dominio.md      ← Investigação whois/DNS
├── site/                              ← 🆕 NOVO SITE (a iniciar)
│   └── README.md
└── .gitignore
```

---

## ⚠️ Problemas Conhecidos (site legado)

1. **CSR puro** — HTML é `<div id="root"></div>`, conteúdo invisível para crawlers
2. **Meta description:** "Web site created using create-react-app"
3. **`lang="en"`** em site 100% português
4. **Sitemap congelado** — lastmod 04/02/2025
5. **Zero schema markup** — sem JSON-LD, sem OG tags
6. **Robots.txt** não referencia sitemap, não libera bots IA

---

## 🔜 Próximos Passos

- [ ] Iniciar desenvolvimento do novo site
- [ ] Migrar de React CRA para Next.js (SSG/SSR)
- [ ] Implementar SEO completo (schema, sitemap dinâmico, meta tags)
- [ ] Obter email e endereço do Pe. Maciel
- [ ] Configurar GTM/GA4 no novo site
