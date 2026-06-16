"use client";

import { useEffect, useState } from "react";
import { Icon, BrandMark } from "./icons";

const links = [
  { id: "liturgia", label: "Liturgia Diária" },
  { id: "musica", label: "Música" },
  { id: "oracoes", label: "Orações" },
  { id: "artigos", label: "Artigos" },
  { id: "subsidios", label: "Subsídios" },
  { id: "documentos", label: "Documentos" },
];

export default function Header() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = ["musica", "oracoes", "liturgia", "video", "subsidios", "artigos"];
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="hdr">
      <div className="wrap hdr-inner">
        <a href="#top" className="brand">
          <BrandMark />
          <div className="brand-text">
            <b>Portal da Liturgia</b>
            <small>Laudate Dominum</small>
          </div>
        </a>
        <nav className="nav">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "active" : ""}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-tools">
          <button className="icon-btn" aria-label="Buscar">
            <Icon.Search />
          </button>
          <button className="icon-btn" aria-label="Menu" style={{ display: "none" }}>
            <Icon.Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
