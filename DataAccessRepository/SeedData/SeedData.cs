using DataAccessRepository.Base;
using DataAccessRepository.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace DataAccessRepository.SeedData
{
    public class SeedData
    {

        public static void SeedUsers(UserManager<AppUser> userManager)
        {
            if (userManager.FindByNameAsync("user1").Result == null)
            {
                AppUser user = new AppUser();
                user.UserName = "user1";
                user.Email = "user1@localhost";
                

                IdentityResult result = userManager.CreateAsync(user, "password1").Result;

                
            }


            if (userManager.FindByNameAsync("user2").Result == null)
            {
                AppUser user = new AppUser();
                user.UserName = "user2";
                user.Email = "user2@localhost";
                

                IdentityResult result = userManager.CreateAsync(user, "password2").Result;
                
            }
        }

        
    }
}
