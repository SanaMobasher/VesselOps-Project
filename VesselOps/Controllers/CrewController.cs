using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VesselOps.Models;

namespace VesselOps.Controllers
{
    [Route("api/[controller]")] // This means the URL will be "api/crew"
    [ApiController]
    public class CrewController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CrewController(AppDbContext context)
        {
            _context = context;
        }

        // 1. GET: api/crew (Get all crew members)
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CrewMember>>> GetCrewMembers()
        {
            return await _context.CrewMembers.ToListAsync();
        }

        // 2. GET: api/crew/5 (Get a specific person by ID)
        [HttpGet("{id}")]
        public async Task<ActionResult<CrewMember>> GetCrewMember(int id)
        {
            var crewMember = await _context.CrewMembers.FindAsync(id);

            if (crewMember == null)
            {
                return NotFound();
            }

            return crewMember;
        }

        // 3. POST: api/crew (Add a new person)
        [HttpPost]
        public async Task<ActionResult<CrewMember>> PostCrewMember(CrewMember crewMember)
        {
            _context.CrewMembers.Add(crewMember);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCrewMember", new { id = crewMember.Id }, crewMember);
        }

        // 4. PUT: api/crew/5 (Update a person)
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCrewMember(int id, CrewMember crewMember)
        {
            if (id != crewMember.Id)
            {
                return BadRequest();
            }

            _context.Entry(crewMember).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.CrewMembers.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // 5. DELETE: api/crew/5 (Remove a person)
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCrewMember(int id)
        {
            var crewMember = await _context.CrewMembers.FindAsync(id);
            if (crewMember == null)
            {
                return NotFound();
            }

            _context.CrewMembers.Remove(crewMember);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}