// import logo from './logo.svg';
import foto from './img/fperfil.jpg';
import './App.css';

function App() {
  function mensagem(){
    alert('OLÁ, BOA NOITE!');
  }

  return (
    <div className="App">
      <h1>Olá, sou o Dirlei Costa, estudante de desenvolvimento web Full Stack</h1>
      <header className="App-header">
        <img src={foto} className="img_perfil" alt="foto perfil" />
        <h4>
          Seja bem vindos a minha página web, este conteúdo foi desenvolvido com React!
        </h4>
        <a
          className="App-link"
          href="https://github.com/Dirleisc"
          target="_blank"
          rel="noopener noreferrer"
        >
         Acesse o meu perfil no Github 
        </a>

        <button onClick={mensagem} > Click Aqui!</button>
      </header>
    </div>
  );
}

export default App;
