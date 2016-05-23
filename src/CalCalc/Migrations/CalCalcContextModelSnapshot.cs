using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using CalorieCalculator.Models;

namespace CalorieCalculator.Migrations
{
    [DbContext(typeof(CalCalcContext))]
    partial class CalCalcContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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
        }
    }
}
