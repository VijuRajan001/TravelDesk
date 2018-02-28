using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    class FlightInfo
    {
        public int FlightNo { get; set; }
        public string FlightName { get; set; }
        public string To { get; set; }
        public string From { get; set; }
        public double Price { get; set; }
    }
}
