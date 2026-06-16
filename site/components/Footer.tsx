import { Icon, BrandMark } from "./icons";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="ft-grid">
          <div className="ft ft-brand">
            <a className="brand" href="#top">
              <BrandMark />
              <div className="brand-text">
                <b>Portal da Liturgia</b>
                <small>Laudate Dominum</small>
              </div>
            </a>
            <p>
              Um portal dedicado à beleza, dignidade e formação na Sagrada Liturgia da Igreja Católica.
            </p>
          </div>
          <div className="ft">
            <h5>Navegação</h5>
            <ul>
              <li><a href="#liturgia">Liturgia diária</a></li>
              <li><a href="#musica">Música litúrgica</a></li>
              <li><a href="#oracoes">Orações</a></li>
              <li><a href="#artigos">Artigos</a></li>
              <li><a href="#subsidios">Subsídios</a></li>
            </ul>
          </div>
          <div className="ft">
            <h5>Links úteis</h5>
            <ul>
              <li><a href="#">Instituto Verbo Encarnado</a></li>
              <li><a href="#">Editora Verbo Encarnado</a></li>
              <li><a href="#">Exercícios Espirituais</a></li>
              <li><a href="#">Voz Católica</a></li>
              <li><a href="#">O Teólogo Responde</a></li>
            </ul>
          </div>
          <div className="ft">
            <h5>Contato</h5>
            <ul>
              <li><a href="mailto:liturgia@vebmail.com">liturgia@vebmail.com</a></li>
              <li><a href="#">Newsletter semanal</a></li>
              <li><a href="#">Sugestões e correções</a></li>
            </ul>
          </div>
        </div>
        <div className="ft-bottom">
          <div>© 2026 Portal da Liturgia · Todos os direitos reservados</div>
          <div className="ft-social">
            <a href="#" aria-label="Facebook"><Icon.Facebook /></a>
            <a href="#" aria-label="Instagram"><Icon.Instagram /></a>
            <a href="#" aria-label="YouTube"><Icon.Youtube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
