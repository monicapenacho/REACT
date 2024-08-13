import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductList from './pages/ProductList';
import NotFound from './pages/NotFound';
import Footer from './componentes/Footer';
import NavBar from './componentes/NavBar.js';
import Header from './componentes/Header';
import NewUserForm from './pages/NewUserForm.js';

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/user" element={<NewUserForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



