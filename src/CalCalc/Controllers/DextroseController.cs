using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using CalorieCalculator.Models;
using CalCalc.Models.Dextrose;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CalCalc.Controllers
{
    [Route("api/[controller]")]
    public class DextroseController : Controller
    {
        private CalCalcContext _dbContext;

        public DextroseController(CalCalcContext context)
        {
            _dbContext = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<DextroseConcentration> Get()
        {
            return _dbContext.DextroseConcentrations.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]DextroseConcentration dexCon)
        {
            if (ModelState.IsValid)
            {
                _dbContext.DextroseConcentrations.Add(dexCon);
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
