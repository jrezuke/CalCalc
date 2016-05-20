using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using CalorieCalculator.Models;

namespace CalorieCalculator.Migrations
{
    [DbContext(typeof(CalCalcContext))]
    [Migration("20160501134621_site")]
    partial class site
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CalorieCalculator.Models.Sites.Site", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("LongName");

                    b.Property<string>("ShortName");

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
