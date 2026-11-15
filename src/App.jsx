
import './App.css'

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
                href="/projetos/verificador-de-senhas/index.html"
                target="_blank"
                rel="noreferrer"
              >
                Ver projeto
              </a>
            </article>

            <article className="card">
              <span className="tag">C# / .NET</span>
              <h3>Sistema de Biblioteca</h3>
              <p>
                Sistema desenvolvido para simular o gerenciamento
                e a organização de livros.
              </p>
              <span className="link-futuro">
                Projeto em modo console — sem interface gráfica.
              </span>
            </article>

            <article className="card">
              <span className="tag">C# / .NET</span>
              <h3>Sistema de Tarefas</h3>
              <p>
                Aplicação voltada à organização e ao
                gerenciamento de tarefas.
              </p>
              <span className="link-futuro">
                Projeto em modo console — sem interface gráfica.
              </span>
            </article>

            <article className="card">
              <span className="tag">C# / .NET</span>
              <h3>Sistema Bancário</h3>
              <p>
                Sistema que simula operações bancárias,
                utilizando conceitos de lógica de programação.
              </p>
              <span className="link-futuro">
                Projeto em modo console — sem interface gráfica.
              </span>
            </article>

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

          <p className="descricao">
            Vídeos e demonstrações dos meus trabalhos.
          </p>

          <div className="cards">
            <article className="card">
              <span className="tag">Demonstração</span>

              <h3>Apresentação do Portfólio</h3>

              <p>
                Vídeo demonstrativo apresentando o funcionamento
                do site, suas seções e os projetos desenvolvidos.
              </p>

              <span className="link-futuro">
                Vídeo será disponibilizado em breve.
              </span>
            </article>
          </div>
        </section>

        
        <section id="apresentacoes">
          <h2>Apresentações</h2>

          <p className="descricao">
            Materiais e apresentações desenvolvidos durante
            minha jornada acadêmica.
          </p>

          <div className="cards">
            <article className="card">
              <span className="tag">Materiais acadêmicos</span>

              <h3>Apresentações e trabalhos</h3>

              <p>
                Espaço destinado à divulgação de apresentações,
                documentos e materiais produzidos durante
                minha formação acadêmica.
              </p>

              <span className="link-futuro">
                Materiais serão adicionados em breve.
              </span>
            </article>
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
