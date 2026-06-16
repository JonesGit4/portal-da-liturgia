import type { Subsidio } from "@/lib/directus";
import { Icon } from "./icons";

const fallbackItems = [
  { cat: "Estudo", ttl: "A Santa Missa explicada", desc: "Guia passo a passo do Ordinário da Missa, com comentários patrísticos.", img: "/images/subsidios-missal.webp" },
  { cat: "Formação", ttl: "Cristo, sumo sacerdote", desc: "Meditações sobre o sacerdócio comum e ministerial.", img: "/images/subsidios-crucifixo.webp" },
  { cat: "Rituais", ttl: "O Rito do Batismo", desc: "Acompanhamento e preparação para padrinhos, padres e famílias.", img: "/images/subsidios-batismo.webp" },
];

const fallbackImgs = [
  "/images/subsidios-missal.webp",
  "/images/subsidios-crucifixo.webp",
  "/images/subsidios-batismo.webp",
];

interface Props {
  subsidios?: Subsidio[];
}

export default function Subsidios({ subsidios }: Props) {
  const hasData = subsidios && subsidios.length > 0;
  const display = hasData
    ? subsidios.slice(0, 3).map((s, i) => ({
        cat: s.titulo.split("—")[0]?.trim() || "Subsídio",
        ttl: s.titulo.split("—")[1]?.trim() || s.titulo,
        desc: s.descricao?.replace(/<[^>]*>/g, "").slice(0, 130) ?? "",
        img: fallbackImgs[i % 3],
      }))
    : fallbackItems;

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
          {display.map((it) => (
            <article key={it.ttl} className="sub-card">
              <img src={it.img} alt={it.ttl} className="sub-img" />
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
