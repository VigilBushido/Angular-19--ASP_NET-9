using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Entities;
using System.Globalization;

namespace MoviesAPI.Controllers
{
    [Route("api/[controller]")]
    public class genresController
    {
        //[HttpGet("all-genres")] //api/genres/all-genres
        [HttpGet] // api/genres
        [HttpGet("/all-of-the-genres")]
        public List<Genre> Get()
        {
            var repository = new InMemoryRepository();
            var genres = repository.GetAllGenres();
            decimal account = 29384.35m;
            Console.WriteLine(account.ToString("C", CultureInfo.CurrentCulture));

            return genres;
        }

        [HttpGet("{id}")] // api/genres/230
        public Genre? Get(int id)
        {
            var repository = new InMemoryRepository();
            var genre = repository.GetById(id);
            return genre;
        }

        [HttpPost]
        public void Post()
        {

        }

        [HttpPut]
        public void Put()
        {

        }

        [HttpDelete] 
        public void Delete()
        {

        }
    }
}
