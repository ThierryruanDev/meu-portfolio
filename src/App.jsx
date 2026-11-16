
import './App.css'

// Caminho base automático para localhost e GitHub Pages
const BASE = import.meta.env.BASE_URL

// Links dos repositórios
const GITHUB_BIBLIOTECA = 'https://github.com/ThierryruanDev'
const GITHUB_TAREFAS = 'https://github.com/ThierryruanDev'
const GITHUB_BANCARIO = 'https://github.com/ThierryruanDev'

// Links do Google Drive
const LINK_VIDEO =
  'https://drive.google.com/file/d/1YsX-PNQpyB9jIFK7L3Cj1IXjwQ66sbc2/view?usp=drivesdk'

const LINK_APRESENTACAO_IA = 'https://docs.google.com/presentation/d/1hWBpEMxuN0DopQDyEC0Ev4TSic_fJSpL/edit?usp=drivesdk&ouid=112539444205735712294&rtpof=true&sd=true'
const LINK_APRESENTACAO_CIBERSEGURANCA = 'https://docs.google.com/presentation/d/1gGfVbYfTn2yHCWVXES0ixLk9czyKJLfM/edit?usp=drivesdk&ouid=112539444205735712294&rtpof=true&sd=true'

const projetosConsole = [
  {
    titulo: 'Sistema de Biblioteca',
    texto: 'Sistema desenvolvido para simular o gerenciamento e a organização de livros.',
    link: GITHUB_BIBLIOTECA,
  },
  {
    titulo: 'Sistema de Tarefas',
    texto: 'Aplicação voltada à organização e ao gerenciamento de tarefas.',
    link: GITHUB_TAREFAS,
  },
  {
    titulo: 'Sistema Bancário',
    texto: 'Sistema que simula operações bancárias, utilizando conceitos de lógica de programação.',
    link: GITHUB_BANCARIO,
  },
]

const videos = [
  {
    tag: 'Inteligência Artificial',
    titulo: 'Apresentação do Gemini Notebook (antigo NotebookLM)',
    texto:
      'Trecho da apresentação “Evolução da Inteligência Artificial”, em que apresento a ferramenta de IA do Google.',
    link: LINK_VIDEO,
  },
]

const apresentacoes = [
  {
    tag: 'Inteligência Artificial',
    titulo: 'Evolução da Inteligência Artificial',
    texto:
      'Apresentação em grupo sobre a história da inteligência artificial, desde os primeiros estudos nos anos 1950.',
    link: LINK_APRESENTACAO_IA,
  },
  {
    tag: 'Cibersegurança',
    titulo: 'Segurança digital e golpes na internet',
    texto:
      'Apresentação em grupo sobre cibersegurança: malwares, phishing, engenharia social e boas práticas de proteção.',
    link: LINK_APRESENTACAO_CIBERSEGURANCA,
  },
]

function App() {
  return (
    <>
      <header>
        <h2>ThierryRuanDev<span>.</span></h2>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#skills">Skills</a>
          <a href="#videos">Vídeos</a>
          <a href="#apresentacoes">Apresentações</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section id="inicio">
          <p>OLÁ, MEU NOME É THIERRY RUAN</p>

          <h1>
            Desenvolvedor <span>Web.</span>
          </h1>

          <p>
            Estou construindo minha jornada na programação,
            aprendendo e desenvolvendo projetos.
          </p>

          <a href="#projetos">Conheça meus projetos</a>
        </section>

        <section id="sobre">
          <h2>Sobre mim</h2>

          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas e tenho interesse em desenvolvimento de software e tecnologias web.
          </p>

          <p>
            Atualmente, estou direcionando meus estudos para o desenvolvimento Back-end com C# e .NET, enquanto também aprendo tecnologias Front-end, como HTML, CSS, JavaScript e React.
          </p>

          <p>
            Gosto de aprender coisas novas, desenvolver projetos e transformar meus conhecimentos em aplicações práticas.
          </p>
        </section>

        <section id="projetos">
          <h2>Meus projetos</h2>

          <p className="descricao">
            Conheça alguns dos meus trabalhos e aplicações.
          </p>

          <div className="cards">
            <article className="card">
              <span className="tag">HTML, CSS e JavaScript</span>

              <h3>Verificador de Força de Senhas</h3>

              <p>
                Aplicação que analisa a força de senhas,
                verifica critérios de segurança e apresenta
                sugestões para melhorá-las.
              </p>

              <a
                href={`${BASE}projetos/verificador-de-senhas/index.html`}
                target="_blank"
                rel="noreferrer"
              >
                Ver projeto
              </a>
            </article>

            {projetosConsole.map((projeto) => (
              <article className="card" key={projeto.titulo}>
                <span className="tag">C# / .NET</span>
                <h3>{projeto.titulo}</h3>
                <p>{projeto.texto}</p>

                <p className="nota">
                  Projeto em modo console, sem interface gráfica.
                  O código está no GitHub.
                </p>

                <a href={projeto.link} target="_blank" rel="noreferrer">
                  Ver código no GitHub
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <h2>Tecnologias e conhecimentos</h2>

          <p className="descricao">
            Tecnologias e ferramentas que fazem parte
            da minha jornada de aprendizado.
          </p>

          <div className="cards">
            <article className="card">
              <span className="tag">Linguagens</span>
              <h3>Programação</h3>
              <p>C#, JavaScript, HTML e CSS.</p>
            </article>

            <article className="card">
              <span className="tag">Frameworks e bibliotecas</span>
              <h3>Desenvolvimento</h3>
              <p>.NET, React e ASP.NET Core (próximo aprendizado).</p>
            </article>

            <article className="card">
              <span className="tag">Banco de dados</span>
              <h3>SQL Server</h3>
              <p>
                Em aprendizado, com estudos sobre bancos de dados
                e consultas SQL.
              </p>
            </article>

            <article className="card">
              <span className="tag">Ferramentas</span>
              <h3>Desenvolvimento e versionamento</h3>
              <p>
                Git, GitHub, Visual Studio Code e Docker
                (em aprendizado).
              </p>
            </article>
          </div>
        </section>

        <section id="videos">
          <h2>Vídeos</h2>

          <div className="cards">
            {videos.map((video) => (
              <article className="card" key={video.titulo}>
                <span className="tag">{video.tag}</span>
                <h3>{video.titulo}</h3>
                <p>{video.texto}</p>

                {video.link && (
                  <div className="acoes">
                    <a
                      href={video.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Assistir ao vídeo
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="apresentacoes">
          <h2>Apresentações</h2>

          <div className="cards">
            {apresentacoes.map((item) => (
              <article className="card" key={item.titulo}>
                <span className="tag">{item.tag}</span>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>

                {item.link && (
                  <div className="acoes">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver apresentação
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contato">
        <h2>Vamos conversar?</h2>

        <p>
          Estou aberto a conhecer pessoas e compartilhar ideias
          sobre tecnologia e desenvolvimento.
        </p>

        <div className="contatos">
          <a href="mailto:thierryruan216@gmail.com">
            E-mail
          </a>

          <a
            href="https://github.com/ThierryruanDev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 - Desenvolvido por Thierry Ruan.</p>
        </div>
      </footer>
    </>
  )
}

export default App
