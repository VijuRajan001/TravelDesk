using AutoMapper;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelDesk.Models;
using TravelDesk.ViewModels;

namespace TravelDesk.Mappings
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<RequestInfo, RequestItem>()
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
                .ReverseMap();

            CreateMap<FlightInfo, FlightItem>()
                .ForMember(dest => dest.Id,
                            opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.FlightFrom,
                            opt => opt.MapFrom(src => src.FlightFrom))
                .ForMember(dest => dest.FlightName,
                            opt => opt.MapFrom(src => src.FlightName))
                .ForMember(dest => dest.FlightTo,
                            opt => opt.MapFrom(src => src.FlightTo))
                .ForMember(dest => dest.FlightCost,
                            opt => opt.MapFrom(src => src.FlightCost))
                .ForMember(dest => dest.RequestInfoId,
                            opt => opt.MapFrom(src => src.RequestInfoId))
                .ForMember(dest => dest.FlightDirection,
                            opt => opt.MapFrom(src => src.FlightDirection))

                .ReverseMap();
        }
    }
}
