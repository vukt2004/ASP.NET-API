namespace PokemonReviewApp.Models
{
    public class PokemonCategory
    {
        public string PokemonId { get; set; }
        public string CategoryId { get; set; }
        public Pokemon Pokemon { get; set; }
        public Category Category { get; set; }
    }
}
