using System.ComponentModel.DataAnnotations;

namespace CalorieCalculator.Models.Sites
{
    public class Site
    {
        public int Id { get; set; }
        [MaxLength(50)]
        public string ShortName { get; set; }
        [MaxLength(200)]
        public string LongName { get; set; }
    }
}
