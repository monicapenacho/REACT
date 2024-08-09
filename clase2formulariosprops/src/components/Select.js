import React from 'react'
function Select({name, id, index, options}) {
    return (


        <p>
        <select name={name} id={id}>
        
            {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option} </option> ))}


        </select> 
        </p>

    );
};

export default Select;