import React, { useContext } from "react";             //Context
import "../App.css"; // Importa el archivo CSS para los estilos                   
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa"; //// fUENTE internet: Importa el icono de carrito y papelera de React Icons 
import CalculateTotal from "../componentes/CalculateTotal";
import { CartContext } from "../componentes/CartContext";      //Context


// Componente principal que maneja el carrito+
export default function ShoppingCartContext() {

  const { cart, addToCart, removeFromCart } = useContext(CartContext);
   
  return (
    <div className="cart">
      {/* <h2>Carrito</h2> */}
      <h2 className="carrito">
          {/* Carrito */}
          {/* Fuente Internet: icono de carrito */}
        <FaShoppingCart /> 
      </h2>
      {/* Mostar producto seleccionado:  nombre del producto: el precio unitario,  la cantidad y el precio total  */}
      <ul>
        {cart.map((item, index) => (
          <li 
            key={index}>
            {item.name} - {item.quantity} x {item.price} = ${item.quantity * parseFloat(item.price.replace("$", ""))}
            <button className="btn btn-danger" onClick={() => removeFromCart(index)}>
              Eliminar <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
        <CalculateTotal cart={cart}/>
  </div>
  );
}