using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Infrastructure.Migrations
{
    public partial class AddRelationMapped : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_AspNetUsers_UserId",
                schema: "auto",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_UserId",
                schema: "auto",
                table: "Vehicles");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                schema: "auto",
                table: "Vehicles",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                schema: "auto",
                table: "Vehicles",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_UserId1",
                schema: "auto",
                table: "Vehicles",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_AspNetUsers_UserId1",
                schema: "auto",
                table: "Vehicles",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_AspNetUsers_UserId1",
                schema: "auto",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_UserId1",
                schema: "auto",
                table: "Vehicles");

            migrationBuilder.DropColumn(
                name: "UserId1",
                schema: "auto",
                table: "Vehicles");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                schema: "auto",
                table: "Vehicles",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_UserId",
                schema: "auto",
                table: "Vehicles",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_AspNetUsers_UserId",
                schema: "auto",
                table: "Vehicles",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
