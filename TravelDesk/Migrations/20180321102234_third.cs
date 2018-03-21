using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TravelDesk.Migrations
{
    public partial class third : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ForexInfo_RequestInfo_RequestInfoId1",
                table: "ForexInfo");

            migrationBuilder.DropForeignKey(
                name: "FK_HotelInfo_RequestInfo_RequestInfoId1",
                table: "HotelInfo");

            migrationBuilder.DropIndex(
                name: "IX_HotelInfo_RequestInfoId1",
                table: "HotelInfo");

            migrationBuilder.DropIndex(
                name: "IX_ForexInfo_RequestInfoId1",
                table: "ForexInfo");

            migrationBuilder.DropColumn(
                name: "RequestInfoId1",
                table: "HotelInfo");

            migrationBuilder.DropColumn(
                name: "RequestInfoId1",
                table: "ForexInfo");

            migrationBuilder.AlterColumn<int>(
                name: "RequestInfoId",
                table: "HotelInfo",
                nullable: false,
                oldClrType: typeof(long));

            migrationBuilder.AlterColumn<int>(
                name: "RequestInfoId",
                table: "ForexInfo",
                nullable: false,
                oldClrType: typeof(long));

            migrationBuilder.CreateIndex(
                name: "IX_HotelInfo_RequestInfoId",
                table: "HotelInfo",
                column: "RequestInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_ForexInfo_RequestInfoId",
                table: "ForexInfo",
                column: "RequestInfoId");

            migrationBuilder.AddForeignKey(
                name: "FK_ForexInfo_RequestInfo_RequestInfoId",
                table: "ForexInfo",
                column: "RequestInfoId",
                principalTable: "RequestInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_HotelInfo_RequestInfo_RequestInfoId",
                table: "HotelInfo",
                column: "RequestInfoId",
                principalTable: "RequestInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ForexInfo_RequestInfo_RequestInfoId",
                table: "ForexInfo");

            migrationBuilder.DropForeignKey(
                name: "FK_HotelInfo_RequestInfo_RequestInfoId",
                table: "HotelInfo");

            migrationBuilder.DropIndex(
                name: "IX_HotelInfo_RequestInfoId",
                table: "HotelInfo");

            migrationBuilder.DropIndex(
                name: "IX_ForexInfo_RequestInfoId",
                table: "ForexInfo");

            migrationBuilder.AlterColumn<long>(
                name: "RequestInfoId",
                table: "HotelInfo",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "RequestInfoId1",
                table: "HotelInfo",
                nullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "RequestInfoId",
                table: "ForexInfo",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "RequestInfoId1",
                table: "ForexInfo",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_HotelInfo_RequestInfoId1",
                table: "HotelInfo",
                column: "RequestInfoId1");

            migrationBuilder.CreateIndex(
                name: "IX_ForexInfo_RequestInfoId1",
                table: "ForexInfo",
                column: "RequestInfoId1");

            migrationBuilder.AddForeignKey(
                name: "FK_ForexInfo_RequestInfo_RequestInfoId1",
                table: "ForexInfo",
                column: "RequestInfoId1",
                principalTable: "RequestInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_HotelInfo_RequestInfo_RequestInfoId1",
                table: "HotelInfo",
                column: "RequestInfoId1",
                principalTable: "RequestInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
