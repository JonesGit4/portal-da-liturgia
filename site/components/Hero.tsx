import { Icon } from "./icons";

export default function Hero() {
  return (
    <section className="hero no-dots" id="top" data-screen-label="Hero" style={{ borderTop: 0, paddingTop: 70 }}>
      <div className="wrap hero-grid">
        <div>
          <div className="hero-eyebrow">
            <span className="dash" />
            <span className="eyebrow">Laudate Dominum Omnes Gentes</span>
          </div>
          <h1>
            Nós amamos a <em>Liturgia.</em>
          </h1>
          <p className="hero-lede">
            Vamos juntos dar à Santa Missa o lugar de dignidade que ela merece ter na igreja e na nossa
            vida.
          </p>
          <p className="hero-attrib">— Pe. Carlos Miguel Buela</p>
          <div className="hero-ctas">
            <a href="#liturgia" className="btn btn-primary">
              Liturgia de hoje <Icon.ArrowRight />
            </a>
            <a href="#oracoes" className="btn btn-ghost">
              Explorar orações
            </a>
          </div>
        </div>
        <div className="hero-art">
          <img src="/images/hero-elevacao.jpg" alt="Elevação da hóstia durante a Santa Missa" className="hero-img" loading="eager" fetchPriority="high" />
          <div className="badge">
            <div className="lbl">Próxima solenidade</div>
            <div className="ttl">Santíssima Trindade</div>
            <div className="dt">31 · maio · 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}
