using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;
using Microsoft.Data.Entity.Metadata;

namespace CalorieCalculator.Migrations
{
    public partial class fluidInfusions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FluidInfusion",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DextroseConcentrationId = table.Column<int>(nullable: false),
                    Volume = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FluidInfusion", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FluidInfusion_DextroseConcentration_DextroseConcentrationId",
                        column: x => x.DextroseConcentrationId,
                        principalTable: "DextroseConcentration",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
            migrationBuilder.AddForeignKey(
                name: "FK_Subject_Site_SiteId",
                table: "Subject",
                column: "SiteId",
                principalTable: "Site",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(name: "FK_Subject_Site_SiteId", table: "Subject");
            migrationBuilder.DropTable("FluidInfusion");
        }
    }
}
