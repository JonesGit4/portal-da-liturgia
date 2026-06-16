import { Icon } from "./icons";
import type { Musica as MusicaType, Categoria } from "@/lib/directus";

const fallbackCards = [
  { cat: "Canto Gregoriano", ttl: "O canto próprio da liturgia romana", desc: "Repertório completo organizado por tempo litúrgico, com partituras e gravações." },
  { cat: "Hinos & Salmos", ttl: "Salmodia", desc: "Para vésperas, laudes e ofício." },
  { cat: "Polifonia", ttl: "Polifonia sacra", desc: "Palestrina, Vitória, Lassus." },
];

const fallbackImages = [
  "/images/musica-crucificacao.webp",
  "/images/musica-coro.webp",
  "/images/musica-manuscrito.webp",
];

interface Props {
  musicas?: MusicaType[];
  categorias?: Categoria[];
}

export default function Musica({ musicas, categorias }: Props) {
  const catMap = new Map(categorias?.map((c) => [c.id, c.nome]) ?? []);
  const hasData = musicas && musicas.length > 0;
  const display = hasData
    ? musicas.slice(0, 3).map((m) => ({
        cat: catMap.get(m.categoria_id ?? 0) ?? "Música",
        ttl: m.titulo,
        desc: m.letra?.replace(/<[^>]*>/g, "").slice(0, 120) ?? "",
      }))
    : fallbackCards;

  return (
    <section id="musica" data-screen-label="Música Litúrgica">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <span className="eyebrow">01 — Sacra Musica</span>
            <h2>Música Litúrgica</h2>
            <p>
              Tradição contínua: do canto gregoriano à polifonia, repertório fiel à reverência devida ao
              mistério.
            </p>
          </div>
          <div className="right">
            <a className="link-arrow" href="#">
              Ver biblioteca <Icon.ArrowRight />
            </a>
          </div>
        </div>

        <div className="music-grid">
          <div className="music-card feat">
            <img src={fallbackImages[0]} alt="Crucificação de Jesus Cristo" className="card-img" />
            <div className="cat">{display[0].cat}</div>
            <h3>{display[0].ttl}</h3>
            <p>{display[0].desc}</p>
          </div>

          <div className="music-card">
            <img src={fallbackImages[1]} alt="Coro litúrgico cantando na igreja" className="card-img" />
            <div className="cat">{display[1].cat}</div>
            <h3>{display[1].ttl}</h3>
            <p>{display[1].desc}</p>
          </div>

          <div className="music-card">
            <img src={fallbackImages[2]} alt="Manuscrito de partitura gregoriana" className="card-img" />
            <div className="cat">{display[2].cat}</div>
            <h3>{display[2].ttl}</h3>
            <p>{display[2].desc}</p>
          </div>

          <div className="music-quote">
            <blockquote>
              &ldquo;Para nós, o canto e a música sacra têm uma importância fundamental por sua incidência
              cultual, espiritual, formativa e comunitária.&rdquo;
            </blockquote>
            <cite>— Pe. Carlos Miguel Buela</cite>
          </div>
        </div>
      </div>
    </section>
  );
}
