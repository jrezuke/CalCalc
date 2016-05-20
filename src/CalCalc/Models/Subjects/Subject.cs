using System.ComponentModel.DataAnnotations;

namespace CalorieCalculator.Models.Subjects
{
    public class Subject
    {
        public Subject()
        {

        }
        public int Id { get; set; }
        [MaxLength(10)]
        public string SubjectId { get; set; }
        public int SiteId { get; set; }
    }
}
