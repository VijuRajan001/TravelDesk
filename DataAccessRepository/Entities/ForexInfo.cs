using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class ForexInfo
    {
        public int Id { get; set; }
        public long CardNumber { get; set; }
        public string CountryCode { get; set; }
        public long MobileNo { get; set; }
        public int RequestInfoId { get; set; }
        public RequestInfo RequestInfo { get; set; }
    }
}
