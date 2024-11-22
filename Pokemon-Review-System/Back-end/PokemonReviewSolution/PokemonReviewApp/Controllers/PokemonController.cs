using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PokemonReviewApp.Dto;
using PokemonReviewApp.Interfaces;
using PokemonReviewApp.Models;
using System.Collections;
using System.Collections.Generic;

namespace PokemonReviewApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PokemonController : Controller
    {
        private readonly IPokemonRepository _pokemonRepo;
        private readonly IMapper _mapper;

        public PokemonController(IPokemonRepository PokemonRepo, IMapper mapper)
        {
            _pokemonRepo = PokemonRepo;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Pokemon>))]
        public IActionResult GetPokemons()
        {
            var pokemons = _mapper.Map<List<PokemonDto>>(_pokemonRepo.GetPokemons());

            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(pokemons);
        }

        [HttpGet("{pokemonId}")]
        [ProducesResponseType(200, Type=typeof(Pokemon))]
        [ProducesResponseType(400)]
        public IActionResult GetPokemonId(string pokemonId)
        {
            if (!_pokemonRepo.PokemonExists(pokemonId))
                return NotFound();
            var pokemon = _mapper.Map<PokemonDto>(_pokemonRepo.GetPokemonById(pokemonId));
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(pokemon);
        }

        [HttpGet("{pokemonId}/Rating")]
        [ProducesResponseType(200, Type = typeof(decimal))]
        [ProducesResponseType(400)]
        public IActionResult GetPokemonRating(string pokemonId)
        {
            if (!_pokemonRepo.PokemonExists(pokemonId))
                return NotFound();
            var rating = _pokemonRepo.GetPokemonByRating(pokemonId);
            if (!ModelState.IsValid) 
                return BadRequest(ModelState);
            return Ok(rating);
        }
    }
}
