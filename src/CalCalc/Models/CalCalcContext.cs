using CalCalc.Models.Dextrose;
using CalCalc.Models.FluidInfusions;
using CalorieCalculator.Models.Sites;
using CalorieCalculator.Models.Subjects;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalorieCalculator.Models
{
    public class CalCalcContext:DbContext
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DextroseConcentration>(entity =>
            {
                entity.Property(e => e.Concentration).HasMaxLength(10);

                entity.Property(e => e.Kcal_ml).HasColumnType("decimal");
            });

            modelBuilder.Entity<FluidInfusion>(entity =>
            {
                entity.HasOne(d => d.DextroseConcentration)
                    .WithMany(p => p.FluidInfusion)
                    .HasForeignKey(d => d.DextroseConcentrationId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_FluidInfusion_DextroseConcentration");
            });

            modelBuilder.Entity<Site>(entity =>
            {
                entity.Property(e => e.LongName).HasMaxLength(200);

                entity.Property(e => e.ShortName).HasMaxLength(50);
            });

            modelBuilder.Entity<Subject>(entity =>
            {
                entity.Property(e => e.SubjectId).HasMaxLength(10);

                entity.HasOne(d => d.Site)
                    .WithMany(p => p.Subject)
                    .HasForeignKey(d => d.SiteId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Subject_Site");
            });
        }

        public virtual DbSet<Subject> Subjects { get; set; }
        public virtual DbSet<Site> Sites { get; set; }
        public virtual DbSet<DextroseConcentration> DextroseConcentrations { get;set;}
        public virtual DbSet<FluidInfusion> FluidInfusions { get; set; }
        
    }
}
