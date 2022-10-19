import React from 'react';
import {useNavigate} from 'react-router-dom';



const HomePage = () => {
    const navigate=useNavigate();

    const goToAdmPage=()=>{
      navigate('/login')
    }
    const goToListTrips=()=>{
    navigate('/trips/list')
    }

   return(
      <>
         <h1>LabeX</h1>

         <button className='btntrips' onClick={goToListTrips}><h2>Lista de Viagens</h2></button>
         <hr />
         <button onClick={goToAdmPage}>Área Administrativa</button>

        
      </>
   )
}

export default HomePage;