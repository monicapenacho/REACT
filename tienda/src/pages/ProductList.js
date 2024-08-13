import React, { useState } from "react";
import "../App.css"; // Importa el archivo CSS para los estilos
import Product from "../componentes/Product";
import CalculateTotal from "../componentes/CalculateTotal";
// fUENTE internet: Importa el icono de carrito de React Icons
import { FaShoppingCart } from "react-icons/fa"; 


// Componente principal que maneja la lista de productos y el carrito
export default function ProductList() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "PerruPelota", price: "$10", image: "/images/product1.jpg" },
    { id: 2, name: "PerruHueso", price: "$20", image: "/images/product2.jpg" },
    { id: 3, name: "PerruGranos", price: "$30", image: "/images/product3.jpg" },
    { id: 4, name: "PerruPincho", price: "$40", image: "/images/product4.jpg" },
    { id: 5, name: "PerruCuerda", price: "$50", image: "/images/product5.jpg" },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

 


  return (
    <div className="catalogo">
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className="cart">
        {/* <h2>Carrito</h2> */}
        <h2 className="carrito">
            {/* Carrito */}
            {/* Fuente Internet: icono de carrito */}
           <FaShoppingCart /> 
        </h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
          ))}
        </ul>
      </div>
      <CalculateTotal cart={cart}/>
    </div>
  );
}
