import { Injectable } from '@angular/core';

import { AppHttpService } from '../services/http.service';
import { ConfigService } from '../utils/config.service';
import { AuthService } from '../services/auth.service';
import {HttpClient,HttpParams} from '@angular/common/http';
import {BaseService} from "./base.service";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { HotelOptions} from '../models/hoteloptions.interface';

//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class HotelService extends BaseService {

  baseUrl: string = '';
  private loggedIn = false;

  constructor(private http: HttpClient , private configService: ConfigService,private authService : AuthService) {
    super();
    this.baseUrl = configService.getApiURI();
  }

  addHotelInfo(hoteldata: HotelOptions): Observable<any> {
      return this.http.post(this.baseUrl + 'api/Hotel/AddHotel',
          JSON.stringify(hoteldata));
  }



  updateHotelInfo(hoteldata: HotelOptions): Observable<any> {

      return this.http.post(this.baseUrl + 'api/Hotel/UpdateHotel', 
          JSON.stringify(hoteldata));
    }
}
