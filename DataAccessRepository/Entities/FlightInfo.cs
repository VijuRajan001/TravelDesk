using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class FlightInfo
    {
        public long FlightNo { get; set; }
        public string FlightName { get; set; }
        public string To { get; set; }
        public string From { get; set; }
        public double Price { get; set; }

        public int RequestId { get; set; }
        public RequestInfo RequestInfo { get; set; }
    }
}
