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

        public ICollection<Pokemon>GetPokemons()
        {
            return _context.Pokemons.OrderBy(p => p.Id).ToList();
        }


    }
}
