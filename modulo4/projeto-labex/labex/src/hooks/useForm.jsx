import  { useState } from 'react';


export function UseForm(initialState){
  
   const[form, setForm] = useState(initialState)//"estatado inicial->> receber dos inputs(email/senha) "

   const onChange = (ev) => {
      const {name, value}=ev.target
   setForm({...form, [name]: value})
}

// 
 return[form, onChange]
} 
