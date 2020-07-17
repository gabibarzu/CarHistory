using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebAPI.Core.Models.Authentication;
using WebAPI.Core.Models.Translations;

namespace WebAPI.Infrastructure.DataAccess
{
    public class AppDbContext : IdentityDbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        public DbSet<Area> Areas { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<Resource> Resources { get; set; }
        public DbSet<Translation> Translations { get; set; }

    }
}