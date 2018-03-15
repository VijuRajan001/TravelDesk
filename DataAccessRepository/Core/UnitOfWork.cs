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
