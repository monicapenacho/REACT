import React, { useState } from "react";
import "../App.css"; // Importa el archivo CSS para los estilos
import Product from "../componentes/Product";



// Componente principal que maneja la lista de productos y el carrito
export default function ProductList() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Producto 1", price: "$10", image: "/images/product1.jpg" },
    { id: 2, name: "Producto 2", price: "$20", image: "/images/product2.jpg" },
    { id: 3, name: "Producto 3", price: "$30", image: "/images/product3.jpg" },
    { id: 4, name: "Producto 4", price: "$40", image: "/images/product4.jpg" },
    { id: 5, name: "Producto 5", price: "$50", image: "/images/product5.jpg" },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>

      <h2>Carrito</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
}
