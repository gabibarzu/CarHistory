using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Core.Models.Translations
{
    [Table("Translations", Schema = "translation")]
    public class Translation
    {
        public Guid Id { get; set; }
        public int LanguageId { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
    }
}