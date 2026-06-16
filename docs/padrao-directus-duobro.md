# Padrão DuoBro — Configuração Directus

Documentação canônica para instalações Directus em projetos DuoBro.
Aplicado em: Sedevacante, Portal da Liturgia.

## Arquitetura

- **Deploy:** Docker Swarm `directus` standalone, porta interna 8055
- **Exposição:** Traefik com label `traefik.http.routers.<projeto>.rule=Host(\`admin.<dominio>\`)`
- **Banco:** PostgreSQL (manager1), banco dedicado por projeto
- **Segurança:** `.env` com KEY, SECRET, DB_PASSWORD (nunca hardcoded)

## Roles padrão

| Role | App Access | Descrição |
|------|-----------|-----------|
| **Administrator** | Sim | Admin completo (Jones + cliente admin) |
| **Editor 01** | Sim | CRUD completo em todas as collections de conteúdo |
| **Autor 01** | Sim | Cria apenas rascunhos, edita só os próprios drafts |
| **Public** | Não | Leitura anônima do site — apenas `status: published` |

## Policies padrão

| Policy | Admin | App | Associada a |
|--------|-------|-----|-------------|
| Administrator | Sim | Sim | Role Administrator |
| Portal Editor | Não | Sim | Role Editor 01 |
| Portal Autor | Não | Sim | Role Autor 01 |
| Portal Public | Não | Não | Role Public |

## Fluxo editorial

```
Autor → cria (status forçado: draft)
       → edita apenas seus próprios drafts
       → NÃO deleta
       
Editor → revisa o draft
       → altera status para "published"
       → CRUD completo

Public (site) → só lê registros com status: "published"
```

## Permissões por Role

### Autor 01

| Ação | Restrição |
|------|-----------|
| Create | `presets: {status: "draft"}`, `validation: {status: {_eq: "draft"}}` |
| Read | Todas (*) |
| Update | Apenas próprio draft: `{status: {_eq: "draft"}, user_created: {_eq: "$CURRENT_USER"}}` |
| Delete | **Nenhuma** (não pode deletar) |

### Editor 01

| Ação | Restrição |
|------|-----------|
| Create/Read/Update/Delete | Todas (*), sem restrições |

### Public

| Ação | Restrição |
|------|-----------|
| Read | Apenas `{status: {_eq: "published"}}` |

## Campo `status`

Todas as collections de conteúdo devem ter campo `status`:

```json
{
  "field": "status",
  "type": "string",
  "meta": {
    "interface": "select-dropdown",
    "options": {
      "choices": [
        {"text": "Rascunho", "value": "draft"},
        {"text": "Em Revisão", "value": "review"},
        {"text": "Publicado", "value": "published"}
      ]
    }
  },
  "schema": {
    "default_value": "draft",
    "max_length": 20
  }
}
```

## Editor Rich Text

Campos de conteúdo longo devem usar `input-rich-text-html`:

```json
{
  "meta": {
    "interface": "input-rich-text-html",
    "options": {
      "toolbar": [
        "bold", "italic", "underline", "strikethrough",
        "code", "removeFormat",
        "h1", "h2", "h3",
        "bullist", "numlist", "blockquote",
        "link", "image",
        "alignleft", "aligncenter", "alignright",
        "fullscreen"
      ]
    }
  }
}
```

**Requisito:** O campo no PostgreSQL deve ser tipo `text` (não `json` ou `jsonb`).

## Collections de consulta (lookup)

Tabelas auxiliares (`autores`, `categorias`, `tipos_oracao`) não precisam de campo `status` nem fluxo editorial — são apenas referências.

**Roles com acesso de leitura:** Administrator, Editor, Autor, Public (todos).

## Checklist pós-instalação

- [ ] Campo `status` adicionado em todas as collections de conteúdo
- [ ] Role Public criada e associada à Portal Public
- [ ] Autor 01 com `presets.status = "draft"` e sem permissão de delete
- [ ] Editor 01 com CRUD completo
- [ ] Public com filtro `status._eq: "published"`
- [ ] Conteúdo legado marcado como `published`
- [ ] Campos de texto longo com `input-rich-text-html`
- [ ] Teste: login como Autor → criar → deve sair como draft
- [ ] Teste: login como Editor → ver draft → alterar status → published
