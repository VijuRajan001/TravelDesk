using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class RequestInfo
    {

        public long RequestId { get; set; }
        public long ProjectId { get; set; }
        public string EmployeeName { get; set; }  
        public string EmployeeId { get; set; }
        public string ManagerId { get; set; }
        public string ManagerName { get; set; }
        public DateTime TravelStart { get; set; }
        public DateTime TravelReturn { get; set; }
        public string TravelCountry { get; set; }
        public string RequestStatus { get; set; }
        public string Approver { get; set; }

        public ICollection<FlightInfo> FlightInfo { get; set; }
        public ICollection<HotelInfo> HotelInfo { get; set; }

    }
}
