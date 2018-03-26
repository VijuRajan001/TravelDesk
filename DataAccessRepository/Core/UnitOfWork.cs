using DataAccessRepository.Base;
using DataAccessRepository.Implementation;
using DataAccessRepository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Core
{
    public class UnitOfWork:IUnitOfWork
    {
        private readonly TravDeskDbcontext _context;
        private IRequestRepository _requestRepository;
        private IFlightRepository _flightRepository;
        private IHotelRepository _hotelRepository;
        private IPassportRepository _passportRepository;
        public UnitOfWork(TravDeskDbcontext context)
        {
            _context = context;
            
        }

        public IRequestRepository RequestRepository
        {
            get
            {
                return _requestRepository = _requestRepository ?? new RequestRepository(_context);
            }
        }

        public IFlightRepository FlightRepository
        {
            get
            {
                return _flightRepository = _flightRepository ?? new FlightRepository(_context);
            }

        }


        public IHotelRepository HotelRepository
        {
            get
            {
                return _hotelRepository = _hotelRepository ?? new HotelRepository(_context);
            }

        }

        public IPassportRepository PassportRepository
        {
            get
            {
                return _passportRepository = _passportRepository ?? new PassportRepository(_context);
            }

        }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();

        }
    }
}
