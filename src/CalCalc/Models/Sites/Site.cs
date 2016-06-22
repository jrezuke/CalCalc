using CalorieCalculator.Models.Subjects;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CalorieCalculator.Models.Sites
{
    public partial class Site
    {
        public Site()
        {
            Subject = new HashSet<Subject>();
        }
        public int Id { get; set; }
        [MaxLength(50)]
        public string ShortName { get; set; }
        [MaxLength(200)]
        public string LongName { get; set; }
        public virtual ICollection<Subject> Subject { get; set; }
    }
}
