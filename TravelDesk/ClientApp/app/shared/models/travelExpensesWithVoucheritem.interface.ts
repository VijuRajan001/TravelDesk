export class TravelExpensesWithVoucherItem {

    constructor(travelExpensesWithVoucherItem: ITravelExpensesWithVoucherItem = {
        date: "",
        from: "",
        to: "",
        modeOfConveyance: "",
        currency: "",
        amountSpent: 0,
        remarks: "",
        reimbursementInfoId: 0,
    }) {
        this.date = travelExpensesWithVoucherItem.date;
        this.from = travelExpensesWithVoucherItem.from;
        this.to = travelExpensesWithVoucherItem.to;
        this.modeOfConveyance = travelExpensesWithVoucherItem.modeOfConveyance;
        this.currency = travelExpensesWithVoucherItem.currency;
        this.amountSpent = travelExpensesWithVoucherItem.amountSpent;
        this.remarks = travelExpensesWithVoucherItem.remarks;
        this.reimbursementInfoId = travelExpensesWithVoucherItem.reimbursementInfoId;
        
    }
    public date: string
    public from: string;
    public to: string;
    public modeOfConveyance: string;
    public currency: string;
    public amountSpent: number;
    public remarks: string;
    public reimbursementInfoId: number;
}


export interface ITravelExpensesWithVoucherItem {
    date: string
    from: string;
    to: string;
    modeOfConveyance: string;
    currency: string;
    amountSpent: number;
    remarks: string;
    reimbursementInfoId: number;
    
}