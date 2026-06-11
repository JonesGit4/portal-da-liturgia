#!/usr/bin/env python3
"""
Migração: Portal da Liturgia → PostgreSQL
Extrai JSON bruto → normaliza → insere no banco
Idempotente: upsert em todas as tabelas
"""
import json
import os
import psycopg2
from psycopg2.extras import execute_values
from datetime import datetime

RAW = "/home/paperclip/projects/portal-da-liturgia/openspec/changes/absorb-legacy-content/raw_data"
DB = "host=10.0.1.196 port=5432 dbname=portal_da_liturgia user=postgres password=Mfcd62!!Mfcd62!!"

def load_json(path):
    with open(os.path.join(RAW, path)) as f:
        return json.load(f)

def main():
    conn = psycopg2.connect(DB)
    cur = conn.cursor()
    
    print("=" * 60)
    print("MIGRAÇÃO PORTAL DA LITURGIA")
    print("=" * 60)
    
    # ---- 1. TIPOS ORACAO (lookup) ----
    print("\n1. Tipos de Oração...")
    tipos = load_json("get-tipos-oracoes.json")
    tipo_rows = [(t["id_tipo_oracao"], t["nome_tipo_oracao"]) for t in tipos]
    execute_values(cur, """
        INSERT INTO tipos_oracao (id, nome) VALUES %s
        ON CONFLICT (id) DO UPDATE SET nome = EXCLUDED.nome
    """, tipo_rows)
    print(f"   ✅ {len(tipo_rows)} tipos inseridos/atualizados")
    
    # ---- 2. EXTRAIR AUTORES ÚNICOS ----
    print("\n2. Autores...")
    autores_set = set()
    
    musicas = load_json("get-musicas.json")
    for m in musicas:
        if m.get("autor") and m["autor"].strip():
            autores_set.add(m["autor"].strip())
    
    artigos = load_json("get-all-artigos.json")
    for a in artigos:
        if a.get("autor") and a["autor"].strip():
            autores_set.add(a["autor"].strip())
    
    autor_rows = [(nome,) for nome in sorted(autores_set)]
    execute_values(cur, """
        INSERT INTO autores (nome) VALUES %s
        ON CONFLICT (nome) DO NOTHING
    """, autor_rows)
    conn.commit()
    
    # Recupera IDs dos autores
    cur.execute("SELECT id, nome FROM autores")
    autor_map = {nome: aid for aid, nome in cur.fetchall()}
    print(f"   ✅ {len(autor_map)} autores únicos")
    
    # ---- 3. CATEGORIAS ----
    print("\n3. Categorias...")
    cats_set = set()
    for m in musicas:
        if m.get("tempo_liturgico") and m["tempo_liturgico"].strip():
            cats_set.add(m["tempo_liturgico"].strip())
    for a in artigos:
        if a.get("tema") and a["tema"].strip():
            cats_set.add(a["tema"].strip())
    
    execute_values(cur, """
        INSERT INTO categorias (nome) VALUES %s
        ON CONFLICT (nome) DO NOTHING
    """, [(c,) for c in sorted(cats_set)])
    conn.commit()
    
    cur.execute("SELECT id, nome FROM categorias")
    cat_map = {nome: cid for cid, nome in cur.fetchall()}
    print(f"   ✅ {len(cat_map)} categorias")
    
    # ---- 4. MÚSICAS ----
    print("\n4. Músicas...")
    musica_rows = []
    skipped = 0
    for m in musicas:
        autor = m.get("autor", "").strip() if m.get("autor") else None
        autor_id = autor_map.get(autor) if autor else None
        cat = m.get("tempo_liturgico", "").strip() if m.get("tempo_liturgico") else None
        cat_id = cat_map.get(cat) if cat else None
        
        musica_rows.append((
            m["id"],
            m.get("nome", "Sem título"),
            autor_id,
            cat_id,
            m.get("cifra"),
            m.get("url"),
            m.get("link_partitura"),
        ))
    
    execute_values(cur, """
        INSERT INTO musicas (id, titulo, autor_id, categoria_id, letra, url_audio, url_cifra)
        VALUES %s
        ON CONFLICT (id) DO UPDATE SET
            titulo = EXCLUDED.titulo,
            autor_id = EXCLUDED.autor_id,
            categoria_id = EXCLUDED.categoria_id,
            letra = EXCLUDED.letra,
            url_audio = EXCLUDED.url_audio,
            url_cifra = EXCLUDED.url_cifra
    """, musica_rows)
    print(f"   ✅ {len(musica_rows)} músicas inseridas")
    
    # ---- 5. ARTIGOS ----
    print("\n5. Artigos...")
    artigo_rows = []
    for a in artigos:
        autor = a.get("autor", "").strip() if a.get("autor") else None
        autor_id = autor_map.get(autor) if autor else None
        tema = a.get("tema", "").strip() if a.get("tema") else None
        cat_id = cat_map.get(tema) if tema else None
        
        data = None
        if a.get("dataCriacao"):
            try:
                data = a["dataCriacao"][:10]  # YYYY-MM-DD
            except:
                pass
        
        artigo_rows.append((
            a["id"],
            a.get("nome", "Sem título"),
            autor_id,
            a.get("resumo"),
            data,
            cat_id,
        ))
    
    execute_values(cur, """
        INSERT INTO artigos (id, titulo, autor_id, conteudo, data_publicacao, categoria_id)
        VALUES %s
        ON CONFLICT (id) DO UPDATE SET
            titulo = EXCLUDED.titulo,
            autor_id = EXCLUDED.autor_id,
            conteudo = EXCLUDED.conteudo,
            data_publicacao = EXCLUDED.data_publicacao,
            categoria_id = EXCLUDED.categoria_id
    """, artigo_rows)
    print(f"   ✅ {len(artigo_rows)} artigos inseridos")
    
    # ---- 6. ORAÇÕES ----
    print("\n6. Orações...")
    oracoes = load_json("get-oracoes.json")
    oracao_rows = []
    for o in oracoes:
        oracao_rows.append((
            o["id"],
            o.get("nome_oracao", "Sem título"),
            o.get("texto_oracao_pt"),
            o.get("id_tipo_oracao"),
        ))
    
    execute_values(cur, """
        INSERT INTO oracoes (id, titulo, texto, tipo_id)
        VALUES %s
        ON CONFLICT (id) DO UPDATE SET
            titulo = EXCLUDED.titulo,
            texto = EXCLUDED.texto,
            tipo_id = EXCLUDED.tipo_id
    """, oracao_rows)
    print(f"   ✅ {len(oracao_rows)} orações inseridas")
    
    # ---- 7. EVENTOS (MISSAS) ----
    print("\n7. Eventos (Missas)...")
    missas = load_json("get-missas.json")
    evento_rows = [(slug, nome) for slug, nome in missas.items()]
    
    execute_values(cur, """
        INSERT INTO eventos (slug, titulo) VALUES %s
        ON CONFLICT (slug) DO UPDATE SET titulo = EXCLUDED.titulo
    """, evento_rows)
    print(f"   ✅ {len(evento_rows)} eventos inseridos")
    
    # ---- 8. SUBSÍDIOS ----
    print("\n8. Subsídios...")
    subsidios = load_json("get-subsidios.json")
    subsidio_rows = []
    for s in subsidios:
        desc = f"{s.get('tipo_documento', '')} - {s.get('tipo_subsidio', '')}".strip(" -")
        subsidio_rows.append((
            s["id"],
            s.get("nome_documento", "Sem título"),
            desc or None,
            s.get("caminho_arquivo"),
        ))
    
    execute_values(cur, """
        INSERT INTO subsidios (id, titulo, descricao, arquivo_url)
        VALUES %s
        ON CONFLICT (id) DO UPDATE SET
            titulo = EXCLUDED.titulo,
            descricao = EXCLUDED.descricao,
            arquivo_url = EXCLUDED.arquivo_url
    """, subsidio_rows)
    print(f"   ✅ {len(subsidio_rows)} subsídios inseridos")
    
    conn.commit()
    
    # ---- AUDITORIA FINAL ----
    print("\n" + "=" * 60)
    print("AUDITORIA DE CONTAGEM")
    print("=" * 60)
    tables = ["autores", "categorias", "tipos_oracao", "musicas", "artigos", "oracoes", "eventos", "subsidios"]
    for t in tables:
        cur.execute(f"SELECT COUNT(*) FROM {t}")
        count = cur.fetchone()[0]
        print(f"  {t:20s} = {count}")
    
    cur.close()
    conn.close()
    print("\n✅ Migração concluída com sucesso!")

if __name__ == "__main__":
    main()
