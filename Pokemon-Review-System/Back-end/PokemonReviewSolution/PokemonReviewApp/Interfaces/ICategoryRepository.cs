using PokemonReviewApp.Models;

namespace PokemonReviewApp.Interfaces
{
    public interface ICategoryRepository
    {
        ICollection<Category> GetCategories();
        Category GetCategoryId(string id);
        ICollection<Pokemon> GetPokemonByCategory(string categoryId);
        bool CategoriesExists(string categoryId);

    }
}
