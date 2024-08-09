/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo';
import InputText from './components/InputText';
import CampoNombre from './components/CampoNombre';
import CampoApellidos from './components/CampoApellidos';
import CampoCorreo from './components/CampoCorreo';
import CampoSexo from './components/CampoSexo,';
import CampoSexoMujer from './components/CampoSexoMujer';
import CampoSexoHombre from './components/CampoSexoHombre,';
import CampoPoblacion from './components/CampoPoblacion';
import CampoDescripcion from './components/CampoDescripcion';
import LabelInfo from './components/LabelInfo';
import LabelCondiciones from './components/LabelCondiciones';
import BotonEnviar from './components/BotonEnviar';

function App() {
  
  return (
    <div>
      <br/>
      <br/>
        <Titulo/>
      <br/>
      <br />
        <CampoNombre /><InputText/>
      <br/>
      <br />
        <CampoApellidos /><InputText/>
      <br/>
      <br />
        <CampoSexo /> <CampoSexoMujer/><CampoSexoHombre/>
      <br/>
      <br />
        <CampoCorreo /><InputText/>
      <br/>
      <br />
        <CampoPoblacion />
      <br/>
      <br />
        <CampoDescripcion />
      <br/>
      <br />
        <LabelInfo />
      <br/>
      <br />
        <LabelCondiciones />
      <br/>
      <br />
        <BotonEnviar />
    

    </div>
  );
}

export default App;


