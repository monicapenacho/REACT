import logo from './logo.svg';
import './App.css';
import Board from './componentes/Board';
import Square from './componentes/Square';

function App() {
  return (
    // <div className="App">
    <>
      <Board/> <Square value = "1" /> <Square value = "2"/> <Square value = "3"/>
      <Board/> <Square value = "4"/> <Square value = "5"/> <Square value = "6"/>
      <Board/> <Square value = "7"/> <Square value = "8"/> <Square value = "9"/>
    </>
  );
}

export default App;


// {/* <Board/> <Square text="¡hiciste clic!" value = "1" /> <Square text="¡hiciste clic!" value = "2"/> <Square text="¡hiciste clic!" value = "3"/>
// <Board/> <Square text="¡hiciste clic!" value = "4"/> <Square text="¡hiciste clic!" value = "5"/> <Square text="¡hiciste clic!" value = "6"/>
// <Board/> <Square text="¡hiciste clic!" value = "7"/> <Square text="¡hiciste clic!" value = "8"/> <Square text="¡hiciste clic!" value = "9"/> */}