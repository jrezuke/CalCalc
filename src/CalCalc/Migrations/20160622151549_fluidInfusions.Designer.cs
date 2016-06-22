using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using CalorieCalculator.Models;

namespace CalorieCalculator.Migrations
{
    [DbContext(typeof(CalCalcContext))]
    [Migration("20160622151549_fluidInfusions")]
    partial class fluidInfusions
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CalCalc.Models.Dextrose.DextroseConcentration", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Concentration")
                        .HasAnnotation("MaxLength", 10);

                    b.Property<decimal>("Kcal_ml")
                        .HasAnnotation("Relational:ColumnType", "decimal(5,2)");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("CalCalc.Models.FluidInfusions.FluidInfusion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("DextroseConcentrationId");

                    b.Property<int>("Volume");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("CalorieCalculator.Models.Sites.Site", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("LongName")
                        .HasAnnotation("MaxLength", 200);

                    b.Property<string>("ShortName")
                        .HasAnnotation("MaxLength", 50);

                    b.HasKey("Id");
                });

            modelBuilder.Entity("CalorieCalculator.Models.Subjects.Subject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("SiteId");

                    b.Property<string>("SubjectId")
                        .HasAnnotation("MaxLength", 10);

                    b.HasKey("Id");
                });

            modelBuilder.Entity("CalCalc.Models.FluidInfusions.FluidInfusion", b =>
                {
                    b.HasOne("CalCalc.Models.Dextrose.DextroseConcentration")
                        .WithMany()
                        .HasForeignKey("DextroseConcentrationId");
                });

            modelBuilder.Entity("CalorieCalculator.Models.Subjects.Subject", b =>
                {
                    b.HasOne("CalorieCalculator.Models.Sites.Site")
                        .WithMany()
                        .HasForeignKey("SiteId");
                });
        }
    }
}
