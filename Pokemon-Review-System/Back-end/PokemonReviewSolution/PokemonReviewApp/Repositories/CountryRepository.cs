using AutoMapper;
using PokemonReviewApp.Data;
using PokemonReviewApp.Interfaces;
using PokemonReviewApp.Models;

namespace PokemonReviewApp.Repositories
{
    public class CountryRepository : ICountryRepository
    {
        private readonly PokemonDataContext _context;
        private readonly IMapper _mapper;

        public CountryRepository(PokemonDataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public bool CountryExists(string Id)
        {
            return _context.Countries.Any(c => c.Id == Id);
        }

        public ICollection<Country> GetCountries()
        {
            return _context.Countries.ToList();
        }

        public Country GetCountry(string id)
        {
            return _context.Countries.Where(c => c.Id == id).FirstOrDefault();
        }

        public Country GetCountryOwner(string ownerId)
        {
            return _context.Owners.Where(o => o.Id == ownerId).Select(c => c.Country).FirstOrDefault();
        }

        public ICollection<Owner> GetOwnersFromACountry(string countryId)
        {
            return _context.Owners.Where(c => c.Country.Id == countryId).ToList();
        }
    }
}
