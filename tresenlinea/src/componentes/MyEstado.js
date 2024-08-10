// Este componente combina HandleClickSetValue y OnClick. HandleClickSetValue es el contenedor que gestiona el estado y la lógica del clic, mientras que OnClick es el componente de presentación.

import SquareEstado from "./SquareEstado";
import BoardEstado from "./BoardEstado";


export default function MyEstado () {
    return (
    <div>
    <SquareEstado /> 
    <BoardEstado />
    </div>
    
    )
}



