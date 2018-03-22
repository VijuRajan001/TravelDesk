export class FlightItem {

    constructor(flightItem: IFlightItem = {
        flightItemId: 0,
        flightName:"",
        flightStart: "",
        flightEnd: "",
        requestInfoId: 0
    })
    {
     this.flightItemId = flightItem.flightItemId;
     this.flightName = flightItem.flightName;
     this.flightStart = flightItem.flightStart;
     this.flightEnd = flightItem.flightEnd;
     this.requestInfoId = flightItem.requestInfoId;
    }
    public flightItemId: number;
    public flightName: string;  
    public flightStart: string;
    public flightEnd: string;
    public requestInfoId: number;
}

export interface IFlightItem {
    flightItemId: number;
<<<<<<< HEAD
    flightName: string;
    flightStart: string;
    flightEnd: string;
=======
    flightName: string;  
    flightFrom: string;
    flightTo: string;
>>>>>>> 84b90c9665da549d1343bc690df3fef881213633
    requestInfoId: number;
}