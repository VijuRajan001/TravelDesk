
export class RequestData {

    constructor(request: IRequestData = {
        requestId: 0,
        project_code: "",
        country: "",
        travelDate: "",
        returnDate: "",
        employeeName: "",
        employeeId:""
    }) {

        this.requestId = request.requestId;
        this.project_code = request.project_code;
        this.requestId = request.requestId;
        this.country = request.country;
        this.travelDate = request.travelDate;
        this.returnDate = request.returnDate;
        this.employeeName = request.employeeName;
        this.employeeId = request.employeeId;


    }
    public requestId: number;
    public project_code: string;
    public country: string;
    public travelDate: string;
    public returnDate: string;
    public employeeName: string;
    public employeeId: string;
}


export interface IRequestData {
    requestId: number;
    project_code: string;
    country: string;
    travelDate: string;
    returnDate: string;
    employeeName: string;
    employeeId: string;
}
