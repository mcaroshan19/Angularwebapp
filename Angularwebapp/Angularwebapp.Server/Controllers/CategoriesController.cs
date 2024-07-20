using Angularwebapp.Server.Data;
using Angularwebapp.Server.Model.Damain;

using Angularwebapp.Server.Model.DTO;
using Angularwebapp.Server.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Angularwebapp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IcategoryReposetory categoryRepository;

        public CategoriesController(IcategoryReposetory CategoryRepository)
        {
            categoryRepository = CategoryRepository;
        }   
        //https://localhost:7169/api/Categories

        [HttpPost]
        public async Task<IActionResult> CreateCategory(CreateCategoryRequest request)
        {
            try
            {
               
                    var category = new Category
                {
                       
                        Name = request.Name,
                    UrlHandle = request.UrlHandle
                };

                await categoryRepository.CreateAsync(category);

               

                var response = new CategoryDto
                {
                    Id = category.Id,    
                    Name = category.Name,
                    UrlHandle = category.UrlHandle
                };

                return Ok(response);
            }

            catch (Exception ex)
            {
                // Log the exception details
                Console.WriteLine($"Error creating category: {ex.Message}");
                Console.WriteLine(ex.StackTrace);

                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while creating the category." });
            }
        }
    }
}
