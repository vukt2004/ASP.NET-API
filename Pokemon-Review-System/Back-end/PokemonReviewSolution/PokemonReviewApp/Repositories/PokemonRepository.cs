using PokemonReviewApp.Data;
using PokemonReviewApp.Interfaces;
using PokemonReviewApp.Models;

namespace PokemonReviewApp.Repositories
{
    public class PokemonRepository : IPokemonRepository
    {
        private readonly PokemonDataContext _context;

        public PokemonRepository(PokemonDataContext context)
        {
            _context = context;
        }

        public Pokemon GetPokemonById(string id)
        {
            return _context.Pokemons.Where(p => p.Id == id).FirstOrDefault();
        }

        public Pokemon GetPokemonByName(string name)
        {
            return _context.Pokemons.Where(p => p.Name == name).FirstOrDefault();
        }

        public decimal GetPokemonByRating(string pokeId)
        {
            var review = _context.Reviews.Where(p => p.Pokemon.Id == pokeId);
            if (review.Count() <= 0)
                return 0;
            return (decimal)review.Sum(r => r.Rating / review.Count());
        }

        public ICollection<Pokemon>GetPokemons()
        {
            return _context.Pokemons.OrderBy(p => p.Id).ToList();
        }

        public bool PokemonExists(string pokeId)
        {
            return _context.Pokemons.Any(p => p.Id == pokeId);
        }
    }
}
