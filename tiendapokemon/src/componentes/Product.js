// Un componente que representa un solo producto
import React, { useContext } from "react";             //Context
import { CartContext } from "./CartContext";            //Context

import { FaShoppingCart } from "react-icons/fa";


export default function Product({ product }) {

    const { addToCart } = useContext(CartContext);

    return (
      <div className="product">
        <img src={product.image} alt={product.name} width="100" />
        <h3>{product.name}</h3>
        <p>Price: {product.price}</p>
        {/* <button className="btn btn-info" onClick={() => onAddToCart(product)}>Añadir al carrito</button> */}
        <button className="btn btn-info" onClick={() => addToCart(product)}>Añadir al <FaShoppingCart /></button>
      </div>
    );
  }
  