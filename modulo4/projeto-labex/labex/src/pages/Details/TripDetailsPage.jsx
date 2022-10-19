import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/constants';
import useProtectedPage from '../hooks/useProtectedPage';
import useRequestDatas from '../hooks/useRequestDatas';


const TripDetailsPage = (url) => {
   useProtectedPage();
   const navigate=useNavigate();

   const [dataList, isLoadingList, erroList]=useRequestDatas(url)
      
      const list = dataList&&dataList.trip.map((list)=>{
         return<li>{list.name}</li>
      })
   useEffect(()=>{
      const token=localStorage.getItem("token");
      axios.get(`${BASE_URL}/dirlei/trip/7Uy6Qf4lyd6HbyNLDGm4`,
      {
         headers:{
            auth:token
         }
      }).then((response)=>{
         console.log(response.data)
      }).catch((error)=>{
         console.log("erro:", error.response);
      })
   },[""])

   
   const goToBack=()=>{
      navigate(-1)
   }
   
   
return(
   <>
      <h1>Detalhes da viagem</h1>
      <p>Para o administrador ver o detalhe de uma viagem específica.</p>
     
         {!isLoadingList&&dataList&&(dataList.trip.name)}
      <button onClick={goToBack}>Voltar</button>
      <h2>Usuários:</h2>
         {/* {isLoadingList&&"...Carregando! ..."}
         <ol>
         {!isLoadingList&&dataList&&list}
         </ol>
         {!isLoadingList&&!dataList&&erroList}
         <hr /> */}
   </>
   
  );
}

export default TripDetailsPage;