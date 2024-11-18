using PokemonReviewApp.Models;

namespace PokemonReviewApp.Interfaces
{
    public interface IPokemonRepository
    {
        ICollection<Pokemon> GetPokemons();
        Pokemon GetPokemonById(string id);
        Pokemon GetPokemonByName(string name);
        decimal GetPokemonByRating(string pokeId);
        bool PokemonExists(string pokeId);
    }
}
