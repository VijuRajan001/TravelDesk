import { RequestData } from './requestdata.interface';
import { FlightOptions} from './flightoptions.interface';
import { HotelOptions } from './hoteloptions.interface';
import { Passport } from './passport.interface';

export class TravelData {

    constructor(travelData: ITravelData = {

        requestData: new RequestData(),
        flightData: new FlightOptions(),
        hotelData: new HotelOptions(),
        passportData:new Passport(),
    }) {

        this.requestData = travelData.requestData;
        this.flightData = travelData.flightData;
        this.hotelData = travelData.hotelData;
        this.passportData = travelData.passportData;

    }
    public requestData: RequestData;
    public flightData: FlightOptions;
    public hotelData: HotelOptions;
    public passportData: Passport;
}

export interface ITravelData {
    requestData: RequestData;
    flightData: FlightOptions;
    hotelData: HotelOptions;
    passportData: Passport;

}