import { RequestData } from './requestdata.interface';
import { FlightOptions} from './flightoptions.interface';

export class TravelData {

    constructor(travelData: ITravelData = {

        requestData: new RequestData(),
        flightData: new FlightOptions()
    }) {

        this.requestData = travelData.requestData;
        this.flightData = travelData.flightData;

    }
    public requestData: RequestData;
    public flightData: FlightOptions;

}

export interface ITravelData {
    requestData: RequestData;
    flightData: FlightOptions;

}