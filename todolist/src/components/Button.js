export default function Button({ accion, texto }) {
    return (

<button onClick={accion}>{texto}</button>  

    );
}