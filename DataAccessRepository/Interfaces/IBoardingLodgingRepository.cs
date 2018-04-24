using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessRepository.Interfaces
{
    public interface IBoardingLodgingRepository : IRepository<BoardingLodgingInfo>
    {
        void AddBoardingLodgingOptions(List<BoardingLodgingInfo> boardingLodgingItems);
        List<BoardingLodgingInfo> GetBoardingLodgingForRequest(int id);
    }
}
