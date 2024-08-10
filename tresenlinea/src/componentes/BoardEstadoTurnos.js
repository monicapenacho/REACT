
//  <></> Son necesarios porque hay varios div. Los div son bloques
// El Board debe renderizar los hijos (children) que se le pasan. Modifica el componente Board para incluir {children} en el renderizado. 
// Actualmente, cada componente Square mantiene una parte del estado del juego. Para comprobar si hay un ganador en un juego de tres en línea, el Board necesitaría saber de alguna manera el estado de cada uno de los 9 componentes del Square.
// el mejor enfoque es almacenar el estado del juego en el componente Board principal en lugar de en cada Square. El componente Board puede decirle a cada Square qué mostrar al pasar una prop, como lo hizo cuando pasó un número a cada Cuadrado.

// Para recopilar datos de varios elementos secundarios o para que dos componentes secundarios se comuniquen entre sí, declara el estado compartido en tu componente principal. El componente padre puede devolver ese estado a los hijos a través de props. Esto mantiene los componentes secundarios sincronizados entre sí y con el componente principal.
import { useState } from "react";
import SquareEstado from "./SquareEstado";

export default function BoardEstadoTurnos({classname, classtext}) {

    //TURNOS Cada vez que un jugador se mueve, xIsNext (un valor booleano) se invertirá para determinar qué jugador es el siguiente y se guardará el estado del juego. 
    const [xIsNext, setXIsNext] = useState(true);

    // declare una variable de estado llamada Square que por defecto sea una matriz de 9 valores nulos correspondientes a los 9 cuadrados:
    // Array(9).fill(null) crea una matriz con nueve elementos y establece cada uno de ellos en null. La llamada useState() a su alrededor declara una variable de estado squares que inicialmente se establece en esa matriz. Cada entrada en la matriz corresponde al valor de un cuadrado. 
    const [squares, setSquares] = useState(Array(9).fill(null));

    //TURNOS Actualiza la función handleClick de Board para cambiar el valor de xIsNext:
    function handleClick(i) {
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
      }
    
    //componente Board necesita pasar la prop value a cada uno de los componentes Square que representa:
    return (

        <>  
        <div className={classname}>
            <SquareEstado value={squares[0]} className={classtext} onSquareClick={() => handleClick(0)}/>
            <SquareEstado value={squares[1]} className={classtext} onSquareClick={() => handleClick(1)}/>
            <SquareEstado value={squares[2]} className={classtext} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className={classname}>
            <SquareEstado value={squares[3]} className={classtext} onSquareClick={() => handleClick(3)}/>
            <SquareEstado value={squares[4]} className={classtext} onSquareClick={() => handleClick(4)}/>
            <SquareEstado value={squares[5]} className={classtext} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className={classname}>
            <SquareEstado value={squares[6]} className={classtext} onSquareClick={() => handleClick(6)}/>
            <SquareEstado value={squares[7]} className={classtext} onSquareClick={() => handleClick(7)}/>
            <SquareEstado value={squares[8]} className={classtext} onSquareClick={() => handleClick(8)}/>
        </div>
        </>
    )
  }