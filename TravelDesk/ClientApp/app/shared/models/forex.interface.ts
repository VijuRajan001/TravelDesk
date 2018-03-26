
export class Forex {
    constructor(forex: IForex = {
        cardNum:0,
        cardType:'',
        cardExpiry:'',
        requestInfoId: 0,
    }) {

        this.cardNum = forex.cardNum;
        this.cardType = forex.cardType;
        this.cardExpiry = forex.cardExpiry;
        this.requestInfoId = forex.requestInfoId;


    }
    public cardNum: number
    public cardType: string;
    public cardExpiry: string;
    public requestInfoId: number;
}




export interface IForex {
    cardNum: number
    cardType: string;
    cardExpiry: string;
    requestInfoId: number;
}
    
    
}