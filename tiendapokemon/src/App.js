import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecera from './componentes/Cabecera.js';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './componentes/Footer';
import NavBar from './componentes/NavBar.js';
import NewUserForm from './pages/NewUserForm.js';
import ShoppingCartContext from './pages/ShoppingCartContext.js';
import PokemonListContext from './pages/PokemonListContext.js';
import { CartProvider } from './componentes/CartContext';             //Context

// import 'bootstrap/dist/css/bootstrap.min.css';
// import CarouselInterval from './componentes/CarouselInterval';


function App() {
  return (
    <CartProvider>
      <Router>
        <Cabecera />
        <NavBar />
        {/* <div>
          <CarouselInterval />
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<PokemonListContext />} />
          <Route path="/shoppingcart" element={<ShoppingCartContext />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/user" element={<NewUserForm />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;



