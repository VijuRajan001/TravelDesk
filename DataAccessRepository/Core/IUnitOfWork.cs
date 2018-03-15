using DataAccessRepository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IRequestRepository RequestRepository { get; }
        int Complete();
    }
}
