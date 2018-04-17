using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class FareInfo
    {
        public DateTime Date { get; set;}
        public string To { get; set; }
        public string From { get; set; }
        public double Currency { get; set; }
        public double AmountSpent { get; set; }
        public string Eligibility { get; set; }
        public string Remark { get; set; }
        public double Total { get; set; }
        public int ReimbursementInfoId { get; set; }
        public ReimbursementInfo ReimbursementInfo { get; set; }
    }
