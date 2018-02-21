import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './shared/services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private user: UserService, private router: Router) { }

    canActivate() {

        if (!this.user.isLoggedIn()) {
            this.router.navigate(['./components/account/login']);
            return false;
        }
        console.log("Inside Auth Guard");
        return true;
    }
}