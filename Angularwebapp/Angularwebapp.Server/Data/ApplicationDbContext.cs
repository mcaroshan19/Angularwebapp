using Angularwebapp.Server.Model.Damain;
using Microsoft.EntityFrameworkCore;

namespace Angularwebapp.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }
        public  DbSet<Blogpost> Blogposts { get; set; }
         public DbSet<Category> Categories { get; set; }

       
    }
}
