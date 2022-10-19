import React, { useEffect, useState } from "react";
import axios from "axios";


const useListTrip =(BASE_URL) =>{

   const [lisTrip, setListTrips]=useState();

   useEffect(()=>{
      const token = localStorage.getItem("token")
      axios.get(`${BASE_URL}/darvas/trips`,
      {
         headers:{
            auth:token
         }
      }
      ).then((response)=>{
         setListTrips(response.data)
      }).catch((error)=>{
         console.log(error);
      })
   },)


   return lisTrip
}

export default useListTrip;