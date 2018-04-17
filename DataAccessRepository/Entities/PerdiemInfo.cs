using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class PerdiemInfo
    {
        public DateTime DateofArrival { get; set;}
        public DateTime DateofDeparture { get; set; }
        public double Currency { get; set; }
        public string PerdiemEligibility { get; set; }
        public int NoOfDays { get; set; }
        public double TotalAmount { get; set; }
        public string Remarks { get; set; }
        public double Total { get; set; }
        public int ReimbursementInfoId { get; set; }
        public ReimbursementInfo ReimbursementInfo { get; set; }
    }
}
