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

        public DbSet<Customer> Customer { get; set; }
        public DbSet<FlightInfo> FlightInfo { get; set; }
        public DbSet<ForexInfo> ForexInfo { get; set; }
        public DbSet<HotelInfo> HotelInfo{ get; set; }
        public DbSet<PassportInfo> PassportInfo{ get; set; }
        public DbSet<RequestInfo> RequestInfo { get; set; }
    }
}
