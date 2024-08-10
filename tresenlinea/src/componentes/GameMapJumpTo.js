//ste componente se encargue de mostrar el tablero de juego (Board) y la información del juego, como el historial de movimientos.
// 1.- div para incluir componente React que se encarga de renderizar el tablero de juego.
// 2.- Este div está diseñado para mostrar información relacionada con el juego, como el estado actual (quién es el siguiente en jugar), el historial de movimientos, o mensajes como "Ganador: X".
// Dentro de game-info, hay una lista ordenada (<ol>) que, en este caso, está vacía y tiene un comentario {/*TODO*/}. Esto sugiere que aún falta implementar la lógica para mostrar el historial de movimientos o cualquier otra información adicional que pueda ir en esta lista.


import { useState } from "react";


import BoardHistorial from "./BoardHistorial";
import jumpTo from "./old/JumpTo";
import JumpTo from "./old/JumpTo";


export default function Game() {
    
    
    const [xIsNext, setXIsNext] = useState(true);       //Estado agregado para rastrear qué jugador es el siguiente 
    const [history, setHistory] = useState([Array(9).fill(null)]); //Estado agregado para rastrear el historial de movimientos: Array es una matriz con un solo elemento, que a su vez es una matriz de 9 nulls.
    // const currentSquares = history[history.length - 1];  //para renderizar los cuadrados en el tablero en su estado actual, debes utilizar la última entrada en history, que representa el estado del tablero después del último movimiento realizado. No necesitas usar useState para almacenar currentSquares porque history ya contiene todos los estados anteriores del tablero y puedes calcular el estado actual (o cualquier otro estado anterior) simplemente accediendo a la entrada correspondiente en history.
    const [currentMove, setCurrentMove] = useState(0); //necesitas que el componente Game lleve la cuenta del paso que el usuario está viendo en ese momento. Para ello, define una nueva variable de estado llamada currentMove, que reciba como valor por defecto a 0:
    const currentSquares = history[currentMove]; //modifica el componente Game para representar el movimiento seleccionado actualmente, en lugar de representar siempre el movimiento final


    //Ahora haz dos cambios en la función handlePlay del Game que se llama cuando haces clic en un cuadrado.

            // Si «retrocedes en el tiempo» y luego haces un nuevo movimiento desde ese punto, sólo querrás mantener el historial hasta ese punto. En lugar de añadir nextSquares después de todos los elementos (sintaxis extendida ...) en history, lo agregarás después de todos los elementos en history.slice(0, currentMove + 1) para que sólo estés manteniendo esa porción de la historia antigua.
            // Cada vez que se realiza un movimiento, es necesario actualizar currentMove para que apunte a la última entrada del historial.

    function handlePlay(nextSquares) {       /*  Declara una función llamada handlePlay que toma un parámetro nextSquares. Este parámetro representa el estado del tablero (squares) después de que un jugador ha hecho su movimiento en el cuadrado seleccionado.*/
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; /* Crea un nuevo historial nextHistory que contiene todos los estados anteriores del tablero hasta currentMove (incluido) y agrega el nuevo estado nextSquares al final. Esto reemplaza cualquier historia futura que podría haber existido, preservando solo el camino que el jugador ha tomado. */
      setHistory(nextHistory);  /*Actualiza el estado history del juego con nextHistory, la nueva matriz de historial que contiene el camino correcto del juego hasta el nuevo movimiento. */
      setCurrentMove(nextHistory.length - 1); /* Actualiza currentMove para apuntar al último movimiento en nextHistory, asegurando que el estado del juego esté sincronizado con el historial después del nuevo movimiento.*/
      setXIsNext(!xIsNext); /* Alterna el turno del jugador, asegurando que después de cada movimiento, el otro jugador tenga su turno.*/
    }

    function jumpTo(nextMove) {        /* actualiza la función jumpTo dentro de Game para actualizar ese currentMove. También establece xIsNext en true si el número al que estás cambiando currentMove es par.*/
      setCurrentMove(nextMove);
      setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = 'Ir al movimiento #' + move;
        } else {
          description = 'Ir al inicio del juego';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });

    return (
      
      <div className="game">
        <div className="game-board">
          <BoardHistorial xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} classname="board-row" classtext="square" /> 
        </div>
        <div className="game-info">
          <ol>{moves}</ol>  {/* Aquí mueves la lista generada */}
        </div>
      </div>
    );
  }