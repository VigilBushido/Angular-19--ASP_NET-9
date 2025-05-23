﻿using MoviesAPI.Entities;

namespace MoviesAPI
{
    public class InMemoryRepository
    {
        private List<Genre> _genres;

        public InMemoryRepository()
        {
            _genres = new List<Genre>
            {
                new Genre{Id=1, Name = "Comedy" },
                new Genre{Id=2, Name = "Action" },
            };
        }

        public List<Genre> GetAllGenres()
        {
            return _genres;
        }

        public Genre? GetById(int id)
        {
            return _genres.FirstOrDefault(g => g.Id == id);
        }
    }
}
