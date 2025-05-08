import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [pokemones, setPokemones] = useState([]);
  useEffect(() => {
    const fetchPokemones = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const data = await response.json();
      const { results } = data;

      const detallesPokemon = await Promise.all(
        results.map(async (pokemon) => {
          const respuesta = await fetch(pokemon.url);
          const datos = await respuesta.json();
          return {
            id: datos.id,
            nombre: datos.name,
            imagen: datos.sprites.front_default,
          };
        })
      );
      setPokemones(detallesPokemon);
    };

    fetchPokemones();
  }, []);
  return (
    <>
      <h1>𝓟𝓞𝓚𝓔𝓓𝓔𝓧 - 𝓨𝓞𝓢𝓢</h1>
      <p>𝓑𝓘𝓔𝓝𝓥𝓔𝓝𝓘𝓓𝓞 𝓐 𝓟𝓞𝓚𝓔𝓓𝓔𝓧</p>

      {pokemones.map((pokemon) => (
        <div className="tarjeta" key={pokemon.id}>
          <h1>{pokemon.nombre}</h1>
          <img src={pokemon.imagen} alt="" />
          <p>Altura : {pokemon.altura/10} m</p>
          <p>Peso : {pokemon.peso/10} kg </p>
        </div>
      ))}
    </>
  );
}

export default App;
