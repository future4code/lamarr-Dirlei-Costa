import React from "react";
import Event from "./Event";

const Eventos = ({name}) => {     

      return(
            <>
               {name.map(name => <Event name={name}/>)}

            </>
      )
      
};

export default Eventos

