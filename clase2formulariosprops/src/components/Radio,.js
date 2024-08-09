

import React from 'react';

const CampoSexo = ({id, value, text}) => {
    

    return (
    <div>

    <input type="radio" name="sexo" id={id} value={value} /> 
    <label htmlFor={id}>{text}</label>


    </div>);
    
};
        
export default CampoSexo;
