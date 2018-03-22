import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatExpansionModule,MatTableModule } from '@angular/material';
import { Inject } from '@angular/core';
import { TravelData } from '../../shared/models/traveldata.interface';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormArray, FormBuilder, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RequestService } from '../../shared/services/request.service'
import { AuthService } from '../../shared/services/auth.service';
import { FlightItemsArrayComponent } from '../form/flightoptions/flightoptions.component';
import { FlightItemControlComponent } from '../form/flightItems/flight-item-control.component';
import { forkJoin } from "rxjs/observable/forkJoin";
import { FlightOptions, IFlightOptions } from '../../shared/models/flightoptions.interface';
import { FlightService } from '../../shared/services/flight.service';
<<<<<<< HEAD
import { Observable } from 'rxjs/Observable';
=======
import { HotelOptions } from '../../shared/models/hoteloptions.interface';
import { HotelService } from '../../shared/services/hotel.service';
import { Passport } from '../../shared/models/passport.interface';
import { PassportService } from '../../shared/services/passport.service';
import { Forex } from '../../shared/models/forex.interface';
import { ForexService } from '../../shared/services/forex.service';

>>>>>>> 84b90c9665da549d1343bc690df3fef881213633
import { HotelItemsArrayComponent } from '../form/hotelOptions/hoteloptions.component';
import { HotelItemControlComponent } from '../form/hotelItems/hotel-item-control.component';
import { RequestData, IRequestData } from '../../shared/models/requestdata.interface';
import { FlightItem } from '../../shared/models/flightitem.interface';

@Component({
    selector: 'request-dialog',
    templateUrl: './request-dialog.component.html',
    styleUrls : ['./request-dialog.component.css'],
})


export class RequestDialog implements OnInit{

<<<<<<< HEAD
    traveldata = new TravelData();    
=======
    traveldata: TravelData = { requestId: 0, project_code: '', country: '', travelDate: '', returnDate: '', employeeId: '', employeeName: '' };
    flightdata: FlightOptions;
    hoteldata: HotelOptions;
    passportdata: Passport;
    forexdata: Forex;
>>>>>>> 84b90c9665da549d1343bc690df3fef881213633
    submitActions: number;
    action: typeof SubmitActions = SubmitActions;
    
    
    matcher = new MyErrorStateMatcher();
    TravelDataForm: FormGroup;
    FlightOptionsForm: FormGroup;
    HotelOptionsForm: FormGroup;
    PassportOptionsForm: FormGroup;
    ForexOptionsForm: FormGroup;


    constructor( @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<RequestDialog>, private requestService: RequestService,
        private flightService: FlightService,
        private authservice: AuthService, private fb: FormBuilder) {

        //data = 0 means new request
        console.log(data);


    }
        private hotelService: HotelService,
        private passportService: PassportService,
        private forexService: ForexService,
        private authservice: AuthService, private fb: FormBuilder ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit():void {

        if (this.data > 0) {
            let requestData = this.requestService.getRequestById(this.data);
            let flightData = this.flightService.getFlightsForRequest(this.data);

            forkJoin([requestData, flightData]).subscribe(results => {
                
                this.traveldata.requestData = new RequestData(<IRequestData>results[0]);
                this.traveldata.flightData = new FlightOptions(<IFlightOptions>results[1]);

                this.initializeFormWithData(this.traveldata);


            });

            

        }



        this.TravelDataForm = new FormGroup({
<<<<<<< HEAD
            'project_code': new FormControl('', [Validators.required]),
            'country': new FormControl('', [Validators.required]),
            'travelDate': new FormControl('', [Validators.required]),
            'returnDate': new FormControl('', [Validators.required]),
            'employeeId': new FormControl('', [Validators.required]),
            'employeeName': new FormControl('', [Validators.required])
=======
            'project_Code': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
            'country': new FormControl(null, [Validators.required]),
            'travelDate': new FormControl(null, [Validators.required, isOnward('travelDate')]),
            'returnDate': new FormControl(null, [Validators.required]),
            'employeeId': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
            'employeeName': new FormControl(null, [Validators.required]),
            'approverName': new FormControl(null, [Validators.required])
>>>>>>> 84b90c9665da549d1343bc690df3fef881213633
        });

        this.FlightOptionsForm = this.fb.group({

            "OnwardFlightItems": FlightItemsArrayComponent.buildItems(new Array<FlightItem>()),
            "ReturnFlightItems": FlightItemsArrayComponent.buildItems(new Array<FlightItem>())

        });

        this.HotelOptionsForm = this.fb.group({
            "HotelItems": HotelItemsArrayComponent.buildItems()
        });

<<<<<<< HEAD

        

    }


    initializeFormWithData(traveldata : TravelData)
    {

        this.TravelDataForm.patchValue(traveldata.requestData);

        console.log(traveldata.flightData.OnwardFlightItems);
        console.log(traveldata.flightData.ReturnFlightItems);
        this.FlightOptionsForm.setControl("OnwardFlightItems", FlightItemsArrayComponent.buildItems(traveldata.flightData.OnwardFlightItems))
        this.FlightOptionsForm.setControl("ReturnFlightItems", FlightItemsArrayComponent.buildItems(traveldata.flightData.ReturnFlightItems))
=======
        this.PassportOptionsForm = new FormGroup({
            'passportNum': new FormControl(null),
            'visaNum': new FormControl(null),
            'passportDate': new FormControl(null),
            'visaDate': new FormControl(null)
        })

        this.ForexOptionsForm = new FormGroup({
            'cardNum': new FormControl(null),
            'countryCode': new FormControl(null),
            'mobileNum': new FormControl(null)
        })
>>>>>>> 84b90c9665da549d1343bc690df3fef881213633
    }

    step = 0;

    setStep(index: number) {
        this.step = index;
        
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    onSubmit(){
        console.log(this.submitActions);
        switch (this.submitActions) {
            
            case SubmitActions.createRequest: this.createNewRequest(); break;
            case SubmitActions.updateRequest: this.updateRequest(); break;
            case SubmitActions.createFlightOptions: this.createFlightOptions(); break;
            case SubmitActions.updateFlightOptions: this.updateFlightOptions(); break;
            case SubmitActions.createHotelOptions: this.createHotelOptions(); break;
            case SubmitActions.updateHotelOptions: this.updateHotelOptions(); break;
            case SubmitActions.createPassportOptions: this.createPassportOptions(); break;
            case SubmitActions.updatePassportOptions: this.updatePassportOptions(); break;
            case SubmitActions.createForexOptions: this.createForexOptions(); break;
            case SubmitActions.updateForexOptions: this.updateForexOptions(); break;
           
        }
        

    }

    createFlightOptions() {
        if (this.FlightOptionsForm.valid) {
            this.traveldata.flightData = new FlightOptions(<IFlightOptions>this.FlightOptionsForm.value);
            this.traveldata.flightData.OnwardFlightItems.forEach(item => item.requestInfoId = this.traveldata.requestData.requestId);
            this.traveldata.flightData.ReturnFlightItems.forEach(item => item.requestInfoId = this.traveldata.requestData.requestId)
            this.flightService.addFlightInfo(this.traveldata.flightData).subscribe(
                (val) => {
                    console.log("POST call success");
                },
                response => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
        }
        
        
    }

    updateFlightOptions() {
        console.log('inside Update Flight');

    }


    createHotelOptions() {
        if (this.HotelOptionsForm.valid) {
            this.hoteldata = <HotelOptions>this.HotelOptionsForm.value;
            this.hotelService.addHotelInfo(this.hoteldata).subscribe(
                (val) => {
                    console.log("POST call success");
                },
                response => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
        }


    }

    updateHotelOptions() {
        console.log('inside Update Hotel');

    }

    createPassportOptions() {
        if (this.PassportOptionsForm.valid) {
            this.passportdata = <Passport>this.PassportOptionsForm.value;
            this.passportService.addPassportInfo(this.passportdata).subscribe(
                (val) => {
                    console.log("POST call success");
                },
                response => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
        }


    }

    updatePassportOptions() {
        console.log('inside Update Passport');

    }

    createForexOptions() {
        if (this.ForexOptionsForm.valid) {
            this.forexdata = <Forex>this.ForexOptionsForm.value;
            this.forexService.addForexInfo(this.forexdata).subscribe(
                (val) => {
                    console.log("POST call success");
                },
                response => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
        }


    }

    updateForexOptions() {
        console.log('inside Update Forex');

    }

    updateRequest() {
        if (this.TravelDataForm.valid) {
            this.traveldata.requestData.requestId = this.data;
            this.traveldata.requestData.project_code = this.TravelDataForm.controls['project_Code'].value;
            this.traveldata.requestData.country = this.TravelDataForm.controls['country'].value;
            this.traveldata.requestData.travelDate = this.TravelDataForm.controls['travelDate'].value;
            this.traveldata.requestData.returnDate = this.TravelDataForm.controls['returnDate'].value;
            this.traveldata.requestData.employeeId = this.TravelDataForm.controls['employeeId'].value;
            this.traveldata.requestData.employeeName = this.TravelDataForm.controls['employeeName'].value;
            this.requestService.updateRequest(this.traveldata).subscribe(
                (val) => {
                    console.log("POST call success");
                },
                response => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });


        }
        
    }
    createNewRequest() {

        if (this.TravelDataForm.valid) {
            this.traveldata.requestData.project_code = this.TravelDataForm.controls['project_Code'].value;
            this.traveldata.requestData.country = this.TravelDataForm.controls['country'].value;
            this.traveldata.requestData.travelDate = this.TravelDataForm.controls['travelDate'].value;
            this.traveldata.requestData.returnDate = this.TravelDataForm.controls['returnDate'].value;
            this.traveldata.requestData.employeeId = this.TravelDataForm.controls['employeeId'].value;
            this.traveldata.requestData.employeeName = this.TravelDataForm.controls['employeeName'].value;
            console.log("here" + this.traveldata);
            this.requestService.addRequest(this.traveldata).subscribe(
                (val) => {
                    console.log("POST call success");
                },
                response => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });

        }
    }
    function isOnward(date: Date): boolean {
        var today = new Date();
        if (date.getTime() < today.getTime())
            return false;
        return true;
}

}

enum SubmitActions {
    createRequest,
    updateRequest,
    createFlightOptions,
    updateFlightOptions,
    createHotelOptions,
    updateHotelOptions,
    createPassportOptions,
    updatePassportOptions,
    createForexOptions,
    updateForexOptions
}




export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}