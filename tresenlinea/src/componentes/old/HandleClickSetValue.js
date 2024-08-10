// Este componente se encargará de gestionar el estado y proporcionará el valor y la función de handleClick a través de props al componente OnClick.

import React, { useState } from 'react';
export default function HandleClickSetValue({children}) {
    
        const [value, setValue] = useState(null);
      
        function handleClick() {
          setValue('X');
        }
        // Pasamos `value` y `handleClick` a los hijos
         return React.cloneElement(children, { value, onClick: handleClick });
}

  