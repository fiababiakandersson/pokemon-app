import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query {
    pokemons {
      id
      name
      types
      imageUrl
    }
  }
`;

export const GET_POKEMON_BY_ID = gql`
  query ($id: Int!) {
    pokemon(id: $id) {
      id
      name
      types
      trainerNote
      imageUrl
    }
  }
`;
