import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/queries";
import type Pokemon from "../interfaces/interfaces";
import PokemonItem from "./PokemonItem";

export default function PokemonList() {
  const { data, loading, error } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      {data.pokemons.map((p: Pokemon) => (
        <div key={p.id}>
          <PokemonItem pokemon={p} />
        </div>
      ))}
    </ul>
  );
}
