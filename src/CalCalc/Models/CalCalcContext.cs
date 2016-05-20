using CalorieCalculator.Models.Sites;
using CalorieCalculator.Models.Subjects;
using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalorieCalculator.Models
{
    public class CalCalcContext:DbContext
    {
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Site> Sites { get; set; }
    }
}
