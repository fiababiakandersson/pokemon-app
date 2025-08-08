import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_POKEMONS } from "../graphql/queries";
import type Pokemon from "../interfaces/interfaces";
import PokemonItem from "./PokemonItem";

interface Props {
  typeFilter: string;
}

export default function PokemonList(props: Props) {
  const { data, loading, error } = useQuery(GET_POKEMONS);

  useEffect(() => {
    console.log("filter: ", props.typeFilter);
  }, [props.typeFilter]);

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
      {props.typeFilter != ""
        ? data.pokemons.map((p: Pokemon) => (
            <div key={p.id}>
              <PokemonItem pokemon={p} />
            </div>
          ))
        : data.pokemons
            .filter((p: Pokemon) =>
              p.types.map((t: string) => t == props.typeFilter)
            )
            .map((p: Pokemon) => (
              <div key={p.id}>
                <PokemonItem pokemon={p} />
              </div>
            ))}
    </div>
  );
}
