Incluir usefetch pokemon en tienda online

import { useState, useEffect } from "react";

const useFetch = ( ) => {
const [searchData, setSearchData] = useState([]);
const [pokemon, setPokemon] = useState("pikachu");

// Recoge la info del pokemon (predeterminado está "Pikachu")
useEffect(() => {
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
.then((res) => res.json())
.then((res) => setSearchData([res]));
}, [pokemon]);

return [setPokemon, searchData];
};

export default useFetch;

Paso 1: Modificar useFetch para obtener múltiples Pokémon
Primero, modifica tu hook useFetch para que pueda obtener una lista de Pokémon en lugar de solo uno.

j
import { useState, useEffect } from "react";

const useFetch = () => {
const [searchData, setSearchData] = useState([]);
const [pokemon, setPokemon] = useState("pikachu");

useEffect(() => {
// Obtenemos una lista de los primeros 50 Pokémon
fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)
.then((res) => res.json())
.then((data) => {
const promises = data.results.map((pokemon) =>
fetch(pokemon.url).then((res) => res.json())
);
// Espera que todas las promesas se resuelvan
Promise.all(promises).then((results) => {
setSearchData(results);
});
});
}, []);

return searchData;
};

export default useFetch;
Explicación:
fetch(\https://pokeapi.co/api/v2/pokemon?limit=50\`)`: Obtenemos los primeros 50 Pokémon de la API de PokeAPI.
data.results.map((pokemon) => fetch(pokemon.url).then((res) => res.json())): Creamos una promesa para cada Pokémon, que obtiene sus detalles completos.
Promise.all(promises).then((results) => setSearchData(results)): Una vez que todas las promesas se hayan resuelto, guardamos los resultados en el estado searchData.

Paso 2: Usar los datos de Pokémon en ProductList

Sustituir productos perrunos
const products = [
{
id: 1,
name: "PerruPelota",
price: "$10",
image: "/images/product1.jpg"
},

];

Sustituir por Pokemon
