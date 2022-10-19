import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProtectedPage from '../hooks/useProtectedPage';
import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { UseForm } from '../hooks/useForm';


const CreateTripPage = () =>{
   useProtectedPage()
   const navigate=useNavigate();
   const [form,onChange, clear]=UseForm({ name:"", planet:"", date:"", description:"" , durationInDays:""})


   const handleLogin=(e)=>{
      e.preventDefault()

      useEffect=()=>{
      axios.post(`${BASE_URL}/dirlei/trips`,form)
      .then(response =>{
         localStorage.setItem("token", response.data.token)
   }).catch((error)=>console.log(error.message))
   clear()
   
   }
}
   const goToBack=()=>{
      navigate(-1)
   }

   return(
      <>
         <h1>Criar novas viagens!</h1>
        
      

         <form onSubmit= {handleLogin}>
               
               
               <label htmlFor="name">Nome</label>
               <input
                  name="name"
                  id="name" 
                  placeholder="Nome:"
                  value={form.name}
                  onChange={onChange} 
                  type="text"              
                  required
               />
               <label htmlFor="destino">Destino</label>
               <input 
                  name="planet"
                  id="destino" 
                  placeholder="escolha seu destino:"
                  value={form.planet}
                  onChange={onChange} 
                  type="text" 
                  required
                        
               />
               <label htmlFor="description">Descrição</label>
               <input 
                  name="description"
                  id="description" 
                  placeholder="descrição:"
                  value={form.description}
                  onChange={onChange} 
                  type="text" 
                  required
                        
               />
               <label htmlFor="date">Data</label>
               <input 
                  name="date"
                  id="date" 
                  placeholder="Data de volta:"
                  value={form.date}
                  onChange={onChange} 
                  type="date" 
                  required
                     
                        
               />
               <label htmlFor="tempo">Tempo</label>
               <input 
                  name="durationInDays"
                  id="tempo" 
                  placeholder="tempo:"
                  value={form.durationInDays}
                  onChange={onChange} 
                  type="text" 
                  required
                     
                        
               />
              
               <button type='submit'>Salvar</button> 
                        
            </form>

         <button onClick={goToBack}>Voltar</button> 

      </>
   )
}


export default CreateTripPage