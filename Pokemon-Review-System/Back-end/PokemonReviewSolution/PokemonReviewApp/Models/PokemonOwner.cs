namespace PokemonReviewApp.Models
{
    public class PokemonOwner
    {
        public string PokemonId { get; set; }
        public string OwnerId { get; set; }
        public Pokemon Pokemon { get; set; }
        public Owner Owner { get; set; }
    }
}
