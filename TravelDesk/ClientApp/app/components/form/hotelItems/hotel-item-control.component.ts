
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { MatInputModule,MatFormFieldModule,MatButtonModule} from '@angular/material';


@Component({
    selector: 'hotel-item-control',
    templateUrl:'./hotel-item-control.component.html'
        
})
@Injectable()
export class HotelItemControlComponent {

    @Input()
    public hotelIndex: number;

    @Input()
    public hotelItem: FormGroup;

    @Output()
    public removed: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    public add :EventEmitter<number> = new EventEmitter<number>();;


    static buildItem(val: string) {
        return new FormGroup({
            hotelName: new FormControl(val, Validators.required),
            location: new FormControl(val, Validators.required),
            website: new FormControl(val, Validators.required),
            mobileno: new FormControl(val, Validators.required)
        })
    }
}
