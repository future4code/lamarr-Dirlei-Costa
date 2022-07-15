import React, { useState } from 'react';
import './App.css';
import Eventos from './components/Eventos'
import AddEvent from './components/AddEvent';

const App = () => {

  const [name,setName] = useState([
    {
      id: 'nome',
      titulo: 'mensagem'

    },
   
  ])

  const handleTask = (taskTitle, nameTitulo) => {
    const newName = [...name,{
      titulo:taskTitle,
      id:nameTitulo,
    }]

    setName(newName)
    console.log(newName);


  }


  return (
    <>
    <div className='container'>
    <Eventos name={name}/>
    <AddEvent handleTask={handleTask}/>

    </div>

    </>

  );
}

export default App;
