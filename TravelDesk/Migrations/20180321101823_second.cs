using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TravelDesk.Migrations
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "To",
                table: "FlightInfo",
                newName: "FlightTo");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "FlightInfo",
                newName: "FlightCost");

            migrationBuilder.RenameColumn(
                name: "From",
                table: "FlightInfo",
                newName: "FlightFrom");

            migrationBuilder.AddColumn<int>(
                name: "PassportInfoId",
                table: "RequestInfo",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ForexInfo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CardNumber = table.Column<long>(nullable: false),
                    CountryCode = table.Column<string>(nullable: true),
                    MobileNo = table.Column<long>(nullable: false),
                    RequestInfoId = table.Column<long>(nullable: false),
                    RequestInfoId1 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ForexInfo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ForexInfo_RequestInfo_RequestInfoId1",
                        column: x => x.RequestInfoId1,
                        principalTable: "RequestInfo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PassportInfo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PassportExpiryDate = table.Column<DateTime>(nullable: false),
                    PassportNumber = table.Column<long>(nullable: false),
                    VisaExpiryDate = table.Column<DateTime>(nullable: false),
                    VisaNumber = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassportInfo", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RequestInfo_PassportInfoId",
                table: "RequestInfo",
                column: "PassportInfoId",
                unique: true,
                filter: "[PassportInfoId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ForexInfo_RequestInfoId1",
                table: "ForexInfo",
                column: "RequestInfoId1");

            migrationBuilder.AddForeignKey(
                name: "FK_RequestInfo_PassportInfo_PassportInfoId",
                table: "RequestInfo",
                column: "PassportInfoId",
                principalTable: "PassportInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RequestInfo_PassportInfo_PassportInfoId",
                table: "RequestInfo");

            migrationBuilder.DropTable(
                name: "ForexInfo");

            migrationBuilder.DropTable(
                name: "PassportInfo");

            migrationBuilder.DropIndex(
                name: "IX_RequestInfo_PassportInfoId",
                table: "RequestInfo");

            migrationBuilder.DropColumn(
                name: "PassportInfoId",
                table: "RequestInfo");

            migrationBuilder.RenameColumn(
                name: "FlightTo",
                table: "FlightInfo",
                newName: "To");

            migrationBuilder.RenameColumn(
                name: "FlightFrom",
                table: "FlightInfo",
                newName: "From");

            migrationBuilder.RenameColumn(
                name: "FlightCost",
                table: "FlightInfo",
                newName: "Price");
        }
    }
}
