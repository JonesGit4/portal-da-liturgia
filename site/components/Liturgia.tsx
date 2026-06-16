import { Icon } from "./icons";

const rdgs = [
  { ix: "I", lbl: "1ª Leitura", ref: "Tobias 2, 9-14", ttl: "Leitura do Livro de Tobias" },
  { ix: "II", lbl: "Salmo", ref: "Sl 111(112), 1-7", ttl: "Feliz o homem que teme o Senhor" },
  { ix: "III", lbl: "Evangelho", ref: "Marcos 12, 13-17", ttl: "Dai a César o que é de César" },
];

export default function Liturgia() {
  return (
    <section id="liturgia" data-screen-label="Liturgia Diária" className="lit-bg">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <span className="eyebrow">03 — Liturgia Diária</span>
            <h2>A Palavra de hoje</h2>
            <p className="lit-date" style={{ marginTop: 18 }}>
              Terça-feira, 26 de maio de 2026 — Tempo Comum
            </p>
          </div>
          <div className="right">
            <a className="link-arrow" href="#">
              Calendário litúrgico <Icon.Calendar />
            </a>
          </div>
        </div>

        <div className="lit-grid">
          <article className="lit-card">
            <img src="/images/liturgia-missal.jpg" alt="Missal católico aberto" className="lit-img" />
            <div className="body">
              <div className="saint">São Filipe Néri · Memória</div>
              <h3>&ldquo;Dai a César o que é de César, e a Deus o que é de Deus&rdquo;</h3>
              <div className="ref">Mc 12, 13-17 · Evangelho do dia</div>
              <p>
                Naquele tempo, alguns fariseus e herodianos foram enviados a Jesus para o apanharem numa
                palavra. Vieram a ele e disseram: &ldquo;Mestre, sabemos que és sincero e não te deixas
                influenciar por ninguém…&rdquo;
              </p>
              <div className="meta">
                <div>
                  <b>Cor litúrgica</b> · Branco
                </div>
                <div>
                  <b>Tempo</b> · Comum, semana VIII
                </div>
                <div>
                  <b>Ofício</b> · Vésperas 19h
                </div>
              </div>
            </div>
          </article>

          <div>
            <h4
              style={{
                fontSize: 14,
                fontFamily: "var(--sans)",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                marginBottom: 8,
              }}
            >
              Leituras do dia
            </h4>
            <div className="lit-rdgs">
              {rdgs.map((r) => (
                <a key={r.ix} className="rdg" href="#">
                  <div className="ix">{r.ix}</div>
                  <div className="col">
                    <div className="lbl">{r.lbl}</div>
                    <div className="ref">{r.ref}</div>
                    <div className="ttl">{r.ttl}</div>
                  </div>
                  <div className="go">
                    <Icon.ArrowRight />
                  </div>
                </a>
              ))}
            </div>
            <div style={{ marginTop: 28, padding: 24, background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 4 }}>
              <div style={{ fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 8 }}>
                Homilia diária
              </div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.3, marginBottom: 10 }}>
                &ldquo;O cristão sabe distinguir as duas cidades — sem confundi-las, sem opor uma à outra.&rdquo;
              </div>
              <a className="link-arrow" href="#" style={{ fontSize: 13 }}>
                Ler homilia <Icon.ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
