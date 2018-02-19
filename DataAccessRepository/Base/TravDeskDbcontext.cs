using DataAccessRepository.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System; 

namespace DataAccessRepository.Base
{
    public class TravDeskDbcontext : IdentityDbContext
    {
        public TravDeskDbcontext(DbContextOptions options): base(options)
        {

        }

        public DbSet<Customer> customer { get; set; }
    }
}
