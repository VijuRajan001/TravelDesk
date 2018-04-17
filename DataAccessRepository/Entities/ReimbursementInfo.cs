using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Entities
{
    public class ReimbursementInfo
    {

        public ReimbursementInfo()
        {

            FareInfo = new List<FareInfo>();
            PerdiemInfo = new List<PerdiemInfo>();
            BoardingLodgingExpenseInfo = new List<BoardingLodgingExpenseInfo>();
            LocalTravelExpenseInfo = new List<LocalTravelExpenseInfo>();
            OtherExpenseInfo = new List<OtherExpenseInfo>();
            TravelExpenseUnsupportedbyVoucherInfo = new List<TravelExpenseUnsupportedbyVoucherInfo>();
            TravelExpensebyVoucherInfo = new List<TravelExpensebyVoucherInfo>();
        }
        public string EmployeeName { get; set; }
        public string EmployeeId { get; set; }
        public string Designation { get; set; }
        public string BandWorkLevel { get; set; }
        public string ClientName { get; set; }
        public string ProjectCode { get; set; }
        public string CostCenter { get; set; }
        public string PurposeofTravel { get; set; }
        public string LocationofTravel { get; set; }
        public DateTime DateofArrival { get; set; }
        public DateTime DateofDeparture { get; set; }
        public Boolean TravelBillabletoCustomer { get; set; }
        public Boolean FlightChargesReimbursed { get; set; }
        public Boolean TravelExpenseReimbursed { get; set; }
        public Boolean AnyOtherExpenseReimbursed { get; set; }

        public ICollection<FareInfo> FareInfo { get; set; }
        public ICollection<PerdiemInfo> PerdiemInfo { get; set; }
        public ICollection<BoardingLodgingExpenseInfo> BoardingLodgingExpenseInfo{ get; set; }
        public ICollection<LocalTravelExpenseInfo> LocalTravelExpenseInfo { get; set; }
        public ICollection<OtherExpenseInfo> OtherExpenseInfo { get; set; }
        public ICollection<TravelExpenseUnsupportedbyVoucherInfo> TravelExpenseUnsupportedbyVoucherInfo { get; set; }
        public ICollection<TravelExpensebyVoucherInfo> TravelExpensebyVoucherInfo { get; set; }
    }
}
