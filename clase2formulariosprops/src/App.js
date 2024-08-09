/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo';
import Input from './components/Input_,';
import Radio from './components/Radio,';
import Checkbox from './components/Checkbox.';
import Label from './components/Label';
import Select from './components/Select';

function App() {
  const poblaciones = ["Alicante", "Madrid", "Sevilla", "Valencia"];
  return (
    <div>
      <br/>
      <br/>
        <Titulo/>
      <br/>
      <br />
        <Label text="Nombre" /><Input type="text" type2= "input"/>
      <br />
      <br />
        <Label text="Apellidos" /><Input type="text" type2= "input"/>
      <br />
      <br />
        <Label text="Correo" /><Input type="text" type2= "input"/>
      <br/>
      <br />
        <Label text="Sexo" /><Radio id="sexo-m" value="m" text="Mujer"/><Radio id="sexo-h" value="h" text="Hombre"/>
      <br/>
      <br />
        <Label text="Población" />
        <Select name="poblacion" id="poblacion" options={poblaciones}/>
    
      <br/>
      <br />
        <Label text="Descripción" /><Input type="text" type2= "textArea"/>
      <br/>
      <br />
        <Checkbox check="info" text="Deseo recibir información sobre novedades y ofertas" />
      <br/>
      <br />
        <Checkbox check="condciones" text="Declaro haber leido y aceptar las condiciones generales del programa y la normativa sobre protección de datos" />
      <br/>
      <br />
        {/* <Label text="Enviar" /> */}
        <Input type="submit" type2= "input"/>
    

    </div>
  );
}

export default App;

{/* <Label text="Enviar" /><Input type="button" type2= "input"/> */}
