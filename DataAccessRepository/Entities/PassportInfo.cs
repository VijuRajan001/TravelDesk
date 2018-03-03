using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class PassportInfo
    {
        public int PassportNumber { get; set; }
        public int VisaNumber { get; set; }
        public DateTime VisaExpiryDate { get; set; }
        public DateTime PassportExpiryDate { get; set; }
    }
}
