import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/queries";
import type Pokemon from "../interfaces/interfaces";
import PokemonItem from "./PokemonItem";

interface Props {
  typeFilter: string;
}

export default function PokemonList(props: Props) {
  const { data, loading, error } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div
      style={{
        justifyContent: "center",
        maxWidth: "50rem",
        flexWrap: "wrap",
        display: "flex",
        paddingTop: 30,
        margin: "auto",
        gap: 35,
      }}
    >
      {props.typeFilter == ""
        ? data.pokemons.map((p: Pokemon) => (
            <div key={p.id}>
              <PokemonItem pokemon={p} />
            </div>
          ))
        : data.pokemons
            .filter((p: Pokemon) => {
              // var types = p.types.map(type => type.slu)
              return p.types.some((t) => t.includes(props.typeFilter));
            })
            .map((p: Pokemon) => (
              <div key={p.id}>
                <PokemonItem pokemon={p} />
              </div>
            ))}
    </div>
  );
}
