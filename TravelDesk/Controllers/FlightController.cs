

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DataAccessRepository.Core;
using DataAccessRepository.Entities;
using Microsoft.AspNetCore.Mvc;
using TravelDesk.ViewModels;

namespace TravelDesk.Controllers
{
    [Route("api/[controller]")]
    public class FlightController : Controller
    {
        private IUnitOfWork _unitofWork;
        private readonly IMapper _mapper;
        public FlightController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _mapper = mapper;
            _unitofWork = unitOfWork;
        }

        [HttpPost("AddFlights")]
        public void AddFlights([FromBody]FlightOptionsViewModel travelData)
        {

            

        }

        //[HttpGet("GetFlights")]
        //public List<TravelDataViewModel> GetRequestList()
        //{

        //    List<TravelDataViewModel> travelDataList = _mapper.Map<List<RequestInfo>, List<TravelDataViewModel>>(_unitofWork.RequestRepository.GetAll().ToList());
        //    return travelDataList;



        //}
         

        [HttpPost("UpdateFlights")]
        public void UpdateFlights([FromBody]TravelDataViewModel travelData)
        {
            RequestInfo newRequest = _unitofWork.RequestRepository.Get(travelData.RequestId);
            newRequest.ProjectId = travelData.Project_Code;
            newRequest.TravelCountry = travelData.Country;
            newRequest.TravelStart = travelData.TravelDate;
            newRequest.TravelReturn = travelData.ReturnDate;
            
            int i = _unitofWork.Complete();
            
            
        }

    }
}
