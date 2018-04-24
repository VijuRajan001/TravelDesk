using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class OtherExpensesInfo
    {
        public DateTime Date { get; set;}
        public string NatureofExpense { get; set; }
        public double Currency { get; set; }
        public double AmountSpent { get; set; }
        public int Eligibility { get; set; }
        public Boolean  SupportbyVoucher{ get; set; }
        public int ReimbursementInfoId { get; set; }
        public ReimbursementInfo ReimbursementInfo { get; set; }
    }
}
