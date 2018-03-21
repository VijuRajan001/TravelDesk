using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class PassportInfo
    {
        public int Id { get; set; }
        public long PassportNumber { get; set; }
        public long VisaNumber { get; set; }
        public DateTime VisaExpiryDate { get; set; }
        public DateTime PassportExpiryDate { get; set; }

        
        public virtual RequestInfo RequestInfo { get; set; }
    }
}
