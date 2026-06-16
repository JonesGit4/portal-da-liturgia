/**
 * Directus API client — Portal da Liturgia
 * Acesso público de leitura (sem token).
 * URL configurável via env DIRECTUS_URL para staging/produção.
 */

const DIRECTUS_URL =
  process.env.DIRECTUS_URL || "https://admin.portaldaliturgia.com.br";

export interface Artigo {
  id: number;
  titulo: string;
  autor_id: number | null;
  conteudo: string | null;
  data_publicacao: string | null;
  categoria_id: number | null;
  created_at: string | null;
}

export interface Musica {
  id: number;
  titulo: string;
  autor_id: number | null;
  categoria_id: number | null;
  letra: string | null;
  url_audio: string | null;
  url_cifra: string | null;
  created_at: string | null;
}

export interface Oracao {
  id: number;
  titulo: string;
  texto: string | null;
  tipo_id: number | null;
  created_at: string | null;
}

export interface Evento {
  id: number;
  slug: string;
  titulo: string;
  created_at: string | null;
}

export interface Subsidio {
  id: number;
  titulo: string;
  descricao: string | null;
  arquivo_url: string | null;
  created_at: string | null;
}

export interface Autor {
  id: number;
  nome: string;
}

export interface Categoria {
  id: number;
  nome: string;
}

export interface TipoOracao {
  id: number;
  nome: string;
}

interface DirectusResponse<T> {
  data: T[];
  meta?: { total_count: number };
}

async function fetchDirectus<T>(
  collection: string,
  params?: Record<string, string>,
  revalidate = 3600 // ISR: 1h por padrão
): Promise<DirectusResponse<T>> {
  const searchParams = new URLSearchParams(params);
  const url = `${DIRECTUS_URL}/items/${collection}?${searchParams.toString()}`;

  const res = await fetch(url, {
    next: { revalidate },
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Directus ${collection} failed: ${res.status}`);
  }

  return res.json();
}

// ─── Convenience functions ───────────────────────────────────────────

export async function getArtigos(limit = 7) {
  return fetchDirectus<Artigo>("artigos", {
    limit: String(limit),
    sort: "-data_publicacao",
    fields: "id,titulo,conteudo,data_publicacao,autor_id,categoria_id",
  });
}

export async function getMusicas(limit = 9) {
  return fetchDirectus<Musica>("musicas", {
    limit: String(limit),
    sort: "-created_at",
    fields: "id,titulo,autor_id,categoria_id,letra,url_audio,url_cifra",
  });
}

export async function getOracoes(limit = 12) {
  return fetchDirectus<Oracao>("oracoes", {
    limit: String(limit),
    sort: "-created_at",
    fields: "id,titulo,texto,tipo_id",
  });
}

export async function getTiposOracao() {
  return fetchDirectus<TipoOracao>("tipos_oracao", {
    sort: "nome",
    fields: "id,nome",
  });
}

export async function getEventos(limit = 10) {
  return fetchDirectus<Evento>("eventos", {
    limit: String(limit),
    sort: "-created_at",
    fields: "id,slug,titulo",
  });
}

export async function getSubsidios(limit = 10) {
  return fetchDirectus<Subsidio>("subsidios", {
    limit: String(limit),
    sort: "-created_at",
    fields: "id,titulo,descricao,arquivo_url",
  });
}

export async function getAutores() {
  return fetchDirectus<Autor>("autores", { sort: "nome", fields: "id,nome" });
}

export async function getCategorias() {
  return fetchDirectus<Categoria>("categorias", {
    sort: "nome",
    fields: "id,nome",
  });
}
