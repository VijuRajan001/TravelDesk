using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelDesk.Models;

namespace TravelDesk.ViewModels
{
    public class FlightOptionsViewModel
    {
        List<FlightItem> OnwardflightItems { get; set; }
        List<FlightItem> ReturnflightItems { get; set; }
    }
}
