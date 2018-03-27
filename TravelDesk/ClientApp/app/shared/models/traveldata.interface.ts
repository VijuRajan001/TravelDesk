import { RequestData } from './requestdata.interface';
import { FlightOptions} from './flightoptions.interface';
import { HotelOptions } from './hoteloptions.interface';
import { Passport } from './passport.interface';

import { ForexCard } from './forex.interface';


export class TravelData {

    constructor(travelData: ITravelData = {

        requestData: new RequestData(),
        flightData: new FlightOptions(),
        hotelData: new HotelOptions(),
        passportData: new Passport(),
        forexCardData: new ForexCard(),
    }) {

        this.requestData = travelData.requestData;
        this.flightData = travelData.flightData;
        this.hotelData = travelData.hotelData;
        this.passportData = travelData.passportData;
        this.forexCardData = travelData.forexCardData

    }
    public requestData: RequestData;
    public flightData: FlightOptions;
    public hotelData: HotelOptions;
    public passportData: Passport;
    public forexCardData: ForexCard

}

export interface ITravelData {
    requestData: RequestData;
    flightData: FlightOptions;
    hotelData: HotelOptions;
    passportData: Passport;
<<<<<<< HEAD
    forexCardData:ForexCard
=======
    forexData: Forex;
>>>>>>> 5a3cace786ff111e45fee3ab0ba00b39a2304180

}