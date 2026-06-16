// page.tsx — Portal da Liturgia, dados exatos do redesign.jsx (Standalone)

export default function Home() {
  return (
    <>
      {/* === NOTICE MARQUEE === */}
      <div className="bg-[var(--accent)] text-[var(--bg)] h-[30px] flex items-center overflow-hidden relative text-[11.5px] tracking-[0.08em]" role="region" aria-label="Avisos litúrgicos">
        <div className="flex whitespace-nowrap gap-0 animate-[nticker_55s_linear_infinite] flex-shrink-0">
          {[
            'Liturgia de hoje · Terça-feira, 26 maio',
            'Memória de São Filipe Néri',
            'Cor litúrgica · Branco',
            'Tempo Comum · Semana VIII',
            'Próxima solenidade · Santíssima Trindade · 31.05',
            'Vésperas · 19h00',
            'Homilia diária no YouTube',
          ].flatMap(s => [s, s, s]).map((s, i) => (
            <span key={i} className="inline-flex items-center gap-[14px] pr-[14px]">
              <span className="w-1 h-1 bg-[var(--bg)] rounded-full opacity-65 flex-shrink-0" />
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* === HEADER === */}
      <header className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--line)] transition-colors">
        <div className="wrap flex items-center gap-8 py-[14px]">
          <a href="#top" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 grid place-items-center bg-[var(--accent)] text-[var(--accent-ink)] rounded-full" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M16 6v20M9 13h14" />
              </svg>
            </div>
            <div className="flex flex-col leading-[1.1]">
              <b className="font-[var(--serif)] font-medium text-[16px] tracking-[0.005em] whitespace-nowrap">Portal da Liturgia</b>
              <small className="text-[9.5px] tracking-[0.16em] uppercase text-[var(--ink-3)] mt-[2px] whitespace-nowrap">Laudate Dominum</small>
            </div>
          </a>

          <nav className="flex items-center gap-[2px] ml-auto">
            {[
              { id: 'liturgia', label: 'Liturgia Diária' },
              { id: 'musica', label: 'Música' },
              { id: 'oracoes', label: 'Orações' },
              { id: 'artigos', label: 'Artigos' },
              { id: 'subsidios', label: 'Subsídios' },
              { id: 'documentos', label: 'Documentos' },
            ].map(l => (
              <a key={l.id} href={`#${l.id}`}
                className="px-3 py-2 text-[13.5px] text-[var(--ink-2)] rounded-lg hover:text-[var(--ink)] hover:bg-[var(--bg-2)] transition relative">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 ml-[14px]">
            <button className="w-9 h-9 grid place-items-center border border-[var(--line)] text-[var(--ink-2)] rounded-full hover:bg-[var(--bg-2)] hover:border-[var(--ink-3)] hover:text-[var(--ink)] transition" aria-label="Buscar">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* === HERO === */}
      <section className="pt-[70px] pb-20 relative overflow-hidden" id="top">
        <div className="wrap grid grid-cols-[1.05fr_0.95fr] gap-[clamp(40px,6vw,90px)] items-center max-[980px]:grid-cols-1 max-[980px]:gap-[50px]">
          <div>
            <div className="inline-flex items-center gap-[10px] mb-8">
              <span className="w-[38px] h-[6px] bg-[radial-gradient(circle,var(--accent)_1.4px,transparent_1.8px)] bg-[size:12px_6px] bg-repeat-x" />
              <span className="eyebrow whitespace-nowrap">Laudate Dominum Omnes Gentes</span>
            </div>
            <h1 className="text-[clamp(48px,6.2vw,88px)] leading-[1.02] tracking-[-0.025em] font-normal mb-7" style={{ fontFamily: 'var(--serif)' }}>
              Nós amamos a <em className="italic font-medium" style={{ color: 'var(--accent)' }}>Liturgia.</em>
            </h1>
            <p className="text-lg leading-relaxed text-[var(--ink-2)] max-w-[480px] mb-[14px]">
              Vamos juntos dar à Santa Missa o lugar de dignidade que ela merece ter na igreja e na nossa vida.
            </p>
            <p className="font-[var(--serif)] italic text-[14.5px] text-[var(--ink-3)] tracking-[0.01em] mb-10">
              — Pe. Carlos Miguel Buela
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#liturgia" className="btn-primary">Liturgia de hoje <ArrowRight /></a>
              <a href="#oracoes" className="btn-ghost">Explorar orações</a>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded">
            <div className="ph w-full h-full rounded" data-label="ELEVAÇÃO • foto principal" />
            <div className="absolute -left-7 -bottom-7 bg-[var(--bg)] border border-[var(--line)] rounded p-[22px] w-[260px] shadow-[0_18px_40px_-20px_rgba(45,42,38,0.18)]">
              <div className="absolute left-[18px] right-[18px] top-[10px] h-[6px] bg-[radial-gradient(circle,var(--accent)_1.4px,transparent_1.8px)] bg-[size:12px_6px] bg-repeat-x" />
              <div className="text-[10px] tracking-[0.18em] uppercase text-[var(--ink-3)] mb-[6px] mt-3">Próxima solenidade</div>
              <div className="font-[var(--serif)] text-[22px] leading-[1.15] mb-1">Santíssima Trindade</div>
              <div className="text-xs text-[var(--accent)] font-medium tracking-[0.06em]">31 · maio · 2026</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="dot-rule" />

      {/* === MÚSICA LITÚRGICA === */}
      <section id="musica">
        <div className="wrap">
          <div className="flex items-end justify-between gap-10 mb-14">
            <div className="max-w-[640px]">
              <span className="eyebrow">01 — Sacra Musica</span>
              <h2 className="text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em] mt-[14px]" style={{ fontFamily: 'var(--serif)' }}>Música Litúrgica</h2>
              <p className="text-[var(--ink-2)] mt-[18px] max-w-[560px]">
                Tradição contínua: do canto gregoriano à polifonia, repertório fiel à reverência devida ao mistério.
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-[13.5px] font-medium border-b border-[var(--ink)] pb-[3px] hover:text-[var(--accent)] hover:border-[var(--accent)] transition">
              Ver biblioteca <ArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-2">
            <div className="col-span-2 row-span-2 max-[980px]:col-span-2">
              <div className="ph aspect-[4/5] rounded mb-4" data-label="CRUCIFICAÇÃO • obra-prima" />
              <span className="text-[10.5px] tracking-[0.16em] uppercase text-[var(--accent)] font-semibold mb-[6px] block">Canto Gregoriano</span>
              <h3 className="text-[32px] leading-[1.15] tracking-[-0.01em]" style={{ fontFamily: 'var(--serif)' }}>O canto próprio da liturgia romana</h3>
              <p className="text-[var(--ink-2)] text-sm mt-2 line-clamp-2">Repertório completo organizado por tempo litúrgico, com partituras e gravações.</p>
            </div>

            {[
              { cat: 'Hinos & Salmos', ttl: 'Salmodia', desc: 'Para vésperas, laudes e ofício.' },
              { cat: 'Polifonia', ttl: 'Polifonia sacra', desc: 'Palestrina, Vitória, Lassus.' },
            ].map(card => (
              <div key={card.ttl}>
                <div className="ph aspect-[4/5] rounded mb-4" data-label={card.ttl.includes('Salmodia') ? 'CORO' : 'MANUSCRITO'} />
                <span className="text-[10.5px] tracking-[0.16em] uppercase text-[var(--accent)] font-semibold mb-[6px] block">{card.cat}</span>
                <h3 className="text-[22px] leading-[1.15] tracking-[-0.01em]" style={{ fontFamily: 'var(--serif)' }}>{card.ttl}</h3>
                <p className="text-[var(--ink-2)] text-sm mt-2 line-clamp-2">{card.desc}</p>
              </div>
            ))}

            <div className="col-span-2 bg-[var(--bg-2)] p-9 rounded border border-[var(--line)] flex flex-col justify-center">
              <blockquote className="font-[var(--serif)] italic text-[22px] leading-[1.35] text-[var(--ink)] mb-4 tracking-[-0.005em]" style={{ fontFamily: 'var(--serif)' }}>
                &ldquo;Para nós, o canto e a música sacra têm uma importância fundamental por sua incidência cultual, espiritual, formativa e comunitária.&rdquo;
              </blockquote>
              <cite className="not-italic text-xs tracking-[0.08em] uppercase text-[var(--ink-3)]">— Pe. Carlos Miguel Buela</cite>
            </div>
          </div>
        </div>
      </section>

      <hr className="dot-rule" />

      {/* === ORAÇÕES === */}
      <section id="oracoes">
        <div className="wrap grid grid-cols-[1.1fr_1fr] gap-20 items-start max-[980px]:grid-cols-1 max-[980px]:gap-[50px]">
          <div className="sticky top-[100px] pr-5 max-[980px]:static">
            <span className="eyebrow">02 — Oratio</span>
            <h2 className="text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em] mt-[14px]" style={{ fontFamily: 'var(--serif)' }}>Orações</h2>
            <blockquote className="font-[var(--serif)] italic text-[28px] leading-[1.3] text-[var(--ink)] my-7 tracking-[-0.01em] pl-7 relative" style={{ fontFamily: 'var(--serif)' }}>
              <span className="absolute left-0 top-[6px] bottom-[6px] w-[6px] bg-[radial-gradient(circle,var(--accent)_1.4px,transparent_1.8px)] bg-[size:6px_12px] bg-repeat-y" />
              &ldquo;Quem reza se salva, quem não reza é condenado. A salvação é certa e facílima. Se não nos salvarmos, a culpa será toda nossa.&rdquo;
            </blockquote>
            <p className="text-[13.5px] tracking-[0.04em] text-[var(--ink-3)]">— Santo Afonso Maria de Ligório</p>
          </div>

          <div className="grid grid-cols-2 border border-[var(--line)] rounded bg-[var(--bg)] max-[980px]:grid-cols-1">
            {[
              { n: 'I', ttl: 'Novenas', sub: '32 disponíveis' },
              { n: 'II', ttl: 'Diárias', sub: 'Manhã, noite e refeições' },
              { n: 'III', ttl: 'Ação de Graças', sub: 'Pós-comunhão' },
              { n: 'IV', ttl: 'Santos', sub: 'Por intercessão' },
              { n: 'V', ttl: 'Ladainhas', sub: 'Tradição litúrgica' },
              { n: 'VI', ttl: 'Preparação para a Missa', sub: 'Antes do altar' },
              { n: 'VII', ttl: 'Terços', sub: 'Mistérios marianos' },
              { n: 'VIII', ttl: 'Via Sacra', sub: 'Estações da Paixão' },
            ].map((it, i) => (
              <button key={it.ttl}
                className={`p-[22px] flex items-center gap-[14px] text-left text-[var(--ink)] transition hover:bg-[var(--bg-2)] border-b border-r border-[var(--line)]
                ${i % 2 === 0 ? '' : 'border-r-0'}
                ${i >= 6 ? 'border-b-0' : ''} max-[980px]:border-r-0`}>
                <span className="font-[var(--serif)] italic text-[17px] text-[var(--accent)] w-[22px] flex-shrink-0">{it.n}</span>
                <span className="flex-1 min-w-0">
                  <b className="font-medium text-[15px] block">{it.ttl}</b>
                  <span className="text-[12.5px] text-[var(--ink-3)]">{it.sub}</span>
                </span>
                <span className="text-[var(--ink-3)] opacity-0 group-hover:opacity-100 transition flex-shrink-0"><ArrowRight /></span>
              </button>
            ))}
            <button className="col-span-2 bg-[var(--ink)] text-[var(--bg)] p-[22px] flex items-center gap-[14px] text-left hover:bg-[var(--accent)] transition max-[980px]:col-span-1">
              <span className="font-[var(--serif)] italic text-[17px] w-[22px] flex-shrink-0" style={{ color: 'oklch(0.985 0.005 60 / 0.7)' }}>∞</span>
              <span className="flex-1 min-w-0">
                <b className="font-medium text-[15px] block">Todas as orações</b>
                <span className="text-[12.5px]" style={{ color: 'oklch(0.985 0.005 60 / 0.7)' }}>Biblioteca completa em ordem alfabética</span>
              </span>
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      <hr className="dot-rule" />

      {/* === LITURGIA DIÁRIA === */}
      <section id="liturgia" className="bg-[var(--bg-2)]">
        <div className="wrap">
          <div className="flex items-end justify-between gap-10 mb-14">
            <div className="max-w-[640px]">
              <span className="eyebrow">03 — Liturgia Diária</span>
              <h2 className="text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em] mt-[14px]" style={{ fontFamily: 'var(--serif)' }}>A Palavra de hoje</h2>
              <p className="font-[var(--serif)] italic text-lg text-[var(--accent)] mt-[18px]">Terça-feira, 26 de maio de 2026 — Tempo Comum</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-[13.5px] font-medium border-b border-[var(--ink)] pb-[3px] hover:text-[var(--accent)] hover:border-[var(--accent)] transition">
              Calendário litúrgico <CalendarIcon />
            </a>
          </div>

          <div className="grid grid-cols-[1.2fr_1fr] gap-20 items-start max-[980px]:grid-cols-1 max-[980px]:gap-[50px]">
            <article className="bg-[var(--bg)] border border-[var(--line)] rounded overflow-hidden">
              <div className="ph aspect-[16/10] rounded-none border-0" data-label="MISSAL ABERTO" />
              <div className="p-7 pb-[30px]">
                <div className="text-[11px] tracking-[0.16em] uppercase text-[var(--ink-3)] mb-[10px]">São Filipe Néri · Memória</div>
                <h3 className="text-[28px] leading-[1.15] mb-2" style={{ fontFamily: 'var(--serif)' }}>&ldquo;Dai a César o que é de César, e a Deus o que é de Deus&rdquo;</h3>
                <div className="font-[var(--serif)] italic text-[15px] text-[var(--accent)] mb-[14px]">Mc 12, 13-17 · Evangelho do dia</div>
                <p className="font-[var(--serif)] text-[17px] leading-[1.55] text-[var(--ink-2)]">
                  Naquele tempo, alguns fariseus e herodianos foram enviados a Jesus para o apanharem numa palavra. Vieram a ele e disseram: &ldquo;Mestre, sabemos que és sincero e não te deixas influenciar por ninguém…&rdquo;
                </p>
                <div className="flex gap-[18px] mt-[22px] pt-5 border-t border-[var(--line)] text-[12.5px] text-[var(--ink-3)]">
                  <div><b className="text-[var(--ink)] font-medium">Cor litúrgica</b> · Branco</div>
                  <div><b className="text-[var(--ink)] font-medium">Tempo</b> · Comum, semana VIII</div>
                  <div><b className="text-[var(--ink)] font-medium">Ofício</b> · Vésperas 19h</div>
                </div>
              </div>
            </article>

            <div>
              <h4 className="font-[var(--sans)] text-[14px] font-semibold tracking-[0.12em] uppercase text-[var(--ink-3)] mb-2">Leituras do dia</h4>
              <div className="flex flex-col gap-[14px]">
                {[
                  { ix: 'I', lbl: '1ª Leitura', ref: 'Tobias 2, 9-14', ttl: 'Leitura do Livro de Tobias' },
                  { ix: 'II', lbl: 'Salmo', ref: 'Sl 111(112), 1-7', ttl: 'Feliz o homem que teme o Senhor' },
                  { ix: 'III', lbl: 'Evangelho', ref: 'Marcos 12, 13-17', ttl: 'Dai a César o que é de César' },
                ].map(r => (
                  <a key={r.ix} href="#" className="flex gap-4 items-start py-[18px] border-b border-[var(--line)] last:border-b-0">
                    <span className="font-[var(--serif)] italic text-[28px] text-[var(--accent)] leading-none w-8 flex-shrink-0">{r.ix}</span>
                    <div className="flex-1">
                      <div className="text-[10.5px] tracking-[0.16em] uppercase text-[var(--ink-3)] mb-1">{r.lbl}</div>
                      <div className="font-[var(--serif)] text-[19px] mb-1">{r.ref}</div>
                      <div className="text-[13.5px] text-[var(--ink-2)]">{r.ttl}</div>
                    </div>
                    <span className="text-[var(--ink-3)] self-center"><ArrowRight /></span>
                  </a>
                ))}
              </div>
              <div className="mt-7 p-6 bg-[var(--bg)] border border-[var(--line)] rounded">
                <div className="text-[10.5px] tracking-[0.16em] uppercase text-[var(--ink-3)] mb-2">Homilia diária</div>
                <div className="font-[var(--serif)] text-[19px] leading-[1.3] mb-[10px]">&ldquo;O cristão sabe distinguir as duas cidades — sem confundi-las, sem opor uma à outra.&rdquo;</div>
                <a href="#" className="inline-flex items-center gap-2 text-[13px] font-medium border-b border-[var(--ink)] pb-[3px] hover:text-[var(--accent)] hover:border-[var(--accent)] transition">
                  Ler homilia <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="dot-rule" />

      {/* === VÍDEO === */}
      <section id="video">
        <div className="wrap grid grid-cols-2 gap-[60px] items-center max-[980px]:grid-cols-1 max-[980px]:gap-[50px]">
          <div className="relative aspect-[16/10] bg-[#2D2A26] rounded overflow-hidden cursor-pointer">
            <div className="ph dark w-full h-full" data-label="THUMBNAIL • homilia da semana" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] bg-[var(--bg)] rounded-full grid place-items-center shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)] transition-transform hover:scale-105">
              <div className="w-0 h-0 border-l-[18px] border-t-[11px] border-b-[11px] border-l-[var(--accent)] border-t-transparent border-b-transparent ml-[6px]" />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-[var(--accent)] font-semibold mb-[18px]">
              <span className="w-[7px] h-[7px] bg-[var(--accent)] rounded-full" />
              YouTube · Portal da Liturgia
            </div>
            <h2 className="text-[clamp(32px,3.4vw,46px)] leading-[1.08] tracking-[-0.02em] mb-[18px]" style={{ fontFamily: 'var(--serif)' }}>
              Homilias, formação e meditações em vídeo
            </h2>
            <p className="text-[var(--ink-2)] mb-[26px] max-w-[480px]">
              Acompanhe nosso canal com homilias diárias, formação litúrgica, retiros e meditações guiadas em áudio e vídeo.
            </p>
            <a href="#" className="btn-primary">Inscrever-se <ArrowRight /></a>
            <div className="flex gap-7 pt-[22px] mt-6 border-t border-[var(--line)]">
              <div><div className="font-[var(--serif)] text-[26px] leading-none text-[var(--ink)]">128k</div><div className="text-[11px] tracking-[0.12em] uppercase text-[var(--ink-3)] mt-1">Inscritos</div></div>
              <div><div className="font-[var(--serif)] text-[26px] leading-none text-[var(--ink)]">740+</div><div className="text-[11px] tracking-[0.12em] uppercase text-[var(--ink-3)] mt-1">Vídeos</div></div>
              <div><div className="font-[var(--serif)] text-[26px] leading-none text-[var(--ink)]">12</div><div className="text-[11px] tracking-[0.12em] uppercase text-[var(--ink-3)] mt-1">Anos no ar</div></div>
            </div>
          </div>
        </div>
      </section>

      <hr className="dot-rule" />

      {/* === SUBSÍDIOS === */}
      <section id="subsidios" className="bg-[var(--bg-2)]">
        <div className="wrap">
          <div className="text-center max-w-[760px] mx-auto mb-16">
            <span className="eyebrow">04 — Subsidia Liturgica</span>
            <blockquote className="font-[var(--serif)] italic text-[clamp(24px,2.4vw,30px)] leading-[1.4] text-[var(--ink)] tracking-[-0.005em] my-6" style={{ fontFamily: 'var(--serif)' }}>
              &ldquo;A Santa Missa é a grande escola do amor cristão. Ela abre as portas todos os dias, e irá abri-las até o fim do mundo.&rdquo;
            </blockquote>
            <p className="text-[13px] tracking-[0.08em] uppercase text-[var(--ink-3)]">— Pe. Carlos M. Buela · Nuestra Missa</p>
          </div>

          <div className="grid grid-cols-3 gap-7 max-[980px]:grid-cols-1">
            {[
              { cat: 'Estudo', ttl: 'A Santa Missa explicada', desc: 'Guia passo a passo do Ordinário da Missa, com comentários patrísticos.', label: 'MISSAL ABERTO' },
              { cat: 'Formação', ttl: 'Cristo, sumo sacerdote', desc: 'Meditações sobre o sacerdócio comum e ministerial.', label: 'CRUCIFIXO' },
              { cat: 'Rituais', ttl: 'O Rito do Batismo', desc: 'Acompanhamento e preparação para padrinhos, padres e famílias.', label: 'BATISMO' },
            ].map(it => (
              <article key={it.ttl} className="bg-[var(--bg)] border border-[var(--line)] rounded overflow-hidden cursor-pointer transition-transform hover:-translate-y-[3px] hover:shadow-[0_24px_50px_-28px_rgba(45,42,38,0.2)]">
                <div className="ph aspect-[4/3] border-0 border-b border-[var(--line)]" data-label={it.label} />
                <div className="p-[26px] pb-7">
                  <div className="text-[10.5px] tracking-[0.16em] uppercase text-[var(--accent)] font-semibold mb-[10px]">{it.cat}</div>
                  <h3 className="text-[22px] leading-[1.2] mb-2" style={{ fontFamily: 'var(--serif)' }}>{it.ttl}</h3>
                  <p className="text-[14px] text-[var(--ink-2)] leading-[1.55]">{it.desc}</p>
                  <div className="mt-4 text-[13px] text-[var(--ink)] inline-flex items-center gap-[6px]">Ler mais <ArrowRight /></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className="dot-rule" />

      {/* === ARTIGOS === */}
      <section id="artigos">
        <div className="wrap">
          <div className="flex items-end justify-between gap-10 mb-14">
            <div className="max-w-[640px]">
              <span className="eyebrow">05 — Articuli</span>
              <h2 className="text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em] mt-[14px]" style={{ fontFamily: 'var(--serif)' }}>Artigos formativos</h2>
              <p className="text-[var(--ink-2)] mt-[18px] max-w-[560px]">
                Doutrina, espiritualidade e formação litúrgica — textos curados para nutrir a vida cristã.
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-[13.5px] font-medium border-b border-[var(--ink)] pb-[3px] hover:text-[var(--accent)] hover:border-[var(--accent)] transition">
              Todos os artigos <ArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-12 gap-7 max-[980px]:grid-cols-1">
            {[
              { cat: 'Espiritualidade', ttl: 'A luta do demônio contra a matéria da Eucaristia', desc: 'Tema tratado pelo Beato Clemente Marchisio no Congresso Eucarístico de Turim, 1894 — combate aos sacrilégios e uso indevido da matéria.', date: '14 mai 2026', read: '8 min', label: 'EUCARISTIA', featured: true },
              { cat: 'Música', ttl: 'O canto do Glória: legislação e estrutura', desc: 'Parte integrante dos ritos iniciais da Missa.', date: '11 mai 2026', read: '5 min', label: 'CANTO', side: true },
              { cat: 'Doutrina', ttl: 'Dias de preceito, quais são?', desc: 'Domingos e dias santos obrigatórios.', date: '08 mai 2026', read: '4 min', label: 'CALENDÁRIO', side: true },
              { cat: 'Vocação', ttl: 'O sacerdote — o amor ao seu dever', desc: 'Texto sobre a missão do sacerdote extraído de "A vocação sacerdotal".', date: '02 mai 2026', read: '12 min', label: 'SACERDOTE' },
              { cat: 'Sacramentos', ttl: 'A música na celebração do Matrimônio', desc: 'Cânticos adequados ao rito e à expressão da fé.', date: '28 abr 2026', read: '6 min', label: 'NÚPCIAS' },
              { cat: 'Espiritualidade', ttl: 'Lectio Divina — o que é e como fazer', desc: 'Forma de contemplação meditativa dos padres do deserto.', date: '24 abr 2026', read: '7 min', label: 'ESCRITURA' },
              { cat: 'Arquitetura', ttl: 'O Altar', desc: 'Lugar mais importante do templo, onde se celebra a Santa Missa.', date: '20 abr 2026', read: '5 min', label: 'ALTAR' },
            ].map((a, i) => (
              <article key={i} className={`group cursor-pointer flex flex-col ${
                a.featured ? 'col-span-6 max-[980px]:col-span-1' :
                a.side ? 'col-span-3 max-[980px]:col-span-1' :
                'col-span-4 max-[980px]:col-span-1'
              }`}>
                <div className={`ph rounded mb-[18px] transition-transform group-hover:scale-[1.005] ${
                  a.featured ? 'aspect-[16/10]' : a.side ? 'aspect-[4/5]' : 'aspect-[5/4]'
                }`} data-label={a.label} />
                <span className="text-[10.5px] tracking-[0.16em] uppercase text-[var(--accent)] font-semibold mb-2">{a.cat}</span>
                <h3 className={`leading-[1.18] mb-2 group-hover:text-[var(--accent)] transition-colors ${a.featured ? 'text-[32px] leading-[1.1]' : 'text-[22px]'}`} style={{ fontFamily: 'var(--serif)' }}>{a.ttl}</h3>
                <p className={`text-[var(--ink-2)] leading-[1.55] ${a.featured ? 'text-[15.5px]' : 'text-[14px]'}`}>{a.desc}</p>
                <div className="flex items-center gap-2 mt-[14px] text-xs text-[var(--ink-3)]">
                  <span>{a.date}</span>
                  <span className="w-[3px] h-[3px] bg-[var(--ink-3)] rounded-full" />
                  <span>{a.read} de leitura</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-[#25211E] text-[#C9C4BD] pt-20 pb-9">
        <div className="wrap">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-[50px] pb-[60px] border-b border-[#3D3833] max-[980px]:grid-cols-2">
            <div>
              <a href="#top" className="flex items-center gap-3">
                <div className="w-8 h-8 grid place-items-center bg-[var(--bg)] text-[var(--accent)] rounded-full" aria-hidden="true">
                  <svg viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                    <path d="M16 6v20M9 13h14" />
                  </svg>
                </div>
                <div className="flex flex-col leading-[1.1]">
                  <b className="font-[var(--serif)] font-medium text-base text-[var(--bg)]">Portal da Liturgia</b>
                  <small className="text-[9.5px] tracking-[0.16em] uppercase text-[#A6A099] mt-[2px]">Laudate Dominum</small>
                </div>
              </a>
              <p className="mt-[22px] text-sm max-w-[320px] leading-[1.65] text-[#B0ABA4]">
                Um portal dedicado à beleza, dignidade e formação na Sagrada Liturgia da Igreja Católica.
              </p>
            </div>

            <div>
              <h5 className="font-[var(--sans)] text-[11px] tracking-[0.16em] uppercase text-[#827D76] font-semibold mb-5">Navegação</h5>
              <ul className="flex flex-col gap-[10px]">
                {['Liturgia diária', 'Música litúrgica', 'Orações', 'Artigos', 'Subsídios'].map(l => (
                  <li key={l}><a href="#" className="text-sm text-[#CCC7BF] hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-[var(--sans)] text-[11px] tracking-[0.16em] uppercase text-[#827D76] font-semibold mb-5">Links úteis</h5>
              <ul className="flex flex-col gap-[10px]">
                {['Instituto Verbo Encarnado', 'Editora Verbo Encarnado', 'Exercícios Espirituais', 'Voz Católica', 'O Teólogo Responde'].map(l => (
                  <li key={l}><a href="#" className="text-sm text-[#CCC7BF] hover:text-white transition">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-[var(--sans)] text-[11px] tracking-[0.16em] uppercase text-[#827D76] font-semibold mb-5">Contato</h5>
              <ul className="flex flex-col gap-[10px]">
                <li><a href="mailto:liturgia@vebmail.com" className="text-sm text-[#CCC7BF] hover:text-white transition">liturgia@vebmail.com</a></li>
                <li><a href="#" className="text-sm text-[#CCC7BF] hover:text-white transition">Newsletter semanal</a></li>
                <li><a href="#" className="text-sm text-[#CCC7BF] hover:text-white transition">Sugestões e correções</a></li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between mt-[26px] text-xs text-[#827D76]">
            <span>© 2026 Portal da Liturgia · Todos os direitos reservados</span>
            <div className="flex gap-[10px]">
              {['Facebook', 'Instagram', 'YouTube'].map(s => (
                <a key={s} href="#" className="w-9 h-9 grid place-items-center border border-[#3D3833] rounded-full text-[#C9C4BD] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition" aria-label={s}>
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─── ICONS (inline SVG) ────────────────────────────
function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'Facebook') return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.6c0-.9.3-1.5 1.6-1.5h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4z" /></svg>
  );
  if (name === 'Instagram') return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>
  );
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" /></svg>
  );
}
