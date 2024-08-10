//crea una función handlePlay dentro del componente Game que será llamada por el componente Board para actualizar el juego. Pasa xIsNext, currentSquares y handlePlay como props al componente Board:

import { useState } from "react";

export default function HandlePlay(nextSquares) {
    const [xIsNext, setXIsNext] = useState(true);       //Estado agregado para rastrear qué jugador es el siguiente 
    const [history, setHistory] = useState([Array(9).fill(null)]); //Estado agregado para rastrear el historial de movimientos: Array es una matriz con un solo elemento, que a su vez es una matriz de 9 nulls.
    const currentSquares = history[history.length - 1];  //para renderizar los cuadrados en el tablero en su estado actual, debes utilizar la última entrada en history, que representa el estado del tablero después del último movimiento realizado. No necesitas usar useState para almacenar currentSquares porque history ya contiene todos los estados anteriores del tablero y puedes calcular el estado actual (o cualquier otro estado anterior) simplemente accediendo a la entrada correspondiente en history.
    
    setHistory([...history, nextSquares]); //  Actualiza el history agregando la matriz squares actualizada como una nueva entrada en el historial. crea una nueva matriz que contiene todos los elementos en history, seguido de nextSquares. ... history = «enumerar todos los elementos en history».)
    setXIsNext(!xIsNext);

  }
