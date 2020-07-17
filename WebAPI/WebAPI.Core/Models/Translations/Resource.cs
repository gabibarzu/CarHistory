using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Core.Models.Translations
{
    [Table("Resources", Schema = "translation")]
    public class Resource
    {
        [Key]
        public string Key { get; set; }
        public int AreaId { get; set; }
    }
}