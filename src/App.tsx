import editar from './assets/iconsMeta/lapis.png';
import excluir from './assets/iconsMeta/lixeira-de-reciclagem.png';
import info from './assets/iconsMeta/info.png';
import imgMais from './assets/mais.png';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="content">
      <Header />
      <div className="divConteudo">
        <div className="header">
          <div className="textoHeader">
            <h1>METAS</h1>
          </div>
          <div className="adicionarHeader">
            <div className="circleMetaMais">
              <img className="imgMais" src={imgMais} alt="Ícone de adicionar meta" />
            </div>
          </div>
        </div>
        <div className="linha">
          <hr />
        </div>
        <div className="listaMeta">
          <div className="caixaMeta">
            <div className="caixaInfoMeta">
              <div className="tituloMeta">
                <h1>VIAGEM PARA BAHAMAS</h1>
              </div>
              <div className="valor">
                <div className="circleValor">
                  <p className="sifrao">R$</p>
                  <h3 className="resultado">
                    <span id="valorMetaExibido">00,00</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="linhaMeta">
              <hr className="hrMeta" />
            </div>
            <div className="caixaAcoes">
              <div className="circleMetaAcoes">
                <img className="imgAcoes" src={editar} alt="Ícone de editar" />
              </div>
              <div className="circleMetaAcoes">
                <img className="imgAcoes" src={excluir} alt="Ícone de excluir" />
              </div>
              <div className="circleMetaAcoes">
                <img className="imgAcoes" src={info} alt="Ícone de informações" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
