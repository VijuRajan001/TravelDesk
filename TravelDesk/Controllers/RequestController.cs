using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TravelDesk.ViewModels;

namespace TravelDesk.Controllers
{
    [Route("api/[controller]")]
    public class RequestController : Controller
    {

        public RequestController()
        {

        }

        [HttpPost("AddRequest")]
        public void AddRequest([FromBody]TravelDataViewModel travelData)
        {
            string x = travelData.Project_Code;                        
        }



    }
}
