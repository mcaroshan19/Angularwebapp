using Angularwebapp.Server.Data;
using Angularwebapp.Server.Model.Damain;
using Angularwebapp.Server.Repositories.Interface;
using System.Threading.Tasks;

namespace Angularwebapp.Server.Repositories.Implementation
{
    public class CategoryRepository : IcategoryReposetory

    {
        private readonly ApplicationDbContext dbContext;

        public CategoryRepository(ApplicationDbContext dbContext) {
            this.dbContext = dbContext;
        }
        public  async Task<Category> CreateAsync(Category category)
        {
            await dbContext.Categories.AddAsync(category);
            await dbContext.SaveChangesAsync();

            return category;
        }
    }
}
