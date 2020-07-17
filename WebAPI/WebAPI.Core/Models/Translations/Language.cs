using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Core.Models.Translations
{
    [Table("Languages", Schema = "translation")]
    public class Language
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Key { get; set; }
    }
}