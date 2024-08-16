import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PokemonList from './pages/PokemonList';
import NotFound from './pages/NotFound';
import Footer from './componentes/Footer';
import NavBar from './componentes/NavBar.js';
import NewUserForm from './pages/NewUserForm.js';
import Cabecera from './componentes/Cabecera.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CarouselInterval from './componentes/CarouselInterval';


function App() {
  return (
    <Router>
      <Cabecera />
      <NavBar />
      {/* <div>
        <CarouselInterval />
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<PokemonList />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/user" element={<NewUserForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



