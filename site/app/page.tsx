import Header from "@/components/Header";
import NoticeMarquee from "@/components/NoticeMarquee";
import Hero from "@/components/Hero";
import Musica from "@/components/Musica";
import Oracoes from "@/components/Oracoes";
import Liturgia from "@/components/Liturgia";
import Video from "@/components/Video";
import Subsidios from "@/components/Subsidios";
import Artigos from "@/components/Artigos";
import Footer from "@/components/Footer";
import {
  getArtigos,
  getMusicas,
  getOracoes,
  getTiposOracao,
  getEventos,
  getSubsidios,
  getCategorias,
} from "@/lib/directus";

export default async function Home() {
  // Fetch all data in parallel
  const [
    artigos,
    musicas,
    oracoes,
    tiposOracao,
    eventos,
    subsidios,
    categorias,
  ] = await Promise.all([
    getArtigos(7),
    getMusicas(9),
    getOracoes(12),
    getTiposOracao(),
    getEventos(10),
    getSubsidios(10),
    getCategorias(),
  ]);

  return (
    <>
      <Header />
      <NoticeMarquee />
      <Hero />
      <Musica musicas={musicas.data} categorias={categorias.data} />
      <Oracoes oracoes={oracoes.data} tipos={tiposOracao.data} />
      <Liturgia eventos={eventos.data} />
      <Video />
      <Subsidios subsidios={subsidios.data} />
      <Artigos artigos={artigos.data} categorias={categorias.data} />
      <Footer />
    </>
  );
}
