import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatExpansionModule } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
    selector: 'request-dialog',
    templateUrl: './request-dialog.component.html',
    styleUrls : ['./request-dialog.component.css'],
})
export class RequestDialog {

    constructor(
        public dialogRef: MatDialogRef<RequestDialog>
        ) { }

    onNoClick(): void {
        this.dialogRef.close();
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



}
