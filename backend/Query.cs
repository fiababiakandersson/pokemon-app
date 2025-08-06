using PokeApi.Data;
using PokeApi.Models;

public class Query
{
    public IQueryable<Pokemon> GetPokemons(PokeDbContext context)
    {
        return context.Pokemons;
    }

    public Pokemon? GetPokemon(PokeDbContext context, int id)
    {
        return context.Pokemons.FirstOrDefault(p => p.Id == id);
    }
}