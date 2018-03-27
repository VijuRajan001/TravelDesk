using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using DataAccessRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace DataAccessRepository.Implementation
{
    public class ForexRepository : Repository<ForexInfo>, IForexRepository
    {
        
        public ForexRepository(TravDeskDbcontext context) : base(context)
        {
            

        }
        

        public TravDeskDbcontext TravDeskDbcontext
        {
            get { return Context as TravDeskDbcontext; }
        }

       

        public ForexInfo GetPassportDetails(int requestId)
        {
            ForexInfo info = new ForexInfo();
            info= TravDeskDbcontext.ForexInfo.SingleOrDefault(f => f.RequestInfoId == requestId);
            return info;
        }
    }
}
