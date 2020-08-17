using System.Collections.Generic;

namespace WebAPI.Core.Models.Auto.ToWeb
{
    public class PreviewVehicle
    {
        public List<Vehicle> Vehicles { get; set; }
        public bool HasGarage { get; set; }
        public int VehiclesInGarage { get; set; }
    }
}