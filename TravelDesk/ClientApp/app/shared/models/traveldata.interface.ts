import { RequestData } from './requestdata.interface';
import { FlightOptions} from './flightoptions.interface';
import { HotelOptions } from './hoteloptions.interface';
import { Passport } from './passport.interface';
import { Forex } from './forex.interface';

export class TravelData {

    constructor(travelData: ITravelData = {

        requestData: new RequestData(),
        flightData: new FlightOptions(),
        hotelData: new HotelOptions(),
        passportData: new Passport(),
        forexData: new Forex();
    }) {

        this.requestData = travelData.requestData;
        this.flightData = travelData.flightData;
        this.hotelData = travelData.hotelData;
        this.passportData = travelData.passportData;
        this.forexData = travelData.forexData;
    }
    public requestData: RequestData;
    public flightData: FlightOptions;
    public hotelData: HotelOptions;
    public passportData: Passport;
    public forexData: Forex;
}

export interface ITravelData {
    requestData: RequestData;
    flightData: FlightOptions;
    hotelData: HotelOptions;
    passportData: Passport;
    forexData: Forex;

}