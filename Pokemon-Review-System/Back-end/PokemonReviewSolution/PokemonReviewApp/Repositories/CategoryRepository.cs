using PokemonReviewApp.Data;
using PokemonReviewApp.Interfaces;
using PokemonReviewApp.Models;

namespace PokemonReviewApp.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private PokemonDataContext _context;
        public CategoryRepository(PokemonDataContext context)
        {
            _context = context;
        }

        public bool CategoriesExists(string categoryId)
        {
            return _context.Categories.Any(c => c.Id == categoryId);
        }

        public ICollection<Category> GetCategories()
        {
            return _context.Categories.ToList();
        }

        public Category GetCategoryId(string id)
        {
            return _context.Categories.Where(c => c.Id == id).FirstOrDefault();
        }

        public ICollection<Pokemon> GetPokemonByCategory(string categoryId)
        {
            return _context.PokemonCategories.Where(c => c.CategoryId == categoryId).Select(p => p.Pokemon).ToList();
        }
    }
}
