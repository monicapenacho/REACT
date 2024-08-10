
//  <></> Son necesarios porque hay varios div. Los div son bloques
// El Board debe renderizar los hijos (children) que se le pasan. Modifica el componente Board para incluir {children} en el renderizado. 
// Actualmente, cada componente Square mantiene una parte del estado del juego. Para comprobar si hay un ganador en un juego de tres en línea, el Board necesitaría saber de alguna manera el estado de cada uno de los 9 componentes del Square.
// el mejor enfoque es almacenar el estado del juego en el componente Board principal en lugar de en cada Square. El componente Board puede decirle a cada Square qué mostrar al pasar una prop, como lo hizo cuando pasó un número a cada Cuadrado.

// Para recopilar datos de varios elementos secundarios o para que dos componentes secundarios se comuniquen entre sí, declara el estado compartido en tu componente principal. El componente padre puede devolver ese estado a los hijos a través de props. Esto mantiene los componentes secundarios sincronizados entre sí y con el componente principal.
import { useState } from "react";
import SquareEstado from "./SquareEstado";
import CalculateWinner from "./CalculateWinner";

export default function BoardEstadoTurnosVacioWinner({classname, classtext}) {

    //TURNOS Cada vez que un jugador se mueve, xIsNext (un valor booleano) se invertirá para determinar qué jugador es el siguiente y se guardará el estado del juego. 
    const [xIsNext, setXIsNext] = useState(true);  //control TURNOS

    // declare una variable de estado llamada Square que por defecto sea una matriz de 9 valores nulos correspondientes a los 9 cuadrados:
    // Array(9).fill(null) crea una matriz con nueve elementos y establece cada uno de ellos en null. La llamada useState() a su alrededor declara una variable de estado squares que inicialmente se establece en esa matriz. Cada entrada en la matriz corresponde al valor de un cuadrado. 
    const [squares, setSquares] = useState(Array(9).fill(null));

     
    //TURNOS Actualiza la función handleClick de Board para cambiar el valor de xIsNext:
    function handleClick(i) {
        // VACIO Verifica si el cuadrado ya tiene una X o una O. Si el cuadrado ya está lleno, genera un return en la función handleClick, antes de que intente actualizar el estado del tablero.
        // WINNER Llamarás a calculateWinner(squares) en la función handleClick del componente Board para comprobar si un jugador ha ganado. Puedes realizar esta verificación al mismo tiempo que verificas si un usuario ha hecho clic en un cuadrado que ya tiene una X o una O.  Nos gustaría regresar rápido en el estado en ambos casos:
        console.log(`Click en el cuadrado ${i}, valor actual: ${squares[i]}`);
    
        if (squares[i] || CalculateWinner(squares)) {                  //control vacíos O GANADOR. No se puede modificar si está lleno O control declarar al ganador
        //VACIO
        console.log(`Cuadrado ${i} ya está lleno. Se ignora el clic.`);
            return;
        }
    
        const nextSquares = squares.slice(); // Clonar el array
            
        if (xIsNext) {              // Actualizar el valor del cuadrado
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares); // Actualizar el estado con los nuevos valores
        setXIsNext(!xIsNext); // Alternar el turno
    }

      // WINNER Para que los jugadores sepan cuándo termina el juego, puedes mostrar un texto como «Ganador: X» o «Ganador: O». Para hacerlo, agrega una sección status al componente Board. El estado mostrará el ganador si el juego termina y si el juego está en curso, se mostrará el turno del siguiente jugador:
            // calculateWinner(squares): Es una función que verifica si alguien ha ganado el juego, basado en el estado actual del tablero (squares).
            //constante winner 
                //Qué hace: Este código llama a una función llamada calculateWinner y le pasa el estado actual del tablero (representado por squares).
                // Resultado: La función calculateWinner revisa el tablero para determinar si hay un ganador. Si hay un ganador, winner contendrá el valor del jugador que ha ganado (por ejemplo, 'X' o 'O'). Si no hay un ganador, winner será null o undefined.
            // Declaración de estado Qué hace: Aquí se declara una variable llamada status, que se utilizará para mostrar un mensaje en la interfaz de usuario.  La variable status Es una variable que se utiliza para mostrar información al jugador: ya sea que alguien ha ganado o quién es el siguiente en jugar.
            // Condicional para determinar el estado del juego:
                    //Primero, se verifica si hay un ganador (if (winner)).

                        // Si winner tiene un valor (es decir, hay un ganador):
                        // Se asigna el mensaje 'Ganador: ' + winner a status. Por ejemplo, si winner es 'X', el status será 'Ganador: X'.

                        // Si winner no tiene un valor (no hay un ganador todavía):
                        // Se asigna el mensaje 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O') a status. Aquí, xIsNext es una variable booleana que determina quién es el siguiente jugador.

                    // Explicación de (xIsNext ? 'X' : 'O'):
                        // Si xIsNext es true, entonces el siguiente jugador es 'X'.
                        // Si xIsNext es false, entonces el siguiente jugador es 'O'.
                        // Por lo tanto, status será 'Siguiente jugador: X' o 'Siguiente jugador: O', dependiendo de quién sea el próximo en jugar.
    const winner = CalculateWinner(squares);  //ver constante winner
        let gamestatus;                          // ver decalración de estado
    if (winner) {                            //ver Condicional para determinar el estado del juego:
        gamestatus = "Ganador: " + winner;
    } else {
        gamestatus = "Siguiente jugador: " + (xIsNext ? "X" : "O");
    }

    //componente Board necesita pasar la prop value a cada uno de los componentes Square que representa:
    return (

        <>  
        <div className="status">{gamestatus}</div>      
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


//winner  Visualización del estado del juego
//<div className="status">{status}</div>
// La línea de código <div className="status">{status}</div> es un elemento de JSX (la sintaxis que se usa en React) que se utiliza para renderizar un div en la interfaz de usuario. Aquí te explico cada parte y su propósito:

// 1. Elemento div:
// javascript
// Copiar código
// <div className="status">
// Qué hace: Crea un contenedor div en el HTML de la página.
// className="status": Asigna la clase CSS status a este div. En React, usamos className en lugar de class (que es una palabra reservada en JavaScript) para aplicar clases CSS.
// Propósito: Esta clase status generalmente se utiliza para aplicar estilos específicos a este div a través de CSS, como cambiar su color, tamaño, alineación, etc.
// 2. Expresión {status}:
// javascript
// Copiar código
// {status}
// Qué hace: Inserta el valor de la variable status dentro del div.
// Propósito: Mostrar en la interfaz de usuario el mensaje almacenado en la variable status. Este mensaje puede indicar el ganador del juego o quién es el siguiente jugador en turno.
// 3. Combinación de div y {status}:
// javascript
// Copiar código
// <div className="status">{status}</div>
// Qué hace: Este código renderiza un div en el DOM con una clase status, y el contenido de este div será el valor de la variable status.
// Ejemplo:
// Si status = 'Ganador: X', entonces el HTML que se renderizará será:
// html
// Copiar código
// <div class="status">Ganador: X</div>
// Si status = 'Siguiente jugador: O', entonces el HTML que se renderizará será:
// html
// Copiar código
// <div class="status">Siguiente jugador: O</div>
// Propósito General:
// Visualización del estado del juego: Este div se utiliza para mostrar información importante sobre el estado actual del juego al jugador. Dependiendo del valor de status, el jugador puede ver quién ganó o quién tiene el siguiente turno.
// Estilización: La clase status permite aplicar estilos específicos a este mensaje para que sea claro y visible en la interfaz de usuario.
// Contexto:
// En un juego como tres en línea (Tic-Tac-Toe), es importante mantener a los jugadores informados sobre el estado actual del juego, y este div es una forma simple y efectiva de hacerlo. El mensaje en status se actualizará dinámicamente a medida que avanza el juego, y se mostrará en la interfaz de usuario dentro de este div.

//error src\componentes\BoardEstadoTurnosVacioWinner.js
//   Line 73:34:  Unexpected use of 'status'  no-restricted-globals
//Causa del Error:
// En JavaScript, status es una propiedad global que forma parte del objeto window, y se refiere al contenido de la barra de estado de la ventana del navegador. Cuando usas status como el nombre de una variable en tu código, ESLint emite una advertencia porque podría causar confusión o conflictos, ya que podría estar sobrescribiendo o interactuando con esta propiedad global.

// Solución:
// La solución más simple es renombrar tu variable status a algo más específico que no entre en conflicto con nombres globales. Por ejemplo, puedes cambiar el nombre a gameStatus o statusMessage.





                
                
                
                
                
                