using CalCalc.Models.FluidInfusions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CalCalc.Models.Dextrose
{
    public partial class DextroseConcentration
    {
        public DextroseConcentration()
        {
            FluidInfusion = new HashSet<FluidInfusion>();
        }
        public int Id { get; set; }
        [MaxLength(10)]
        public string Concentration { get; set; }
        
        public decimal Kcal_ml { get; set; }

        public virtual ICollection<FluidInfusion> FluidInfusion { get; set; }
    }
}
