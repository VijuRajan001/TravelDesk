using DataAccessRepository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IRequestRepository RequestRepository { get; }
        IFlightRepository FlightRepository { get; }
        IHotelRepository HotelRepository { get; }
        IPassportRepository PassportRepository { get; }
        int Complete();
    }
}
