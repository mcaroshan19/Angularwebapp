using Angularwebapp.Server.Model.Damain;
using System.Threading.Tasks;

namespace Angularwebapp.Server.Repositories.Interface
{
    public interface IcategoryReposetory
    {

   Task<Category> CreateAsync(Category category);
    }
}
