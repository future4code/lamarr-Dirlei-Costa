import React from 'react';
import logo from './logo-img.png';
import './App.css';
import {Container } from './style';
import {Header} from './style';
import {Footer} from './style';
import {Area1} from './style';
import {Area2} from './style';
// import {Main} from './style';

function App() {
  function clickBtn(){
    alert("Mensagem enviada")

  }
  return (
    
    <Container>

      <div className='ImgLogo'>
      <img src={logo}/>
      </div>

    
    <Header>
    
        <Area1></Area1>

        
        <main className='main'>
          <label for="usuario">Remetente: </label>
          <input type="text" id="usuario"/>
          <label for="mensagem">Msg: </label>
          <input className='input_msg' type="text" id="usuario"/>
          <button onClick={clickBtn}>Enviar Mensagem</button>
        </main>
        

        <Area2></Area2>
    </Header>
    

       
        <Footer>
          <p>copyright &copy; 2022 Labenu All rights reserved, R. Pais Leme, 215, Conjunto 820 Pinheiros, CEP 05424-150</p>
        </Footer>
       
    </Container>
   
  );
  
}

export default App;
