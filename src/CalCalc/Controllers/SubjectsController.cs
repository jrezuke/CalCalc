using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using CalorieCalculator.Models;
using CalorieCalculator.Models.Subjects;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CalorieCalculator.Controllers
{
    [Route("api/[controller]")]
    public class SubjectsController : Controller
    {
        private CalCalcContext _dbContext;

        public SubjectsController(CalCalcContext context)
        {
            _dbContext = context;
        }


        // GET: api/
        [HttpGet]
        public IEnumerable<Subject> Get()
        {
            return _dbContext.Subjects.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/
        [HttpPost]
        public void Post([FromBody]Subject subject)
        {
            if (ModelState.IsValid)
            {
                _dbContext.Subjects.Add(subject);
                _dbContext.SaveChanges();
            }

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
