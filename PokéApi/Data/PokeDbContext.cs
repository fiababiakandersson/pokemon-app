using Microsoft.EntityFrameworkCore;
using PokeApi.Models;

namespace PokeApi.Data
{
    public class PokeDbContext : DbContext
    {
        public PokeDbContext(DbContextOptions<PokeDbContext> options) : base(options) { }

        public DbSet<Pokemon> Pokemons { get; set; } // table name will be Pokemons

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pokemon>()
          .Property(p => p.Types)
          .HasConversion(
            v => string.Join(',', v), // save as comma-separated string in DB
            v => v.Split(',', StringSplitOptions.RemoveEmptyEntries)
          );
        }

    }
}