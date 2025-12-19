using Microsoft.EntityFrameworkCore;
using VesselOps.Models;

namespace VesselOps
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // This creates a table named "CrewMembers" in SQL Server
        public DbSet<CrewMember> CrewMembers { get; set; }
    }
}