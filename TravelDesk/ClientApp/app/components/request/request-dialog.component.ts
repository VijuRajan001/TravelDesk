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
import { Observable } from 'rxjs/Observable';
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

    traveldata = new TravelData();    
    submitActions: number;
    action: typeof SubmitActions = SubmitActions;
    
    
    matcher = new MyErrorStateMatcher();
    TravelDataForm: FormGroup;
    FlightOptionsForm: FormGroup;
    HotelOptionsForm: FormGroup;

    constructor( @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<RequestDialog>, private requestService: RequestService,
        private flightService: FlightService,
        private authservice: AuthService, private fb: FormBuilder) {

        //data = 0 means new request
        console.log(data);


    }

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
            'project_code': new FormControl('', [Validators.required]),
            'country': new FormControl('', [Validators.required]),
            'travelDate': new FormControl('', [Validators.required]),
            'returnDate': new FormControl('', [Validators.required]),
            'employeeId': new FormControl('', [Validators.required]),
            'employeeName': new FormControl('', [Validators.required])
        });

        this.FlightOptionsForm = this.fb.group({

            "OnwardFlightItems": FlightItemsArrayComponent.buildItems(new Array<FlightItem>()),
            "ReturnFlightItems": FlightItemsArrayComponent.buildItems(new Array<FlightItem>())

        });

        this.HotelOptionsForm = this.fb.group({
            "HotelItems": HotelItemsArrayComponent.buildItems()
        });


        

    }


    initializeFormWithData(traveldata : TravelData)
    {

        this.TravelDataForm.patchValue(traveldata.requestData);

        console.log(traveldata.flightData.OnwardFlightItems);
        console.log(traveldata.flightData.ReturnFlightItems);
        this.FlightOptionsForm.setControl("OnwardFlightItems", FlightItemsArrayComponent.buildItems(traveldata.flightData.OnwardFlightItems))
        this.FlightOptionsForm.setControl("ReturnFlightItems", FlightItemsArrayComponent.buildItems(traveldata.flightData.ReturnFlightItems))
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


}

enum SubmitActions {
    createRequest,
    updateRequest,
    createFlightOptions,
    updateFlightOptions
}




export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}