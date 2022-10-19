import React from 'react';
import {useNavigate} from 'react-router-dom';
import { BASE_URL } from '../constants/constants';
import   useRequestDatas from '../hooks/useRequestDatas';

const ListTripsPage = () => {

   const navigate=useNavigate()

   const [dataList, isLoadingList, erroList]=useRequestDatas(`${BASE_URL}/dirlei/trips`)
      
      
const list=dataList&&dataList.trips.map((list)=>{
         return<li>{list.name}</li>
      })
   
   const goToAppForm=()=>{
      navigate('/trips/application')
   }
   const goToBack=()=>{
      navigate(-1)
   }
   

   return(
      <>
         <h1>Lista de viagens</h1>

         {isLoadingList&&"...Carregando! ..."}
         <ul>
         {!isLoadingList&&dataList&&list}
         </ul>
         {!isLoadingList&&!dataList&&erroList}

         <button className='btntrips' onClick={goToAppForm}><h2>Reserve sua viagem aqui!</h2></button> 
         <hr />



               <button onClick={goToBack}>Voltar</button> 

        
      </>
   )
}

export default ListTripsPage