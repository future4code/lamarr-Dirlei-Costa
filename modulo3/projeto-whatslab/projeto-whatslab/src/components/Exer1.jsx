import React from 'react';
import { useState } from 'react';

const Exer1 = () => {
   const [inputName, setInputName] = useState('');
   const [inputMensagem, setInputMensagem] = useState('');

   const [name, setName] = useState('');
   const [mensagem, setMensagem] = useState('');


   
   const handleInputName=(ev) =>{
      setInputName(ev.target.value);
   }
   const handleInputMensagem=(ev) =>{
      setInputMensagem(ev.target.value);
   }


   const logarDados=(ev)=>{
      ev.preventDefault();
      setName(inputName);
      setMensagem(inputMensagem);
    
    

   }

   return (
      <form>
         <p>{name} { mensagem}</p> 
      
         <input value={inputName} onChange={handleInputName} placeholder='Usuário:' />
         <input className='input-msg' value={inputMensagem} onChange={handleInputMensagem} placeholder='Mensagem:' />
         <button onClick={logarDados}>Enviar</button>
      </form>
   )

}

export default Exer1;