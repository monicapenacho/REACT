import React, { useEffect, useState } from "react";
import "../App.css"; // Importa el archivo CSS para los estilos
import Product from "../componentes/Product";



// Componente principal que maneja la lista de productos 
export default function PokemonListContext() {
  
  const [pokemons, setPokemons] = useState([]);

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
  
  return (
    <div className="catalogo">
      <h1>Catálogo de Pokemon</h1>
      <div className="product-list">
        {pokemons.map((pokemon) => (
          <Product key={pokemon.id} product={pokemon}/>
        ))}
      </div>
    </div>
  );
}; 
