export class FlightItem {

    constructor(flightItem: IFlightItem = {
        flightItemId: 0,
        flightName:"",
        flightFrom: "",
        flightTo: "",
        requestInfoId: 0
    })
    {
     this.flightItemId = flightItem.flightItemId;
     this.flightName = flightItem.flightName;
        this.flightFrom = flightItem.flightFrom;
        this.flightTo = flightItem.flightTo;
     this.requestInfoId = flightItem.requestInfoId;
    }
    public flightItemId: number;
    public flightName: string;  
    public flightFrom: string;
    public flightTo: string;
    public requestInfoId: number;
}

export interface IFlightItem {
    flightItemId: number;
    flightName: string;
    flightFrom: string;
    flightTo: string;
    requestInfoId: number;
}