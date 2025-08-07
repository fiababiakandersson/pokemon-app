import { useEffect } from "react";
import type Pokemon from "../interfaces/interfaces";

type PokemonProps = {
  pokemon: Pokemon;
};

export default function PokemonItem({ pokemon }: PokemonProps) {
  useEffect(() => {
    console.log(pokemon.imageUrl);
  }, [pokemon.imageUrl]);

  return (
    <div>
      <img
        src={pokemon.imageUrl}
        alt={pokemon.name}
        style={{
          width: 80,
          height: 80,
        }}
      />
      {pokemon.name}
    </div>
  );
}
