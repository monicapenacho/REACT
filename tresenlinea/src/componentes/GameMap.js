//ste componente se encargue de mostrar el tablero de juego (Board) y la información del juego, como el historial de movimientos.
// 1.- div para incluir componente React que se encarga de renderizar el tablero de juego.
// 2.- Este div está diseñado para mostrar información relacionada con el juego, como el estado actual (quién es el siguiente en jugar), el historial de movimientos, o mensajes como "Ganador: X".
// Dentro de game-info, hay una lista ordenada (<ol>) que, en este caso, está vacía y tiene un comentario {/*TODO*/}. Esto sugiere que aún falta implementar la lógica para mostrar el historial de movimientos o cualquier otra información adicional que pueda ir en esta lista.


import { useState } from "react";


import BoardHistorial from "./BoardHistorial";
import jumpTo from "./JumpTo";
import JumpTo from "./JumpTo";


export default function Game() {
    
    
    const [xIsNext, setXIsNext] = useState(true);       //Estado agregado para rastrear qué jugador es el siguiente 
    const [history, setHistory] = useState([Array(9).fill(null)]); //Estado agregado para rastrear el historial de movimientos: Array es una matriz con un solo elemento, que a su vez es una matriz de 9 nulls.
    const currentSquares = history[history.length - 1];  //para renderizar los cuadrados en el tablero en su estado actual, debes utilizar la última entrada en history, que representa el estado del tablero después del último movimiento realizado. No necesitas usar useState para almacenar currentSquares porque history ya contiene todos los estados anteriores del tablero y puedes calcular el estado actual (o cualquier otro estado anterior) simplemente accediendo a la entrada correspondiente en history.

    function handlePlay(nextSquares) {
      setHistory([...history, nextSquares]); //  Actualiza el history agregando la matriz squares actualizada como una nueva entrada en el historial. crea una nueva matriz que contiene todos los elementos en history, seguido de nextSquares. ... history = «enumerar todos los elementos en history».)
      setXIsNext(!xIsNext);
    }

    <JumpTo/>

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = 'Ir al movimiento #' + move;
        } else {
          description = 'Ir al inicio del juego';
        }
        return (
          <li>
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