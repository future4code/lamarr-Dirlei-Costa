import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/Cardpequeno';
import FotoTrabalho from './img/logo_trabalho.png'
import FotoPerfil1 from './img/fotoP3.jpg'
import FotoEmail from './img/logo_email.png'
import FotoIn from './img/logo Link.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil1}
          nome="Dirlei Silva Costa" 
          descricao="Olá, sou Dirlei Costa de 38 anos, casado e pai da Katherine de 5 anos. Sou uma pessoa de bem com a vida, de sorriso fácil onde sempre estou conquistando novas amizaddes, um pessoa de muitos amigos e que valoriza muito a família e sempre corredo atrás dos meus objetivo. Atividades física é algo que devemos levar pro resto da vida e sempre com um fone pra curtir aquele son."
        />

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
        imagem={FotoIn}
        email="https://br.linkedin.com/"
        />

        <CardPequeno
        imagem={FotoEmail}
        email="dirlei@dirlei.com"

        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={FotoTrabalho} 
          nome="Labenu" 
          descricao="Atualmente trabalho em uma empresa no seguimento petrolifero, na costrução de ferramentas para extrair petróleo e gás do fundo dos oceanos" 
        />
        
        <CardGrande 
          imagem={FotoPerfil1 } 
          nome="Minhas NÃO qualidades!" 
          descricao="Apontando defeitos." 
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

      </div>
    </div>
  );
}

export default App;
