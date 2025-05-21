import React from "react";

function Pokemon() {
    return (
        <div
          className="card"
          key={pokemon.id}
          style={{
            backgroundColor: typeColor[pokemon.types[0]] || "#f5f5f5",
          }}
        >
          <h3>
            {datos.name} (#{pokemon.id})
          </h3>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>Height: {pokemon.height / 10} m</p>
          <p>Weight: {pokemon.weight / 10} kg</p>
          <p>Type(s): {pokemon.types.join(", ")}</p>
          <p>Abilities: {pokemon.abilities.join(", ")}</p>
        </div>
        