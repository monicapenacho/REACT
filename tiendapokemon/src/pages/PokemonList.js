import React from "react";
import "../App.css"; // Importa el archivo CSS para los estilos
import Product from "../componentes/Product";
import CalculateTotal from "../componentes/CalculateTotal";
import { useEffect, useState } from "react";
// fUENTE internet: Importa el icono de carrito de React Icons
import { FaShoppingCart } from "react-icons/fa"; 
import { FaTrashAlt } from "react-icons/fa";


// Componente principal que maneja la lista de productos y el carrito
export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [cart, setCart] = useState([]);     // Inicializa el estado del carrito como un array vacío
  // const [pokemon, setPokemon] = useState{};

  // Función para obtener datos de la PokéAPI

  useEffect(() => {
      // Obtenemos una lista de los primeros 10 Pokémon
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
        .then((response) => response.json())
        .then((data) => {
          const results = data.results;

          // Obtener detalles adicionales de cada Pokemon
          const promises = results.map((pokemon) =>
            fetch(pokemon.url)
              .then((res) => res.json())  // recoge la respuesta json
              .then((resData) => ({
                id: resData.id,
                name: resData.name,
                price: `$${(resData.id * 10).toFixed(2)}`, // Asignamos un precio basado en su id
                image: resData.sprites.front_default, // Obtenemos la imagen
              }))
          );
          // Promise.all Espera que todas las promesas se resuelvan
        Promise.all(promises).then((pokemonData) => {
            setPokemons(pokemonData);
            console.log("pokemonData:"+pokemonData) ;
        });
      })
        .catch((error) => console.error("Error fetching the pokemons: ", error));
  
    }, []);
  
  
    // return pokemons;
  
      // Función para agregar un producto al carrito
    const handleAddToCart = (pokemon) => {
        setCart([...cart, pokemon]);
        // console.log(pokemon)
    };
  
    const handleRemoveFromCart = (indexToRemove) => {
        setCart(cart.filter((_, index) => index !== indexToRemove)); 
    };
  
  return (
    <div className="catalogo">
      <h1>Catálogo de Pokemon</h1>
      <div className="product-list">
        {pokemons.map((pokemon) => (
          <Product key={pokemon.id} product={pokemon} onAddToCart={handleAddToCart} />
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
            <li 
              key={index}>{item.name} - {item.price}
              <button className="btn btn-danger" onClick={() => handleRemoveFromCart(index)}>
                Eliminar <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
          <CalculateTotal cart={cart}/>
      </div>
          
    </div>
  );
}; 
