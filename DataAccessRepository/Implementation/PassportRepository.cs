using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using DataAccessRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace DataAccessRepository.Implementation
{
    public class PassportRepository : Repository<PassportInfo>, IPassportRepository
    {
        
        public PassportRepository(TravDeskDbcontext context) : base(context)
        {
            

        }
        

        public TravDeskDbcontext TravDeskDbcontext
        {
            get { return Context as TravDeskDbcontext; }
        }

       

        public PassportInfo GetPassportDetails(int requestId)
        {
            PassportInfo info = new PassportInfo();
            info= TravDeskDbcontext.PassportInfo.Include(f => f.RequestInfoId == requestId).FirstOrDefault();
            return info;
        }
    }
}
