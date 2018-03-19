using AutoMapper;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelDesk.ViewModels;

namespace TravelDesk.Mappings
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<RequestInfo, TravelDataViewModel>()
                .ForMember(dest => dest.RequestId,
                            opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Project_Code,
                            opt => opt.MapFrom(src=> src.ProjectId))
                .ForMember(dest => dest.Country,
                            opt => opt.MapFrom(src => src.TravelCountry))
                .ForMember(dest => dest.TravelDate,
                            opt => opt.MapFrom(src => src.TravelStart))
                .ForMember(dest => dest.ReturnDate,
                            opt => opt.MapFrom(src => src.TravelReturn))
                .ForMember(dest => dest.EmployeeId,
                            opt => opt.MapFrom(src => src.EmployeeId))
                .ForMember(dest => dest.EmployeeName,
                            opt => opt.MapFrom(src => src.EmployeeName))
                .ReverseMap(); ;
        }
    }
}
