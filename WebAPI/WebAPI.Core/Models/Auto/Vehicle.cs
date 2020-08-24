using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using WebAPI.Core.Models.Authentication;

namespace WebAPI.Core.Models.Auto
{
    [Table("Vehicles", Schema = "auto")]
    public class Vehicle
    {
        public int Id { get; set; }
        public string RegistrationNumber { get; set; }
        public string VIN { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public VehicleType Type { get; set; }
        public FuelType Fuel { get; set; }
        public string Color { get; set; }
        public bool IsFavorite { get; set; }
        public DateTime Added { get; set; }
        [JsonIgnore]
        public User User { get; set; }
    }
}