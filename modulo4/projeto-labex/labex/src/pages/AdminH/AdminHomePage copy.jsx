import React from 'react';
import {useNavigate} from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';


 const AdminHomePage =() => {

   useProtectedPage()

   const navigate=useNavigate();

   const goToCreateTrip=()=>{
      navigate('/admin/trips/create')
   }
  
   const goTotripDetails=()=>{
      navigate('/admin/trips/:id')
   }

  
   const goToBack=()=>{
      navigate("/")
   }

return(
   <>

   <h1>AdminHomePage</h1>
   
      <button onClick={goToCreateTrip}>Criar Viagens</button>
      <button onClick={goTotripDetails}>Detalhes das Viagens</button>
      <button onClick={goToBack}>Voltar</button>

   </>
)
}

export default AdminHomePage;