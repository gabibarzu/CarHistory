using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
using WebAPI.Core.Models.Auto;

namespace WebAPI.Core.Models.Authentication
{
    public class User : IdentityUser
    {
        [Column(TypeName = "nvarchar(150)")]
        public string FullName { get; set; }
        public List<Vehicle> Vehicles { get; set; }
    }
}
