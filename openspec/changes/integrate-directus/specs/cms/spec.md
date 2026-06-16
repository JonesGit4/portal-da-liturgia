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

### REQ-002: Role Editor para o cliente
Pe. Maciel deve ter acesso de Editor com permissões limitadas.

**Priority:** P0

**Scenarios:**
- **Given** role "Editor" configurada no Directus
- **When** Pe. Maciel faz login
- **Then** vê apenas collections de conteúdo (músicas, orações, artigos, subsídios, eventos)
- **And** pode criar, editar e publicar itens
- **And** NÃO pode deletar collections, alterar schema, ou gerenciar usuários

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
