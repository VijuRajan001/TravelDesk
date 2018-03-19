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
<<<<<<< HEAD
import { FlightOptions } from '../../shared/models/flightoptions.interface';
import { FlightService } from '../../shared/services/flight.service';
=======
import { HotelItemsArrayComponent } from '../form/hoteloptions/hoteloptions.component';
import { HotelItemControlComponent } from '../form/hotelItems/hotel-item-control.component';
>>>>>>> d1bec7fc3072b8153fd54875768897ed0331d793
@Component({
    selector: 'request-dialog',
    templateUrl: './request-dialog.component.html',
    styleUrls : ['./request-dialog.component.css'],
})


export class RequestDialog implements OnInit{

    traveldata: TravelData = { requestId: 0, project_code: '', country: '', travelDate: '', returnDate: '', employeeId: '', employeeName: '' };
    flightdata: FlightOptions;
    submitActions: number;
    action: typeof SubmitActions = SubmitActions;
    
    
    matcher = new MyErrorStateMatcher();
    TravelDataForm: FormGroup;
    FlightOptionsForm: FormGroup;
    HotelOptionsForm: FormGroup;

    constructor( @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<RequestDialog>, private requestService: RequestService,
        private flightService: FlightService,
        private authservice: AuthService, private fb: FormBuilder ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit():void {

        this.TravelDataForm = new FormGroup({
            'project_Code': new FormControl(null, [Validators.required]),
            'country': new FormControl(null, [Validators.required]),
            'travelDate': new FormControl(null, [Validators.required]),
            'returnDate': new FormControl(null, [Validators.required]),
            'employeeId': new FormControl(null, [Validators.required]),
            'employeeName': new FormControl(null, [Validators.required])
        });
        
        this.FlightOptionsForm = this.fb.group({
<<<<<<< HEAD
            "OnwardFlightItems": FlightItemsArrayComponent.buildItems(),
            "ReturnFlightItems": FlightItemsArrayComponent.buildItems()
        })
        
=======
            OnwardFlightItems: FlightItemsArrayComponent.buildItems(),
            ReturnFlightItems: FlightItemsArrayComponent.buildItems()
        });

        this.HotelOptionsForm = this.fb.group({
            HotelItems: HotelItemsArrayComponent.buildItems()
        });

>>>>>>> d1bec7fc3072b8153fd54875768897ed0331d793
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
            this.flightdata = <FlightOptions>this.FlightOptionsForm.value;
            this.flightService.addFlightInfo(this.flightdata).subscribe(
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
            this.traveldata.requestId = this.data.requestId;
            this.traveldata.project_code = this.TravelDataForm.controls['project_Code'].value;
            this.traveldata.country = this.TravelDataForm.controls['country'].value;
            this.traveldata.travelDate = this.TravelDataForm.controls['travelDate'].value;
            this.traveldata.returnDate = this.TravelDataForm.controls['returnDate'].value;
            this.traveldata.employeeId = this.TravelDataForm.controls['employeeId'].value;
            this.traveldata.employeeName = this.TravelDataForm.controls['employeeName'].value;
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
            this.traveldata.project_code = this.TravelDataForm.controls['project_Code'].value;
            this.traveldata.country = this.TravelDataForm.controls['country'].value;
            this.traveldata.travelDate = this.TravelDataForm.controls['travelDate'].value;
            this.traveldata.returnDate = this.TravelDataForm.controls['returnDate'].value;
            this.traveldata.employeeId = this.TravelDataForm.controls['employeeId'].value;
            this.traveldata.employeeName = this.TravelDataForm.controls['employeeName'].value;
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