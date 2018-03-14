import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';

import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { TravelData} from '../models/traveldata.interface';

//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class RequestService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient, private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  addRequest(traveldata: TravelData): Observable<any> {
      return this.http.post(this.baseUrl + 'api/Request/AddRequest',
          JSON.parse(JSON.stringify(traveldata)));
  }

     
}
