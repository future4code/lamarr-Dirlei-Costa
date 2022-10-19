import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from '../constants/constants';
import { UseForm } from '../hooks/useForm';

const LoginPage = () =>{
  const navigate=useNavigate();
  const [form, onChange, clear]=UseForm({email:"", password:""})

 const handleLogin=(e)=>{
   e.preventDefault()

   axios.post(`${BASE_URL}/dirlei/login`,form)
    .then(response=>{
      localStorage.setItem("token", response.data.token)
      navigate("/admin/trips/list")
   }).catch((error)=>console.log(error.message))
   clear();
 } 

 const goToBack=()=>{
   navigate("/")
}

 return(
   <>
    <form onSubmit= {handleLogin}>
       
    <label htmlFor="email">Email</label>
    <input 
         name="email"
         id="email" 
         placeholder="E-mail"
         value={form.email}
         onChange={onChange} 
         type="email" 
         required
                
      />
      <label htmlFor="senha">Senha</label>
      <input
         name="password"
         id="senha" 
         placeholder="Senha"
         value={form.password}
         onChange={onChange} 
         type="password" 
         pattern="^.{6,}$" 
         title="mínimo 6 caracteres" 
         required
      />
       
     <button type='submit'>Enter</button> 

   </form>

  <button onClick={goToBack}>Voltar</button>  
                


   </>
 )
        
}

export default LoginPage;