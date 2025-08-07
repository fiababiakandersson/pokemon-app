import type Pokemon from "../interfaces/interfaces";

type PokemonProps = {
  pokemon: Pokemon;
};

export default function PokemonItem({ pokemon }: PokemonProps) {
  return (
    <div
      style={{
        cursor: "pointer",
        width: 205,
        height: 286,
      }}
    >
      <img
        src={pokemon.imageUrl}
        alt={pokemon.name}
        style={{
          width: 205,
          backgroundColor: "#f2f2f2ff",
        }}
      />
      <div
        style={{
          padding: "6px 0 0 9px",
        }}
      >
        <h3
          style={{
            letterSpacing: 0.5,
            marginBottom: 19,
          }}
        >
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h3>
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          {pokemon.types.map((type, index) => (
            <div
              key={index}
              style={{
                background:
                  type == "grass"
                    ? "#9bcc50"
                    : type == "poison"
                    ? "#b97fc9"
                    : type == "fire"
                    ? "#fd7d24"
                    : type == "water"
                    ? "#4592c4 "
                    : type == "bug"
                    ? "#729f3f"
                    : type == "flying"
                    ? "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)"
                    : type == "normal"
                    ? "#a4acaf"
                    : type == "electric"
                    ? "#eed535"
                    : type == "ground"
                    ? "#af9d51ff "
                    : type == "fairy"
                    ? "#fdb9e9"
                    : type == "fighting"
                    ? "#d56723"
                    : type == "psychic"
                    ? "#f366b9"
                    : type == "rock"
                    ? "#917b1bff"
                    : type == "steel"
                    ? "#9eb7b8"
                    : type === "ghost"
                    ? "#7b62a3"
                    : type === "ice"
                    ? "#51c4e7"
                    : type == "dragon"
                    ? "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)"
                    : "",
                color:
                  type === "flying" ||
                  type === "normal" ||
                  type === "electric" ||
                  type === "fairy" ||
                  type === "steel" ||
                  type === "ice"
                    ? "black"
                    : "white",

                padding: "1px 20px 1px 20px",
                borderRadius: 2,
                fontSize: 13,
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
