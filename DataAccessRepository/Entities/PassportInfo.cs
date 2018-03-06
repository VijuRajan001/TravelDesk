using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class PassportInfo
    {
        public long PassportNumber { get; set; }
        public long VisaNumber { get; set; }
        public DateTime VisaExpiryDate { get; set; }
        public DateTime PassportExpiryDate { get; set; }
    }
}
