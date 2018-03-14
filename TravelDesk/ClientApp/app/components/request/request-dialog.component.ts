import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatExpansionModule } from '@angular/material';
import { Inject } from '@angular/core';
import { TravelData } from '../../shared/models/traveldata.interface';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RequestService } from '../../shared/services/request.service'
import { AuthService } from '../../shared/services/auth.service';
@Component({
    selector: 'request-dialog',
    templateUrl: './request-dialog.component.html',
    styleUrls : ['./request-dialog.component.css'],
})
export class RequestDialog implements OnInit{

    traveldata: TravelData = { project_code: '', country: '',traveldate:'',returndate:'' };
    matcher = new MyErrorStateMatcher();
    TravelDataForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<RequestDialog>, private requestService : RequestService,
       private authservice : AuthService ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit():void {

        this.TravelDataForm = new FormGroup({
            'project_code': new FormControl(null, [Validators.required]),
            'country': new FormControl(null, [Validators.required]),
            'traveldate': new FormControl(null, [Validators.required]),
            'returndate': new FormControl(null, [Validators.required])
        });
        
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
        
        if (this.TravelDataForm.valid) {
            this.traveldata.project_code = this.TravelDataForm.controls['project_code'].value;
            this.traveldata.country = this.TravelDataForm.controls['country'].value;
            this.traveldata.traveldate = this.TravelDataForm.controls['traveldate'].value;
            this.traveldata.returndate = this.TravelDataForm.controls['returndate'].value;
            console.log("here" + this.traveldata);
            this.requestService.addRequest(this.traveldata);

        }


    }


}


export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}