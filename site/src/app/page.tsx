export default function Home() {
  return (
    <>
      {/* Notice Marquee */}
      <div className="h-[30px] bg-[var(--accent)] text-[var(--bg)] flex items-center overflow-hidden text-[11.5px] tracking-[0.08em]">
        <div className="flex whitespace-nowrap animate-[ticker_55s_linear_infinite]">
          <span className="inline-flex items-center gap-[14px] pr-[14px]">
            Liturgia Diária • Missal Romano 1962
            <span className="w-1 h-1 bg-[var(--bg)] rounded-full opacity-65 flex-shrink-0" />
          </span>
          <span className="inline-flex items-center gap-[14px] pr-[14px]">
            Próxima live: Santa Missa Domingo • 10h
            <span className="w-1 h-1 bg-[var(--bg)] rounded-full opacity-65 flex-shrink-0" />
          </span>
          <span className="inline-flex items-center gap-[14px] pr-[14px]">
            Liturgia Diária • Missal Romano 1962
            <span className="w-1 h-1 bg-[var(--bg)] rounded-full opacity-65 flex-shrink-0" />
          </span>
          <span className="inline-flex items-center gap-[14px] pr-[14px]">
            Próxima live: Santa Missa Domingo • 10h
            <span className="w-1 h-1 bg-[var(--bg)] rounded-full opacity-65 flex-shrink-0" />
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--line)]">
        <div className="wrap flex items-center gap-8 py-[14px]">
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <span className="w-8 h-8 grid place-items-center bg-[var(--accent)] text-[var(--bg)] font-[var(--serif)] italic text-[17px] rounded-full">
              P
            </span>
            <span className="flex flex-col leading-[1.1]">
              <b className="font-[var(--serif)] font-medium text-[16px] tracking-[0.005em] whitespace-nowrap">Portal da Liturgia</b>
              <small className="text-[9.5px] tracking-[0.16em] uppercase text-[var(--ink-3)] mt-[2px] whitespace-nowrap">Missal Romano 1962</small>
            </span>
          </a>

          <nav className="flex items-center gap-[2px] ml-auto">
            {["Músicas", "Orações", "Liturgia", "Artigos", "Subsídios"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-3 py-2 text-[13.5px] text-[var(--ink-2)] rounded-lg hover:text-[var(--ink)] hover:bg-[var(--bg-2)] transition ${
                  i === 0 ? "text-[var(--accent)] after:absolute after:left-3 after:right-3 after:bottom-[2px] after:h-[2px] after:bg-[var(--accent)] after:rounded-sm relative" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 ml-[14px]">
            <button className="w-9 h-9 grid place-items-center border border-[var(--line)] text-[var(--ink-2)] rounded-full hover:bg-[var(--bg-2)] hover:border-[var(--ink-3)] hover:text-[var(--ink)] transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ padding: "90px 0 80px" }}>
        <div className="wrap grid grid-cols-[1.05fr_0.95fr] gap-[clamp(40px,6vw,90px)] items-center max-[980px]:grid-cols-1 max-[980px]:gap-[50px]">
          <div>
            <div className="inline-flex items-center gap-[10px] mb-8">
              <span className="eyebrow whitespace-nowrap">Liturgia Católica</span>
              <span className="w-[38px] h-[6px] bg-[radial-gradient(circle,var(--accent)_1.4px,transparent_1.8px)] bg-[size:12px_6px] bg-repeat-x" />
            </div>
            <h1 className="text-[clamp(48px,6.2vw,88px)] leading-[1.02] tracking-[-0.025em] font-normal mb-7" style={{ fontFamily: "var(--serif)" }}>
              Portal da <em className="italic text-[var(--accent)] font-medium not-italic" style={{ color: "var(--accent)" }}>Liturgia</em>
            </h1>
            <p className="text-lg leading-relaxed text-[var(--ink-2)] max-w-[480px] mb-[14px]">
              Músicas sacras, orações, artigos e subsídios litúrgicos para enriquecer sua vivência da Santa Missa tradicional.
            </p>
            <p className="font-[var(--serif)] italic text-[14.5px] text-[var(--ink-3)] tracking-[0.01em] mb-10">
              «Celebrando a beleza da liturgia desde 2024»
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#musicas" className="btn-primary">Explorar Músicas</a>
              <a href="#oracoes" className="btn-ghost">Ver Orações →</a>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded">
            <div className="w-full h-full rounded bg-[repeating-linear-gradient(45deg,transparent_0_7px,rgba(107,20,33,0.15)_7px_8px),linear-gradient(180deg,var(--bg-3),var(--bg-2))] border border-[var(--line)] flex items-center justify-center">
              <span className="font-[var(--mono)] text-[10.5px] tracking-[0.05em] text-[var(--ink-3)] bg-[var(--bg)] px-2 py-1 border border-[var(--line)] rounded-full">
                Portal da Liturgia
              </span>
            </div>
            <div className="absolute -left-7 -bottom-7 bg-[var(--bg)] border border-[var(--line)] rounded p-[22px] w-[260px] shadow-[0_18px_40px_-20px_rgba(45,42,38,0.18)]">
              <div className="absolute left-[18px] right-[18px] top-[10px] h-[6px] bg-[radial-gradient(circle,var(--accent)_1.4px,transparent_1.8px)] bg-[size:12px_6px] bg-repeat-x" />
              <div className="text-[10px] tracking-[0.18em] uppercase text-[var(--ink-3)] mb-[6px] mt-3">Destaque Litúrgico</div>
              <div className="font-[var(--serif)] text-[22px] leading-[1.15] mb-1">Missa Tridentina</div>
              <div className="text-xs text-[var(--accent)] font-medium tracking-[0.06em]">Dominica • 10h</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="dot-rule" />

      {/* Músicas Section */}
      <section>
        <div className="wrap">
          <div className="flex items-end justify-between gap-10 mb-14">
            <div className="max-w-[640px]">
              <span className="eyebrow dotted inline-flex items-center gap-[10px]">
                <span className="inline-block w-[6px] h-[6px] bg-[var(--accent)] rounded-full" /> Músicas Sacras
              </span>
              <h2 className="text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em] mt-[14px]" style={{ fontFamily: "var(--serif)" }}>
                Cânticos para a<br />Santa Missa
              </h2>
              <p className="text-[var(--ink-2)] mt-[18px] max-w-[560px]">
                504 músicas litúrgicas com cifras, partituras e links para YouTube — organizadas por tempo litúrgico.
              </p>
            </div>
            <a href="/musicas" className="inline-flex items-center gap-2 text-[13.5px] font-medium border-b border-[var(--ink)] pb-[3px] hover:text-[var(--accent)] hover:border-[var(--accent)] transition">
              Ver todas →
            </a>
          </div>

          <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-2">
            {/* Featured card (2 col x 2 rows) */}
            <div className="col-span-2 row-span-2 max-[980px]:col-span-2">
              <div className="aspect-[4/5] bg-[var(--bg-3)] rounded mb-4" />
              <span className="text-[10.5px] tracking-[0.16em] uppercase text-[var(--accent)] font-semibold mb-[6px] block">Advento</span>
              <h3 className="text-[32px] leading-[1.15] tracking-[-0.01em]" style={{ fontFamily: "var(--serif)" }}>Rorate Caeli</h3>
              <p className="text-[var(--ink-2)] text-sm mt-2 line-clamp-2">Cântico gregoriano do tempo do Advento. Não abandoneis, ó céus, o orvalho...</p>
            </div>

            {/* Card normal */}
            {[1, 2].map(i => (
              <div key={i}>
                <div className="aspect-[4/5] bg-[var(--bg-2)] rounded mb-4" />
                <span className="text-[10.5px] tracking-[0.16em] uppercase text-[var(--accent)] font-semibold mb-[6px] block">Tempo Comum</span>
                <h3 className="text-[22px] leading-[1.15] tracking-[-0.01em]" style={{ fontFamily: "var(--serif)" }}>Kyrie Eleison</h3>
                <p className="text-[var(--ink-2)] text-sm mt-2 line-clamp-2">Senhor, tende piedade de nós...</p>
              </div>
            ))}

            {/* Quote block (2 col x 1 row) */}
            <div className="col-span-2 bg-[var(--bg-2)] p-9 rounded border border-[var(--line)] flex flex-col justify-center">
              <blockquote className="font-[var(--serif)] italic text-[22px] leading-[1.35] text-[var(--ink)] mb-4 tracking-[-0.005em]" style={{ fontFamily: "var(--serif)" }}>
                «Cantar é rezar duas vezes.»
              </blockquote>
              <cite className="not-italic text-xs tracking-[0.08em] uppercase text-[var(--ink-3)]">Santo Agostinho</cite>
            </div>
          </div>
        </div>
      </section>

      <hr className="dot-rule" />

      {/* Footer */}
      <footer className="bg-[#25211E] text-[#C9C4BD] py-20 pb-9">
        <div className="wrap">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-[50px] pb-[60px] border-b border-[#3D3833] max-[980px]:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 grid place-items-center bg-[var(--bg)] text-[var(--accent)] font-[var(--serif)] italic text-[17px] rounded-full">P</span>
                <span className="flex flex-col leading-[1.1]">
                  <b className="font-[var(--serif)] font-medium text-base text-[var(--bg)]">Portal da Liturgia</b>
                  <small className="text-[9.5px] tracking-[0.16em] uppercase text-[#A6A099] mt-[2px]">Missal Romano 1962</small>
                </span>
              </div>
              <p className="mt-[22px] text-sm max-w-[320px] leading-[1.65] text-[#B0ABA4]">
                Celebrando e preservando a riqueza da liturgia católica tradicional.
              </p>
            </div>

            {[
              { title: "Conteúdo", links: ["Músicas", "Orações", "Liturgia Diária", "Artigos"] },
              { title: "Recursos", links: ["Subsídios", "Partituras", "Cifras", "Vídeos"] },
              { title: "Sobre", links: ["Quem Somos", "Contato", "Apoie", "Privacidade"] },
            ].map(col => (
              <div key={col.title}>
                <h5 className="font-[var(--sans)] text-[11px] tracking-[0.16em] uppercase text-[#827D76] font-semibold mb-5">{col.title}</h5>
                <ul className="flex flex-col gap-[10px]">
                  {col.links.map(link => (
                    <li key={link}><a href="#" className="text-sm text-[#CCC7BF] hover:text-white transition">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-[26px] text-xs text-[#827D76]">
            <span>© {new Date().getFullYear()} Portal da Liturgia</span>
            <div className="flex gap-[10px]">
              {["YouTube", "Instagram", "Telegram"].map(s => (
                <a key={s} href="#" className="w-9 h-9 grid place-items-center border border-[#3D3833] rounded-full text-[#C9C4BD] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition text-[10px]">{s.charAt(0)}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>


    </>
  );
}
