import React from 'react';
import './Btn.css';

const Btn = ({children, onClick}) => {
   return(
      <button Onclick={onClick} className='add_button'>{children}
      </button>
   );
   
};



export default Btn;