import React from 'react';
import {useNavigate} from 'react-router-dom'
import { UseForm } from '../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import {paises} from '../constants/paises'

const ApplicationFormPage = () => {
   UseForm()

   const navigate=useNavigate()
   const [form,onChange, ]=UseForm({ name:"", age:"", applicationText:"", profession:"", country:""})

 const handleLogin=(e)=>{
   e.preventDefault()

   axios.post(`${BASE_URL}/dirlei/trips`,form)
    .then(response=>{
      localStorage.setItem(response.data)
   })
   .catch((error)=>console.log(error.message))
   // clear();
 } 
  
  const goToBack=()=>{
    navigate(-1)
  }


   
   return(
      <>

      <h1>Reserve sua viagem</h1>

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

            <label htmlFor="idade">Idade:</label>
            <input 
               name="age"
               id="idade" 
               placeholder="sua idade:"
               value={form.age}
               onChange={onChange} 
               type="text" 
               required   
               min={18} 
            />


         
            <br/>

            <label for="profissão">Profissão</label>
            <input 
            name="profission" 
            id="profissão" 
            placeholder='profissão:'
            value={form.profession}
            onChange={onChange} 
            type="text" 
            />

            
            <select
            
                    placeholder={"País"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um País</option>
                    {paises.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
            </select>
            <hr />
            <label htmlFor="descrição">Descrição:</label>
            <textarea 
               name='applicationText'
               id='descrição' 
               placeholder='escreva alguma observação:'
               value={form.applicationText}
               onChange={onChange} 
               rows="4" cols='50'>
            </textarea>
            <br/>
            <button type="submit">Reservar</button>
                              
         </form>

        
        <button onClick={goToBack}>Voltar</button>  
                   

      </>
   )
}

export default ApplicationFormPage;