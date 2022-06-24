import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/Cardpequeno';
import FotoTrabalho from './img/logo_trabalho.png'
import FotoPerfil1 from './img/fotoP3.jpg'
import FotoEmail from './img/logo_email.png'
import FotoEnde from './img/ender.png'
import Foto from './img/negativo.png'
import FotoIn from './img/logo_Link.jpg'
import FotoGit from './img/github.png'

 function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil1}
          nome="Dirlei Silva Costa" 
          descricao="Olá, sou Dirlei de 38 anos, casado e pai da Katherine de 5 anos. Sou uma pessoa de bem com a vida, de sorriso fácil e sempre estou conquistando novas amizaddes, um pessoa de muitos amigos e que valoriza a família e os amigos, e sempre corredo atrás dos objetivo. Muito inquieto e um pouco ancioso, e não tenho meias palavras. Mas também sem muita paciência e teimoso..."
        />

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div>
       

        <CardPequeno
        imagem={FotoEmail}
        email="dirlei@desenvolvedorweb.com"

        />
         <CardPequeno
        imagem={FotoEnde}
        endereco="Avenida: São Paulo Nº 00"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
      

        <CardGrande 
          imagem={FotoTrabalho} 
          nome="Correndo atrás" 
          descricao="Atualmente trabalho em uma empresa no seguimento petrolifero, na costrução de ferramentas para extrair petróleo e gás do fundo dos oceanos. Mas já trabalhei em logísticas, mercado, indústria química e claro motorista de Apps" 
        />
        
        <CardGrande 
          imagem={Foto} 
          nome="Minhas NÃO qualidades!" 
          descricao="Segundo a minha esposa, eu não tenho muita paciência, teimoso e sempre estou com a razão." 
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={FotoIn}
          texto="Linkedin" 
        />        
        <ImagemButton 
          imagem={FotoGit}
          texto="Github" 
        />        

      </div>
    </div>
  );
}

export default App;
