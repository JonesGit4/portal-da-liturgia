import { Icon } from "./icons";
import type { Artigo, Categoria } from "@/lib/directus";

const fallbackArts = [
  { cat: "Espiritualidade", ttl: "A luta do demônio contra a matéria da Eucaristia", desc: "Tema tratado pelo Beato Clemente Marchisio no Congresso Eucarístico de Turim, 1894 — combate aos sacrilégios e uso indevido da matéria.", date: "14 mai 2026", read: "8 min", label: "EUCARISTIA" },
  { cat: "Música", ttl: "O canto do Glória: legislação e estrutura", desc: "Parte integrante dos ritos iniciais da Missa.", date: "11 mai 2026", read: "5 min", label: "CANTO" },
  { cat: "Doutrina", ttl: "Dias de preceito, quais são?", desc: "Domingos e dias santos obrigatórios.", date: "08 mai 2026", read: "4 min", label: "CALENDÁRIO" },
  { cat: "Vocação", ttl: "O sacerdote — o amor ao seu dever", desc: 'Texto sobre a missão do sacerdote extraído de "A vocação sacerdotal".', date: "02 mai 2026", read: "12 min", label: "SACERDOTE" },
  { cat: "Sacramentos", ttl: "A música na celebração do Matrimônio", desc: "Cânticos adequados ao rito e à expressão da fé.", date: "28 abr 2026", read: "6 min", label: "NÚPCIAS" },
  { cat: "Espiritualidade", ttl: "Lectio Divina — o que é e como fazer", desc: "Forma de contemplação meditativa dos padres do deserto.", date: "24 abr 2026", read: "7 min", label: "ESCRITURA" },
  { cat: "Arquitetura", ttl: "O Altar", desc: "Lugar mais importante do templo, onde se celebra a Santa Missa.", date: "20 abr 2026", read: "5 min", label: "ALTAR" },
];

const fallbackImages: Record<string, string> = {
  EUCARISTIA: "/images/artigo-eucaristia.webp",
  CANTO: "/images/artigo-canto-gloria.webp",
  CALENDÁRIO: "/images/artigo-dias-preceito.webp",
  SACERDOTE: "/images/artigo-sacerdote.webp",
  NÚPCIAS: "/images/artigo-matrimonio.webp",
  ESCRITURA: "/images/artigo-lectio.webp",
  ALTAR: "/images/artigo-altar.webp",
};

function estimarLeitura(texto: string): string {
  const palavras = texto.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const min = Math.max(1, Math.ceil(palavras / 200));
  return `${min} min`;
}

function formatarData(isoStr: string | null): string {
  if (!isoStr) return "";
  return new Date(isoStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

interface Props {
  artigos?: Artigo[];
  categorias?: Categoria[];
}

export default function Artigos({ artigos, categorias }: Props) {
  const catMap = new Map(categorias?.map((c) => [c.id, c.nome]) ?? []);
  const hasData = artigos && artigos.length > 0;
  const display = hasData
    ? artigos.map((a) => ({
        cat: catMap.get(a.categoria_id ?? 0) ?? "Geral",
        ttl: a.titulo,
        desc: (a.conteudo?.replace(/<[^>]*>/g, "").slice(0, 150) ?? "") + "...",
        date: formatarData(a.data_publicacao),
        read: estimarLeitura(a.conteudo ?? ""),
        label: catMap.get(a.categoria_id ?? 0)?.toUpperCase() ?? "ARTIGO",
      }))
    : fallbackArts;

  const images = hasData
    ? Object.fromEntries(
        (categorias ?? []).map((c) => [c.nome.toUpperCase(), `/images/artigo-${c.nome.toLowerCase().replace(/\s+/g, "-")}.webp`])
      )
    : fallbackImages;

  return (
    <section id="artigos" data-screen-label="Artigos">
      <div className="wrap">
        <div className="sec-head">
          <div className="left">
            <span className="eyebrow">05 — Articuli</span>
            <h2>Artigos formativos</h2>
            <p>
              Doutrina, espiritualidade e formação litúrgica — textos curados para nutrir a vida cristã.
            </p>
          </div>
          <div className="right">
            <a className="link-arrow" href="#">
              Todos os artigos <Icon.ArrowRight />
            </a>
          </div>
        </div>

        <div className="art-grid">
          {display.map((a, i) => (
            <article key={i} className="art">
              <img
                src={images[a.label] ?? "/images/artigo-eucaristia.webp"}
                alt={a.ttl}
                className="art-img"
                loading="lazy"
              />
              <div className="cat">{a.cat}</div>
              <h3>{a.ttl}</h3>
              <p>{a.desc}</p>
              <div className="footer">
                <span>{a.date}</span>
                <span className="dot" />
                <span>{a.read} de leitura</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
