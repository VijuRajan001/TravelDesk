using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    class HotelInfo
    {
        public string HotelName { get; set; }
        public string Location { get; set; }
        public string Amenities { get; set; }
        public string Website { get; set; }
        public string MobileNo { get; set; }
        public DateTime CheckinTime { get; set; }
        public DateTime CheckoutTime { get; set; }
        public double Price { get; set; }
    }
}
