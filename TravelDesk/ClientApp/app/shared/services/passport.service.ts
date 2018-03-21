import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import {HttpClient,HttpParams} from '@angular/common/http';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { PassportOptions} from '../models/passportoptions.interface';

//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class PassportService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient , private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  addPassportInfo(passportdata: PassportOptions): Observable<any> {
      return this.http.post(this.baseUrl + 'api/Passport/AddPassport',
          JSON.stringify(passportdata));
  }



  updatePassportInfo(passportdata: PassportOptions): Observable<any> {

      return this.http.post(this.baseUrl + 'api/Passport/UpdatePassport', 
          JSON.stringify(passportdata));
    }
}
