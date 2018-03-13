import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
    selector: 'request-dialog',
    templateUrl: 'request-dialog.component.html',
})
export class RequestDialog {

    constructor(
        public dialogRef: MatDialogRef<RequestDialog>
        ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
