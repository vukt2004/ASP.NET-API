﻿namespace PokemonReviewApp.Models
{
    public class Owner
    {
        public string Id { get; set; }
        public string Gym { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Country Country { get; set; }
        public ICollection<PokemonOwner> PokemonOwners { get; set; }
    }
}
