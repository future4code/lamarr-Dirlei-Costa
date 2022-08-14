import React from 'react';
import { useState } from 'react';
import axios from 'axios'





const CadastroUsuario = () =>{
   const [nome, setNome]=useState('')
   const [email, setEmail]=useState('')

   const handleNome=(ev)=>{
     const name = ev.target.value
      setNome(name)
      console.log(name);
   
   }
   const handleEmail=(ev)=>{
      const mail = ev.target.value
      setEmail(mail)
      console.log(mail);

     
   }

   const body={
      name: nome,
      email: email

   }
   const urlPost="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
   const myHeaders={
      headers:{
         Authorization:"dirlei-costa-lamarr"
      }
   }
   const cadastrarUsuario = ()=>{
      axios.post(urlPost, body, myHeaders)
      .then(()=>alert("Cadastro com sucesso!"))
      .catch(()=>alert('Erro, tente novamente'))
   }

 
   return(
      <>
         <h1>Cadastre-se!</h1>
         <label htmlFor="name"></label>
         <input type="text" id='name' value={nome} onChange={handleNome} placeholder='Nome:'/>

         <label htmlFor="name"></label>
         <input type="text" id='name' value={email}  onChange={handleEmail} placeholder='E-mail:'/>

         <button onClick={cadastrarUsuario}>Cadastrar</button>
         <br/>
         <button >Pesquisar usuário!</button>



      </>
   )
}

export default CadastroUsuario;