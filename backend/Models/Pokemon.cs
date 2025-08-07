namespace PokeApi.Models
{
    public class Pokemon
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string[] Types { get; set; }
        public string? TrainerNote { get; set; }
        public required string ImageUrl { get; set; }
    }
}