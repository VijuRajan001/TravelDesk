

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
    public class RequestController : Controller
    {
        private IUnitOfWork _unitofWork;
        private readonly IMapper _mapper;
        public RequestController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _mapper = mapper;
            _unitofWork = unitOfWork;
        }

        [HttpPost("AddRequest")]
        public void AddRequest([FromBody]TravelDataViewModel travelData)
        {

            RequestInfo newRequest = new RequestInfo();
            newRequest=_mapper.Map<TravelDataViewModel, RequestInfo>(travelData);
            newRequest.ProjectId = travelData.Project_Code;
            newRequest.TravelCountry = travelData.Country;
            newRequest.TravelStart = travelData.TravelDate;
            newRequest.TravelReturn = travelData.ReturnDate;
            _unitofWork.RequestRepository.Add(newRequest);
            int i = _unitofWork.Complete();

        }

        [HttpGet("GetRequestList")]
        public List<TravelDataViewModel> GetRequestList()
        {

            List<TravelDataViewModel> travelDataList = _mapper.Map<List<RequestInfo>, List<TravelDataViewModel>>(_unitofWork.RequestRepository.GetAll().ToList());
            return travelDataList;



        }

        [HttpGet("GetRequestById")]
        public TravelDataViewModel GetRequestById(int Id)
        {
            TravelDataViewModel travelData = _mapper.Map<RequestInfo, TravelDataViewModel>(_unitofWork.RequestRepository.Get(Id));
            return travelData;
        }

        [HttpPost("UpdateRequest")]
        public void UpdateRequest([FromBody]TravelDataViewModel travelData)
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
