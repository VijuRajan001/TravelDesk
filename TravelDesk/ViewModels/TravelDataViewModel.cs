using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelDesk.ViewModels
{
    public class TravelDataViewModel
    {
        public int RequestId { get; set; }
        public string Project_Code { get; set; }
        public string Country { get; set; }
        public DateTime TravelDate { get; set; }
        public DateTime ReturnDate { get; set; }
    }
}
