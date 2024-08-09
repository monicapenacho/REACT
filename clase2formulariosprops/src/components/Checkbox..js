import React from 'react'

const Checkbox = ({check, text}) => {
    

    return (
    <div>
    <input type="checkbox" name={check} id={check} />
    <label for={check}>{text}</label>
    </div>);

    


};
        
export default Checkbox;

