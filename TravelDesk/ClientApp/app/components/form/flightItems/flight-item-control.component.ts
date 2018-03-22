
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { MatInputModule,MatFormFieldModule,MatButtonModule} from '@angular/material';
import { FlightItem } from '../../../shared/models/flightitem.interface';


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


    static buildItem(flightItem: FlightItem) {
        return new FormGroup({
<<<<<<< HEAD
            flightName: new FormControl(flightItem.flightName, Validators.required),
            flightFrom: new FormControl(flightItem.flightStart, Validators.required),
            flightTo: new FormControl(flightItem.flightEnd, Validators.required),
            
=======
            flightItemID: new FormControl('', Validators.required),
            flightCarrierName: new FormControl('', Validators.required),
            flightFrom: new FormControl('', Validators.required),
            flightTo: new FormControl('',Validators.required)
>>>>>>> 84b90c9665da549d1343bc690df3fef881213633
        })
    }
}
