//edita el componente Square para recibir la prop value del componente Board. Esto requerirá eliminar el propio seguimiento con estado del value del componente Square y la propiedad onClick del botón:

export default function SquareEstado ({value, classtext, onSquareClick}) {
    return (
    <button className={classtext} onClick={onSquareClick}>
         {value}
    </button>
    );
}

