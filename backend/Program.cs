using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using PokeApi.Data;
using PokeApi.Models;

var builder = WebApplication.CreateBuilder(args);

// database
builder.Services.AddDbContext<PokeDbContext>(opt =>
opt.UseSqlite("Data Source=pokedex.db"));

// GraphQL
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>();
builder.Services.AddCors();
builder.Services.AddControllers();

var app = builder.Build();

// seed DB on startup
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<PokeDbContext>();
    db.Database.EnsureCreated(); // create DB if doesnt exist

    if (!db.Pokemons.Any()) //only seed if empty
    {
        Console.WriteLine("Seeding Pokémon data...");

        using var http = new HttpClient();
        for (int i = 1; i <= 151; i++)
        {
            var json = await http.GetStringAsync($"https://pokeapi.co/api/v2/pokemon/{i}");

            var obj = JObject.Parse(json);

            var pokemon = new Pokemon
            {
                Id = i,
                Name = obj["name"]!.ToString(),
                Types = obj["types"]!
                    .Select(t => t["type"]!["name"]!.ToString())
                    .ToArray(),
                ImageUrl = obj["sprites"]!["front_default"].ToString()
            };

            db.Pokemons.Add(pokemon);
        }

        await db.SaveChangesAsync();
        Console.WriteLine("Seeding complete!");
    }
}

app.UseCors(c => c.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
app.MapControllers();
app.MapGraphQL();
app.Run();
