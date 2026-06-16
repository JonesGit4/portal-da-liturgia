const items = [
  "Liturgia de hoje · Terça-feira, 26 maio",
  "Memória de São Filipe Néri",
  "Cor litúrgica · Branco",
  "Tempo Comum · Semana VIII",
  "Próxima solenidade · Santíssima Trindade · 31.05",
  "Vésperas · 19h00",
  "Homilia diária no YouTube",
];

export default function NoticeMarquee() {
  const track = [...items, ...items, ...items];
  return (
    <div className="notice" role="region" aria-label="Avisos litúrgicos">
      <div className="notice-track">
        {track.map((s, i) => (
          <span key={i}>
            <span className="ndot" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
