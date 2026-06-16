import { Icon } from "./icons";

export default function Video() {
  return (
    <section id="video" data-screen-label="Vídeo">
      <div className="wrap vid-wrap">
        <div className="vid-player">
          <div className="ph dark" data-label="THUMBNAIL • homilia da semana" role="img" aria-label="Thumbnail do vídeo da homilia da semana" />
          <div className="play" aria-hidden="true" />
        </div>
        <div className="vid-meta">
          <div className="yt">YouTube · Portal da Liturgia</div>
          <h2>Homilias, formação e meditações em vídeo</h2>
          <p>
            Acompanhe nosso canal com homilias diárias, formação litúrgica, retiros e meditações guiadas em
            áudio e vídeo.
          </p>
          <a className="btn btn-primary" href="#">
            Inscrever-se <Icon.ArrowRight />
          </a>
          <div className="vid-stats" style={{ fontVariantNumeric: "tabular-nums" } as React.CSSProperties}>
            <div className="stat">
              <div className="n">128k</div>
              <div className="l">Inscritos</div>
            </div>
            <div className="stat">
              <div className="n">740+</div>
              <div className="l">Vídeos</div>
            </div>
            <div className="stat">
              <div className="n">12</div>
              <div className="l">Anos no ar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
