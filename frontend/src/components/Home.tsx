import { useState } from "react";
import NavigationHeader from "./NavigationHeader";
import PokemonList from "./PokemonList";

export default function Home() {
  //   const typeFilter = useState("");
  const [typeFilter, setTypeFilter] = useState("fire");

  return (
    <div>
      <NavigationHeader setTypeFilter={setTypeFilter} typeFilter={typeFilter} />
      <PokemonList typeFilter={typeFilter} />
    </div>
  );
}
