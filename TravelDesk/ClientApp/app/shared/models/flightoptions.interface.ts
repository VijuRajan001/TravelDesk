import { FlightItem} from './flightitem.interface';

export class FlightOptions {

    constructor(flightOPtions: IFlightOptions = {

        OnwardFlightItems: new Array<FlightItem>(),
        ReturnFlightItems: new Array<FlightItem>()

    }) {

        this.OnwardFlightItems = flightOPtions.OnwardFlightItems;
        this.ReturnFlightItems = flightOPtions.ReturnFlightItems;

    }
    public OnwardFlightItems: FlightItem[];
    public ReturnFlightItems: FlightItem[];
}


export interface IFlightOptions {
    OnwardFlightItems: FlightItem[], 
    ReturnFlightItems: FlightItem[]
}