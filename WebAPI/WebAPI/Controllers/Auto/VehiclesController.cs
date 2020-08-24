using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Core.Models.Authentication;
using WebAPI.Core.Models.Auto;
using WebAPI.Core.Models.Auto.ToWeb;
using WebAPI.Infrastructure.DataAccess;

namespace WebAPI.Web.Controllers.Auto
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private readonly DatabaseContext _context;
        private readonly UserManager<User> _userManager;

        public VehiclesController(DatabaseContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: api/Vehicles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vehicle>>> GetVehicles()
        {
            var user = await this.GetLoggedInUserAsync();
            return await _context.Vehicles.Where(vehicle => vehicle.User == user).ToListAsync();
        }

        // GET: api/Vehicles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vehicle>> GetVehicle(Guid id)
        {
            var user = await this.GetLoggedInUserAsync();
            var vehicle = await _context.Vehicles.FindAsync(id);

            if (vehicle == null || vehicle.User != user)
            {
                return NotFound();
            }

            return vehicle;
        }

        // PUT: api/Vehicles/5
        // To protect from over posting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicle(int id, Vehicle vehicle)
        {
            var user = await this.GetLoggedInUserAsync();
            if (id != vehicle.Id || vehicle.User != user)
            {
                return BadRequest();
            }

            _context.Entry(vehicle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleExists(id))
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

        // POST: api/Vehicles
        // To protect from over posting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Vehicle>> PostVehicle([FromBody] Vehicle vehicle)
        {
            vehicle.User = await this.GetLoggedInUserAsync();
            vehicle.Added = DateTime.Now;

            await _context.Vehicles.AddAsync(vehicle);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVehicle", new { id = vehicle.Id }, vehicle);
        }

        // DELETE: api/Vehicles/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Vehicle>> DeleteVehicle(Guid id)
        {
            var user = await this.GetLoggedInUserAsync();
            var vehicle = await _context.Vehicles.FindAsync(id);

            if (vehicle == null || vehicle.User != user)
            {
                return NotFound();
            }

            _context.Vehicles.Remove(vehicle);
            await _context.SaveChangesAsync();

            return vehicle;
        }

        // GET: api/Vehicles/GetPreviewVehicles
        [HttpGet]
        [Route("GetPreviewVehicles")]
        public async Task<ActionResult<PreviewVehicle>> GetPreviewVehicles()
        {
            var user = await this.GetLoggedInUserAsync();
            var result = new PreviewVehicle();
            var vehiclesDb = await _context.Vehicles.Where(vehicle => vehicle.User == user).ToListAsync();
            var vehicles = vehiclesDb.OrderByDescending(vehicle => vehicle.IsFavorite)
                .ThenByDescending(vehicle => vehicle.Added).ToList();
            if (vehicles.Count > 2)
            {
                result.HasGarage = true;
                result.Vehicles = vehicles.Take(2).ToList();
                result.VehiclesInGarage = vehicles.Count - 2;
            }
            else
            {
                result.HasGarage = false;
                result.Vehicles = vehicles;
                result.VehiclesInGarage = 0;
            }
            return result;
        }
        private bool VehicleExists(int id)
        {
            return _context.Vehicles.Any(e => e.Id == id);
        }

        private async Task<User> GetLoggedInUserAsync()
        {
            var userId = User.Claims.First(c => c.Type == "UserID").Value;
            return await _userManager.FindByIdAsync(userId);
        }
    }
}
