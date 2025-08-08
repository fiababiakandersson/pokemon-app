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

   public IEnumerable<string> GetTypes(PokeDbContext context)
    {
        var pokemons = context.Pokemons
        .Where(p => p.Types != null)
        .ToList(); // load all pokemons into memory

        return pokemons
        .SelectMany(p => p.Types!)
        .Where(t => !string.IsNullOrWhiteSpace(t))
        .Distinct()
        .OrderBy(t => t)
        .ToList();
    }
 
}