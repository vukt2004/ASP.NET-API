using PokemonReviewApp.Models;

namespace PokemonReviewApp.Interfaces
{
    public interface ICountryRepository
    {
        ICollection<Country> GetCountries();
        Country GetCountry(string id);
        Country GetCountryOwner(string ownerId);
        ICollection<Owner> GetOwnersFromACountry(string countryId);
        bool CountryExists(string Id);
    }
}
