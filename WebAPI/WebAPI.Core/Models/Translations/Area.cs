using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Core.Models.Translations
{
    [Table("Areas", Schema = "translation")]
    public class Area
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Key { get; set; }
    }
}