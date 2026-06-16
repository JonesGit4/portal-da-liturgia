import { Icon } from "./icons";

const items = [
  { n: "I", ttl: "Novenas", sub: "32 disponíveis" },
  { n: "II", ttl: "Diárias", sub: "Manhã, noite e refeições" },
  { n: "III", ttl: "Ação de Graças", sub: "Pós-comunhão" },
  { n: "IV", ttl: "Santos", sub: "Por intercessão" },
  { n: "V", ttl: "Ladainhas", sub: "Tradição litúrgica" },
  { n: "VI", ttl: "Preparação para a Missa", sub: "Antes do altar" },
  { n: "VII", ttl: "Terços", sub: "Mistérios marianos" },
  { n: "VIII", ttl: "Via Sacra", sub: "Estações da Paixão" },
];

export default function Oracoes() {
  return (
    <section id="oracoes" data-screen-label="Orações">
      <div className="wrap pray-wrap">
        <div className="pray-quote">
          <span className="eyebrow">02 — Oratio</span>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 14 }}>
            Orações
          </h2>
          <blockquote>
            &ldquo;Quem reza se salva, quem não reza é condenado. A salvação é certa e facílima. Se não nos
            salvarmos, a culpa será toda nossa.&rdquo;
          </blockquote>
          <p className="attrib">— Santo Afonso Maria de Ligório</p>
        </div>

        <div className="pray-list">
          {items.map((it) => (
            <button key={it.ttl} className="pray-item">
              <span className="num">{it.n}</span>
              <span className="body">
                <b>{it.ttl}</b>
                <span>{it.sub}</span>
              </span>
              <span className="arr">
                <Icon.ArrowRight />
              </span>
            </button>
          ))}
          <button className="pray-item all">
            <span className="num">∞</span>
            <span className="body">
              <b>Todas as orações</b>
              <span>Biblioteca completa em ordem alfabética</span>
            </span>
            <span className="arr">
              <Icon.ArrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
