 // Campo entrada 
 // no hace falta poner valor. 
// export default function Input({ tipo, cambio, texto}) {
//     return (
//         <input
//             type={tipo}
//             onChange={cambio}
//             placeholder={texto}
//         />
//     );
// }


// Añado clicks y una función if

export default function Input({tipo, cambio, texto, clicks}) {
    let input = 
    // tipo === "text"? () : (); 
    tipo === "text"? 
    (<input type={tipo} onChange={cambio} placeholder={texto} />)
    :
    (<input type={tipo} onChange={cambio} placeholder={texto} onClick={clicks} />);
        
    return (
        <>{input}</>
    );

}