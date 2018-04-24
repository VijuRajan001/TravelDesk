using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelDesk.Models
{
    public class PerDiemItem
    {
        public DateTime arrivalDate { get; set; }
        public DateTime departureDate { get; set; }
        public string currency { get; set; }
        public int eligibility { get; set; }
        public int totalDays { get; set; }
        public double totalAmount { get; set; }
        public string remarks { get; set; }
        public int ReimbursementInfoId { get; set; }
        
    }
}
