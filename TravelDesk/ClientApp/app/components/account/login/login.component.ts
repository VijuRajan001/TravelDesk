import { Subscription } from 'rxjs/Rx';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Credentials } from '../../../shared/models/credentials.interface';
import { UserService } from '../../../shared/services/user.service';
import { FormControl, Validators,FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { NgZone } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    

})
export class LoginComponent implements OnInit, OnDestroy {

    email = new FormControl('', [Validators.required, Validators.email]);

  private subscription : any ;
  brandNew: boolean = false;
  errors: string = '';
  isRequesting: boolean = false ;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: '' };
   
  constructor(private userService: UserService, private router: Router,
      private activatedRoute: ActivatedRoute, private zone: NgZone) {
  
  }

    ngOnInit() {

    // subscribe to router event
        console.log(this.router.isActive);
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
         this.brandNew = param['brandNew'];   
         this.credentials.email = param['email'];         
      });      
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if (valid) {
      this.userService.login(value.email, value.password)
        .finally(() => this.isRequesting = false)
        .subscribe(
        result => {         
          if (result) {
              this.zone.run(() => this.router.navigateByUrl('/dashboard/home'));  

              
          }
        },
        error => this.errors = error);
    }
  }    


    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
}
