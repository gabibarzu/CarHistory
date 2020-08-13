using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Core.Models.Auto
{
    [Table("Vehicles", Schema = "auto")]
    public class Vehicle
    {
        public Guid Id { get; set; }
        public VehicleType Type { get; set; }
        public string RegistrationNumber { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string VIN { get; set; }
    }
}