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

export default function Home() {
  return (
    <>
      <Header />
      <NoticeMarquee />
      <Hero />
      <Musica />
      <Oracoes />
      <Liturgia />
      <Video />
      <Subsidios />
      <Artigos />
      <Footer />
    </>
  );
}
