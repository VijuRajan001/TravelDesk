
export class ReimbursementData {

    constructor(request: IReimbursementData = {
        requestId: 0,
        project_Code: "",
        country: "",
        travelDate: "",
        returnDate: "",
        employeeName: "",
        employeeId: "",
        travelDob:""
    }) {

        this.requestId = request.requestId;
        this.project_code = request.project_Code;
        this.requestId = request.requestId;
        this.country = request.country;
        this.travelDate = request.travelDate;
        this.returnDate = request.returnDate;
        this.employeeName = request.employeeName;
        this.employeeId = request.employeeId;
        this.travelDob = request.travelDob;

    }
    public requestId: number;
    public project_code: string;
    public country: string;
    public travelDate: string;
    public returnDate: string;
    public employeeName: string;
    public employeeId: string;
    public travelDob: string;
}


export interface IReimbursementData {
    requestId: number;
    project_Code: string;
    country: string;
    travelDate: string;
    returnDate: string;
    employeeName: string;
    employeeId: string;
    travelDob: string;
}
