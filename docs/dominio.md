# Investigação de Domínio — portaldaliturgia.com

**Data:** 29/05/2026

## WHOIS

| Campo | Valor |
|-------|-------|
| Domínio | `portaldaliturgia.com` |
| Registrado em | 27/05/2024 |
| Expira em | **27/05/2027** (~1 ano restante) |
| Status | `clientTransferProhibited` (ativo, sem risco) |
| Registrar | PDR Ltd. / PublicDomainRegistry.com |
| Provedor | **HostGator Brasil** |
| Privacidade | PrivacyProtect.org (titular oculto) |

## Hospedagem

| Campo | Valor |
|-------|-------|
| Origem | HostGator / UnifiedLayer (Newfold Digital) |
| IP real (via MX) | `108.179.252.244` |
| Hostname | `108-179-252-244.unifiedlayer.com` |
| Localização | Vinhedo/SP, Brasil — AS19871 Network Solutions |
| Evidências | Subdomínios `cpanel`, `webmail`, `cpcalendars`, `webdisk` → padrão HostGator |

## DNS / Cloudflare

| Campo | Valor |
|-------|-------|
| Nameservers | `hadlee.ns.cloudflare.com` / `shane.ns.cloudflare.com` |
| Proxy ativo | IPs visíveis: `188.114.96.3`, `188.114.97.3` (Cloudflare) |

## Email

| Campo | Valor |
|-------|-------|
| MX | `mail.portaldaliturgia.com` → `108.179.252.244` (HostGator) |
| SPF | `v=spf1 a mx include:websitewelcome.com ~all` |
| DKIM/DMARC | Não detectados |
| Google Site Verification | 1 registro TXT presente |

## Site

- **Status:** HTTP 200, servido via Cloudflare
- **Tecnologia:** React CRA (`create-react-app`) — título "Portal da Liturgia"
- **Última modificação detectada:** 28/03/2026
- **Fontes:** Poppins, Space Grotesk, Roboto Mono (Google Fonts)
- **HTTPS:** Cloudflare fornece certificado

## Diagnóstico

Domínio perfeitamente ativo, sem risco de expiração. Se o cliente reportou "fora", possíveis causas:
1. Queda temporária da HostGator (origem caiu, mas Cloudflare pode ter servido cache)
2. Problema de DNS local do cliente
3. Bloqueio do Cloudflare Bot Management (cookie `__cf_bm` ativo)
4. Vencimento de **outro** domínio — não este
