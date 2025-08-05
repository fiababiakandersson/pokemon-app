using PokeApi.Data;
using PokeApi.Models;

public class Mutation
{
    public Pokemon? AddNote(PokeDbContext context, int pokemonId, string note)
    {
        var pokemon = context.Pokemons.FirstOrDefault(p => p.Id == pokemonId);
        if (pokemon == null) return null;

        pokemon.TrainerNote = note;
        context.SaveChanges();
        return pokemon;
    }

    public Pokemon? UpdateNote(PokeDbContext context, int pokemonId, string note)
    {
        var pokemon = context.Pokemons.FirstOrDefault(p => p.Id == pokemonId);
        if (pokemon == null) return null;

        pokemon.TrainerNote = note;
        context.SaveChanges();
        return pokemon;
    }
}
