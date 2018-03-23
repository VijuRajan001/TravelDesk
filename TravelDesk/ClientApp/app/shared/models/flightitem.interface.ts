export class FlightItem {

    constructor(flightItem: IFlightItem = {
        flightItemId: 0,
        flightName:"",
        flightFrom: "",
        flightTo: "",
        requestInfoId: 0,
        flightDirection: ""
    })
    {
     this.flightItemId = flightItem.flightItemId;
     this.flightName = flightItem.flightName;
        this.flightFrom = flightItem.flightFrom;
        this.flightTo = flightItem.flightTo;
        this.requestInfoId = flightItem.requestInfoId;
        this.flightDirection = flightItem.flightDirection;
    }
    public flightItemId: number;
    public flightName: string;  
    public flightFrom: string;
    public flightTo: string;
    public requestInfoId: number;
    public flightDirection: string;
}

export interface IFlightItem {
    flightItemId: number;
    flightName: string;
    flightFrom: string;
    flightTo: string;
    requestInfoId: number;
    flightDirection: string;
}