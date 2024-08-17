import React, { createContext, useState } from 'react';

export const CartContext = createContext();           // Ver abajo explicación

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);             // Inicializa el estado del carrito como un array vacío

  const addToCart = (pokemon) => {                  // Ver abajo explicación
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === pokemon.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === pokemon.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...pokemon, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


//Explicación Context
            // PokemonList.js ahora solo maneja la lista de productos, sin ninguna lógica de carrito.
            // ShoppingCart.js es donde resides toda la funcionalidad del carrito, y donde se maneja la visualización, adición y eliminación de productos del carrito.
            // CartContext.js permite que todos los componentes que lo necesiten (como Product.js y ShoppingCart.js) puedan acceder al carrito y modificarlo.
            // Con esta estructura, toda la funcionalidad del carrito estará centralizada y compartida a través del contexto, lo que simplifica la gestión del estado en tu aplicación.


//Explicación función addToCArt

            // Función para agregar un producto (parámetro = pokemon) al carrito: agrupando por producto

//  const handleAddToCart = (pokemon) => {

             //setCart es una función de React setState para actualizar el estado basado en su valor anterior, Esta función recibe el estado anterior como argumento.prevCart = previousCart (carrito anterior) Es el estado actual del carrito justo antes de que se realice la actualización. 

    // setCart((prevCart) => {
        
            //busca en el carrito previo (prevCart) un producto que tenga el mismo id que el producto que se quiere agregar. Si lo encuentra, lo almacena en la variable existingProduct.

    //   const existingProduct = prevCart.find((item) => item.id === pokemon.id);
    //   if (existingProduct) {

            // Si el producto ya está en el carrito, incrementa la cantidad

    //     return prevCart.map((item) =>
    //       item.id === pokemon.id ? { ...item, quantity: item.quantity + 1 } : item
    //     );
    //   } else {
        
            // Si el producto no está en el carrito, agrégalo con cantidad 1

//         return [...prevCart, { ...pokemon, quantity: 1 }];
//       }
//     });
//   };