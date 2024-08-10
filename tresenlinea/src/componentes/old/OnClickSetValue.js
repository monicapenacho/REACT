
// Este componente será el botón que recibe value y onClick como props y los usa para renderizar el botón y manejar los clics.

import React from 'react'
export default function OnClickSetValue ({value, onClick, classtext}) {
    return (
    <button className={classtext} onClick={onClick}>
     {value}
    </button>
    );
}

