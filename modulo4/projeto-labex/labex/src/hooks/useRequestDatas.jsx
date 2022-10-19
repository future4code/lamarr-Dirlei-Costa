import { useEffect, useState } from "react";
import axios from "axios";


const useRequestData =(url) =>{

   const [data, setData]=useState(undefined);
   const [isLoading, setIsLoading]=useState(false)
   const [error, setError]=useState("")

   useEffect(()=>{
      const token = localStorage.getItem("token")
      setIsLoading(true)
      axios.get(url,
      {
         headers:{
            auth:token
         }
      }
      ).then((response)=>{
         setIsLoading(false)
         setData(response.data)
         console.log(response);
      }).catch((error)=>{
         setIsLoading(false)
         setError(error);
      })
   },[])


   return [data, isLoading, error];
}

export default useRequestData;