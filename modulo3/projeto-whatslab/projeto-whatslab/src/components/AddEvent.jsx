import React, {useState} from 'react';
import Btn from './Btn';
import './AddEvent.css';


const AddEvent = ({handleTask}) => {
   const [inputData, setIputData] = useState('');
   const [mensager, setMensager] = useState('');

   const hadleInputChange = (ev) => {
      console.log(ev.target.value);
      setIputData(ev.target.value);
   };
   
   const hadleMensagem = (ev) => {
      setMensager(ev.target.value);
   };
      


   const handleAddClick = () => {
         handleTask(inputData, mensager)
      
   };
   
   return (
      <div className='add_event'>


      
           <input onChange={hadleInputChange} value={inputData} className='add_input' type="text"
           placeholder='Nome:'/>

           <input onChange={hadleMensagem} value={mensager} className='add_input' type="text"
           placeholder='Digite a mensagem:'/>

           <div className="add_btn__button">
           <Btn onClick={handleAddClick}>Enviar</Btn>
           </div>

      </div>
   );
};

export default AddEvent;