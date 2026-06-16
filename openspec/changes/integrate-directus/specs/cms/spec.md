# Spec: Painel Admin (Directus)

## Requirements

### REQ-001: Acesso autenticado ao painel
Directus admin deve estar disponível em URL separada com login.

**Priority:** P0

**Scenarios:**
- **Given** Directus rodando no manager1
- **When** usuário acessa `admin.portaldaliturgia.com.br`
- **Then** página de login do Directus é exibida
- **And** login aceita email + senha

### REQ-002: Admin para Jones + Maciel, papéis genéricos
O painel deve ter Admin compartilhado e papéis reutilizáveis.

**Priority:** P0

**Scenarios:**
- **Given** 2 usuários Admin (Jones + Maciel)
- **When** qualquer Admin faz login
- **Then** acesso total a collections, schema, roles e settings
- **And** role "Editor 01" pode CRUD em conteúdo, sem acesso a schema
- **And** role "Autor 01" pode criar/editar próprio rascunho, sem publicar
- **And** ambos os papéis são genéricos (podem ser atribuídos a colaboradores futuros)

### REQ-003: Interface em português
**Priority:** P1

**Scenarios:**
- **Given** locale configurado como `pt-BR`
- **When** qualquer usuário acessa o painel
- **Then** interface está em português (labels, botões, mensagens)

### REQ-004: Preview de conteúdo antes de publicar
**Priority:** P2

**Scenarios:**
- **Given** um artigo em status "draft"
- **When** editor clica em "Preview"
- **Then** versão preview do artigo é exibida (não indexável)
