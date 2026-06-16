import { Icon } from "./icons";

const items = [
  { cat: "Estudo", ttl: "A Santa Missa explicada", desc: "Guia passo a passo do Ordinário da Missa, com comentários patrísticos.", label: "MISSAL ABERTO" },
  { cat: "Formação", ttl: "Cristo, sumo sacerdote", desc: "Meditações sobre o sacerdócio comum e ministerial.", label: "CRUCIFIXO" },
  { cat: "Rituais", ttl: "O Rito do Batismo", desc: "Acompanhamento e preparação para padrinhos, padres e famílias.", label: "BATISMO" },
];

export default function Subsidios() {
  return (
    <section id="subsidios" data-screen-label="Subsídios" className="sub-bg">
      <div className="wrap">
        <div className="sub-quote">
          <span className="eyebrow">04 — Subsidia Liturgica</span>
          <blockquote>
            &ldquo;A Santa Missa é a grande escola do amor cristão. Ela abre as portas todos os dias, e irá
            abri-las até o fim do mundo.&rdquo;
          </blockquote>
          <p className="attrib">— Pe. Carlos M. Buela · Nuestra Missa</p>
        </div>

        <div className="sub-grid">
          {items.map((it) => (
            <article key={it.ttl} className="sub-card">
              {it.label === "MISSAL ABERTO" ? <img src="/images/subsidios-missal.webp" alt={it.label} className="sub-img" /> : it.label === "CRUCIFIXO" ? <img src="/images/subsidios-crucifixo.webp" alt={it.label} className="sub-img" /> : <img src="/images/subsidios-batismo.webp" alt={it.label} className="sub-img" />}
              <div className="body">
                <div className="cat">{it.cat}</div>
                <h3>{it.ttl}</h3>
                <p>{it.desc}</p>
                <div className="more">
                  Ler mais <Icon.ArrowRight />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
