using CalorieCalculator.Models.Sites;
using System.ComponentModel.DataAnnotations;

namespace CalorieCalculator.Models.Subjects
{
    public partial class Subject
    {
        public Subject()
        {

        }
        public int Id { get; set; }
        [MaxLength(10)]
        public string SubjectId { get; set; }
        public int SiteId { get; set; }
        public virtual Site Site { get; set; }
    }
}
