
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { MatInputModule,MatFormFieldModule,MatButtonModule} from '@angular/material';


@Component({
    selector: 'flight-item-control',
    templateUrl:'./flight-item-control.component.html'
        
})
@Injectable()
export class FlightItemControlComponent {

    @Input()
    public index: number;

    @Input()
    public item: FormGroup;

    @Output()
    public removed: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    public add :EventEmitter<number> = new EventEmitter<number>();;


    static buildItem(val: string) {
        return new FormGroup({
            flightName: new FormControl(val, Validators.required),
            flightFrom: new FormControl(val, Validators.required),
            flightTo: new FormControl(val,Validators.required)
        })
    }
}
