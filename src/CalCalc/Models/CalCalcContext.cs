using CalCalc.Models.Dextrose;
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
        public DbSet<DextroseConcentration> DextroseConcentrations { get;set;}
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<DextroseConcentration>().Property(obj => obj.Kcal_ml).HasColumnType($"decimal(5,2)");
            base.OnModelCreating(builder);
        }
    }
}
