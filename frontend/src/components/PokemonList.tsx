import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_POKEMONS } from "../graphql/queries";
import type Pokemon from "../interfaces/interfaces";

export default function PokemonList() {
  const { data, loading, error } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      {data.pokemons.map((p: Pokemon) => (
        <li key={p.id}>
          <Link to={`/pokemon/${p.id}`}>{p.name}</Link>
        </li>
      ))}
    </ul>
  );
}
