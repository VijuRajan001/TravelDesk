using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using DataAccessRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccessRepository.Implementation
{
    public class FareRepository: Repository<FareInfo>,IFareRepository
    {

        public FareRepository(TravDeskDbcontext context) : base(context)
        {


        }
      
        

        public void AddFare(List<FareInfo> fareItems)
        {
            TravDeskDbcontext.FareInfo.AddRange(fareItems);
        }

        List<HotelInfo> IFareRepository.GetFareForRequest(int id)
        {
            List<FareInfo> FareInfo = new List<FareInfo>();
            FareInfo = TravDeskDbcontext.FareInfo.Where(f => f.RequestInfoId == id).ToList();

            return FareInfo;
        }

        public TravDeskDbcontext TravDeskDbcontext
        {
            get { return Context as TravDeskDbcontext; }
        }
    }
}
