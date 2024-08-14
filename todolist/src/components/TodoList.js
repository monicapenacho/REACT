import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Titulo from "./Titulo";


export default function TodoList() {

    // Estado para la lista de tareas :
    const [tasks, setTasks] = useState([]);

    // EStado para el campo de entrada : Tenga un campo de entrada y un botón para agregar nuevas tareas.
    const [inputValue, setInputValue] = useState('');   //inputValue = task: Es una variable de estado que almacena el valor actual del campo de entrada. inputValue es una variable que contiene el valor ingresado por el usuario en un campo de texto.

    // Función para manejar el cambio en el campo de entrada: 
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }


    //FUNCION AGREGAR TAREA (VER (a)) toma el valor ingresado por el usuario, verifica que no esté vacío, lo agrega a la lista de tareas, y luego limpia el campo de entrada para una nueva tarea.

    function handleAddTask() {          // SE Puede LLAMAR TAMBIEN function agregarTarea() 
        if (inputValue.trim()) {      // Asegúrate de que no se agreguen tareas vacías: trim() es un método que elimina los espacios en blanco al principio y al final del texto. Esta línea verifica si el valor ingresado por el usuario no es una cadena vacía (es decir, que no esté compuesta solo de espacios en blanco). Si el valor es válido (no está vacío), se procede al siguiente paso.
          setTasks([...tasks, inputValue]);
                //tasks es un array (lista) que contiene todas las tareas actuales.
                //El operador de propagación [...] se utiliza aquí para crear una nueva copia del array tasks existente, y luego agregar inputValue (la nueva tarea) al final de esa copia.
                //setTasks es puna función que actualiza el estado de tasks (framework como React). En resumen, esta línea añade la nueva tarea al final de la lista de tareas y actualiza el estado con la nueva lista.
          document.querySelector('input[type="text"]').value = ""; // Limpiar el campo de entrada después de agregar la tarea
                //Esta línea selecciona el campo de texto (donde el usuario ingresa la nueva tarea) utilizando document.querySelector.
                //Luego, establece su valor a una cadena vacía "", lo que limpia el campo de entrada, dejándolo listo para que el usuario ingrese una nueva tarea
        }
      }


     // Función para eliminar la última tarea: Implementa el elimiar tareas, por medio de un botón (si se pulsa el botón se elimina la última)
    const handleRemoveLastTask = () => {
        setTasks(tasks.slice(0, -1));
    };

    // Función para eliminar una tarea específica (ver (b)): Implementa el eliminar tareas de manera que el usuario pueda elegir la tarea que quiere eliminar. La función eliminarTarea(index) se utiliza para eliminar una tarea específica de la lista de tareas en una aplicación de tareas. La tarea que se eliminará se identifica por su índice en la lista.
    const handleRemoveTask = (index) => {           // se puede llamar también function eliminarTarea(index) {}
                //index  es el parámetro que se pasa a la función, y representa la posición (índice) de la tarea que se desea eliminar en el array tareas.
                //ver b.1
        setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
    };
                //tareas.filter((_, i) => i !== index) 
                        //filter es un método de los arrays en JavaScript que crea un nuevo array con todos los elementos que pasan una prueba dada por una función.
                        //filter toma dos argumentos:
                            // El primer argumento (_) es el valor del elemento actual del array, que en este caso no se utiliza, por lo que se nombra con un guion bajo (_) para indicar que no es relevante.
                            //El segundo argumento (i) es el índice del elemento actual.

    //(ver c)
    return (
        <div>
            <Titulo texto="Lista de Tareas"/>

            {/* Campo entrada */}
            <Input tipo="text" cambio={handleInputChange} texto="Escribe una nueva tarea"/>
            {/* botón para agregar nuevas tareas */}
            <Button accion={handleAddTask} texto="Agregar tarea" />
            {/* botón para eliminar la última tarea  */}
            <Button accion={handleRemoveLastTask} texto="Eliminar última tarea" />
            <ul>
                {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    {/* botón para eliminar tarea seleccionada */}
                    <Button accion={() => handleRemoveTask(index)} texto="Eliminar"/>
                
                </li>
                ))}
            </ul>
        </div>
    );
}


    //(a)
    // Función para agregar una nueva tarea: la tarea debe agregarse al array de tareas y mostrarse en una lista debajo del campo de entrada.
    // const handleAddTask = () => {           //Definición función flecha (arrow function). No toma ningún argumento porque se utiliza para manejar el evento cuando el usuario hace clic en el botón para agregar una nueva tarea.
    //     if (inputValue.trim() !== '') {      // Condicional: Verificar si el campo de entrada no está vacío (Si no está vacío, el código dentro del if se ejecuta; de lo contrario, no pasa nada.). trim(): Es un método de JavaScript que elimina los espacios en blanco al principio y al final de una cadena. Esto asegura que, incluso si el usuario solo ingresó espacios en blanco, no se agregará una tarea vacía.
    //     setTasks([...tasks, inputValue]);  //Cuando el usuario escriba una tarea en el campo de entrada y haga clic en el botón "Agregar tarea", la tarea debe agregarse al array de tareas (...tasks) (array anterior + inputValue añ fomañ)
    //     setInputValue(''); // Limpiar el campo de entrada después de agregar la tarea.  Esto se hace para que el campo de entrada esté listo para que el usuario pueda ingresar otra tarea.
    //     }
    // };


    // function agregarTarea() {
    //     if (tarea.trim()) {
    //       // Asegúrate de que no se agreguen tareas vacías
    //       setTareas([...tareas, tarea]);
    //       document.querySelector('input[type="text"]').value = ""; // Limpiar el campo de entrada después de agregar la tarea
    //     }
    //   


    // (b)
    //   function eliminarTarea(index) {
    //     // Crear un nuevo array sin la tarea eliminada
    //     const nuevasTareas = tareas.filter((_, i) => i !== index);
    //     setTareas(nuevasTareas);
    //   }

    //(b.1)
//     Filtrado de las tareas:

//
// const nuevasTareas = tareas.filter((_, i) => i !== index);

// tareas.filter((_, i) => i !== index) es la clave de esta función.
// filter es un método de los arrays en JavaScript que crea un nuevo array con todos los elementos que pasan una prueba dada por una función.
// En este caso, la función filter toma dos argumentos:
// El primer argumento (_) es el valor del elemento actual del array, que en este caso no se utiliza, por lo que se nombra con un guion bajo (_) para indicar que no es relevante.
// El segundo argumento (i) es el índice del elemento actual.
// La condición i !== index dentro del filter dice: "Incluye en el nuevo array todos los elementos cuyo índice no sea igual al index proporcionado." En otras palabras, está excluyendo la tarea con el índice que se desea eliminar.
// Actualización del estado:

// javascript
// Copiar código
// setTareas(nuevasTareas);
// setTareas es la función que se usa para actualizar el estado tareas.
// Después de crear el nuevo array nuevasTareas (que no incluye la tarea que se desea eliminar), esta línea actualiza el estado tareas con este nuevo array.
// Como resultado, la lista de tareas se actualiza, y React vuelve a renderizar el componente para reflejar los cambios (es decir, la tarea eliminada desaparece de la interfaz).

//(c)

// return (
//     <>
//       <Input tipo="text" valor={tarea} cambios={handleInput} />
//       <Input tipo="button" valor="Agregar tarea" clicks={agregarTarea} />
//       <ul>
//         {tareas.map((t, index) => (
//           <li key={index}>
//             {t}{" "}
//             <Input
//               tipo="button"
//               valor="Borrar tarea"
//               clicks={() => eliminarTarea(index)}
//             />
//           </li>
//         ))}
//       </ul>
//     </>