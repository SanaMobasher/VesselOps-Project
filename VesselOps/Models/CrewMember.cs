using System.ComponentModel.DataAnnotations;

namespace VesselOps.Models
{
    public class CrewMember
    {
        [Key] // This marks "Id" as the Primary Key
        public int Id { get; set; }

        public string FullName { get; set; } = string.Empty;
        public string Rank { get; set; } = string.Empty;
        public string Nationality { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;

        public DateTime DateOfBirth { get; set; }

        // Experience
        public decimal TotalExperienceYears { get; set; }
        public decimal RankExperienceYears { get; set; }
        public decimal VesselExperienceYears { get; set; }

        public DateTime LastUpdated { get; set; } = DateTime.Now;
    }
}