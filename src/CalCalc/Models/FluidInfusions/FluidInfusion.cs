﻿using CalCalc.Models.Dextrose;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalCalc.Models.FluidInfusions
{ 

    public partial class FluidInfusion
    {
        public FluidInfusion()
        {

        }

        public int Id { get; set; }
        public int Volume { get; set; }
        public int DextroseConcentrationId { get; set; }      
        public virtual DextroseConcentration DextroseConcentration { get; set; }
        

    }
}
