
import { useState } from "react";
import { useEffect } from "react";

const UseFetch = () => {
  const [pokemons, setPokemons] = useState([]);
  // const [pokemon, setPokemon] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Obtenemos una lista de los primeros 3 Pokémon
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=3`)
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
      });
    })
      .catch((error) => console.error("Error fetching the pokemons: ", error));

  }, []);


  // return pokemons;

    // Función para agregar un producto al carrito
  const handleAddToCart = (pokemon) => {
      setCart([...cart, pokemon]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
      setCart(cart.filter((_, index) => index !== indexToRemove)); };


};

export default UseFetch;