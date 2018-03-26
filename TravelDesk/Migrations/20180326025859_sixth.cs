using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TravelDesk.Migrations
{
    public partial class sixth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RequestInfo_PassportInfo_PassportInfoId",
                table: "RequestInfo");

            migrationBuilder.DropIndex(
                name: "IX_RequestInfo_PassportInfoId",
                table: "RequestInfo");

            migrationBuilder.DropColumn(
                name: "PassportInfoId",
                table: "RequestInfo");

            migrationBuilder.AlterColumn<string>(
                name: "VisaNumber",
                table: "PassportInfo",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AlterColumn<string>(
                name: "PassportNumber",
                table: "PassportInfo",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AddColumn<int>(
                name: "RequestInfoId",
                table: "PassportInfo",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_PassportInfo_RequestInfoId",
                table: "PassportInfo",
                column: "RequestInfoId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_PassportInfo_RequestInfo_RequestInfoId",
                table: "PassportInfo",
                column: "RequestInfoId",
                principalTable: "RequestInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PassportInfo_RequestInfo_RequestInfoId",
                table: "PassportInfo");

            migrationBuilder.DropIndex(
                name: "IX_PassportInfo_RequestInfoId",
                table: "PassportInfo");

            migrationBuilder.DropColumn(
                name: "RequestInfoId",
                table: "PassportInfo");

            migrationBuilder.AddColumn<int>(
                name: "PassportInfoId",
                table: "RequestInfo",
                nullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "VisaNumber",
                table: "PassportInfo",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "PassportNumber",
                table: "PassportInfo",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_RequestInfo_PassportInfoId",
                table: "RequestInfo",
                column: "PassportInfoId",
                unique: true,
                filter: "[PassportInfoId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_RequestInfo_PassportInfo_PassportInfoId",
                table: "RequestInfo",
                column: "PassportInfoId",
                principalTable: "PassportInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
