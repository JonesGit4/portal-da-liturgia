import { Icon } from "./icons";

const cards = [
  { cat: "Canto Gregoriano", ttl: "O canto próprio da liturgia romana", desc: "Repertório completo organizado por tempo litúrgico, com partituras e gravações." },
  { cat: "Hinos & Salmos", ttl: "Salmodia", desc: "Para vésperas, laudes e ofício." },
  { cat: "Polifonia", ttl: "Polifonia sacra", desc: "Palestrina, Vitória, Lassus." },
];

export default function Musica() {
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
            <img src="/images/musica-crucificacao.jpg" alt="Crucificação de Jesus Cristo" className="card-img" />
            <div className="cat">{cards[0].cat}</div>
            <h3>{cards[0].ttl}</h3>
            <p>{cards[0].desc}</p>
          </div>

          <div className="music-card">
            <img src="/images/musica-coro.jpg" alt="Coro litúrgico cantando na igreja" className="card-img" />
            <div className="cat">{cards[1].cat}</div>
            <h3>{cards[1].ttl}</h3>
            <p>{cards[1].desc}</p>
          </div>

          <div className="music-card">
            <img src="/images/musica-manuscrito.jpg" alt="Manuscrito de partitura gregoriana" className="card-img" />
            <div className="cat">{cards[2].cat}</div>
            <h3>{cards[2].ttl}</h3>
            <p>{cards[2].desc}</p>
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
