import { gql } from "@apollo/client";

export const ADD_NOTE = gql`
  mutation ($pokemonId: Int!, $note: String!) {
    addNote(pokemonId: $pokemonId, note: $note) {
      id
      trainerNote
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation ($pokemonId: Int!, $note: String!) {
    updateNote(pokemonId: $pokemonId, note: $note) {
      id
      trainerNote
    }
  }
`;
