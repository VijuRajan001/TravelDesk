using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TravelDesk.Migrations
{
    public partial class seventh : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MobileNo",
                table: "ForexInfo");

            migrationBuilder.RenameColumn(
                name: "CountryCode",
                table: "ForexInfo",
                newName: "CardType");

            migrationBuilder.AlterColumn<DateTime>(
                name: "VisaExpiryDate",
                table: "PassportInfo",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<DateTime>(
                name: "PassportExpiryDate",
                table: "PassportInfo",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<string>(
                name: "CardNumber",
                table: "ForexInfo",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AddColumn<DateTime>(
                name: "CardExpiryDate",
                table: "ForexInfo",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CardExpiryDate",
                table: "ForexInfo");

            migrationBuilder.RenameColumn(
                name: "CardType",
                table: "ForexInfo",
                newName: "CountryCode");

            migrationBuilder.AlterColumn<DateTime>(
                name: "VisaExpiryDate",
                table: "PassportInfo",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "PassportExpiryDate",
                table: "PassportInfo",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "CardNumber",
                table: "ForexInfo",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<long>(
                name: "MobileNo",
                table: "ForexInfo",
                nullable: false,
                defaultValue: 0L);
        }
    }
}
