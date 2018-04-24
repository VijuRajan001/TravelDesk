using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class PerDiemInfo
    {
        public DateTime arrivalDate { get; set;}
        public DateTime departureDate { get; set; }
        public string currency { get; set; }
        public int eligibility { get; set; }
        public int totalDays { get; set; }
        public double totalAmount { get; set; }
        public string remarks { get; set; }
        public double Total { get; set; }
        public int ReimbursementInfoId { get; set; }
        public ReimbursementInfo ReimbursementInfo { get; set; }
    }
}
