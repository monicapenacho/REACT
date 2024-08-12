import { useState } from "react";
import Input from "./Input";


export default function TodoList() {

    // Estado para la lista de tareas :
    const [tasks, setTasks] = useState([]);

    // EStado para el campo de entrada : Tenga un campo de entrada y un botón para agregar nuevas tareas.
    const [inputValue, setInputValue] = useState('');   //inputValue: Es una variable de estado que almacena el valor actual del campo de entrada.

    // Función para manejar el cambio en el campo de entrada: 
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Función para agregar una nueva tarea: la tarea debe agregarse al array de tareas y mostrarse en una lista debajo del campo de entrada.
    const handleAddTask = () => {           //Definición función flecha (arrow function). No toma ningún argumento porque se utiliza para manejar el evento cuando el usuario hace clic en el botón para agregar una nueva tarea.
        if (inputValue.trim() !== '') {      // Condicional: Verificar si el campo de entrada no está vacío (Si no está vacío, el código dentro del if se ejecuta; de lo contrario, no pasa nada.). trim(): Es un método de JavaScript que elimina los espacios en blanco al principio y al final de una cadena. Esto asegura que, incluso si el usuario solo ingresó espacios en blanco, no se agregará una tarea vacía.
        setTasks([...tasks, inputValue]);  //Cuando el usuario escriba una tarea en el campo de entrada y haga clic en el botón "Agregar tarea", la tarea debe agregarse al array de tareas (...tasks) (array anterior + inputValue añ fomañ)
        setInputValue(''); // Limpiar el campo de entrada después de agregar la tarea.  Esto se hace para que el campo de entrada esté listo para que el usuario pueda ingresar otra tarea.
        }
    };

     // Función para eliminar la última tarea: Implementa el elimiar tareas, por medio de un botón (si se pulsa el botón se elimina la última)
    const handleRemoveLastTask = () => {
        setTasks(tasks.slice(0, -1));
    };

    // Función para eliminar una tarea específica: Implementa el elimiar tareas de manera que el usuario pueda elegir la tarea que quiere eliminar.
    const handleRemoveTask = (index) => {
        setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
    };


    return (
        <div>
        <h1>Lista de Tareas</h1>

        {/* Campo entrada */}
        <input tipo="text" valor="inputValue" onChange={handleInputChange} texto="Escribe una nueva tarea"/>
        {/* botón para agregar nuevas tareas */}
        {/* <button boton=handleAddTask} text="Agregar tarea"/> */}
        <button onClick={handleAddTask}>Agregar tarea</button>  
        {/* botón para eliminar la última tarea  */}
        <button onClick={handleRemoveLastTask}>Eliminar última tarea</button>
        <ul>
            {tasks.map((task, index) => (
            <li key={index}>
                {task}
                {/* botón para eliminar tarea seleccionada */}
                <button onClick={() => handleRemoveTask(index)}>Eliminar</button>
            </li>
            ))}
        </ul>
        </div>
    );
}


