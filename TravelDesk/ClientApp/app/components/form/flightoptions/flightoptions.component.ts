
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { FlightItemControlComponent} from '../flightItems/flight-item-control.component';

@Component({
    selector: 'flight-items-array',
    templateUrl:'./flightoptions.component.html'
 })

@Injectable()
export class FlightItemsArrayComponent {

    @Input()
    public itemsFormArray: FormArray;

    addItem() {
        this.itemsFormArray.push(FlightItemControlComponent.buildItem(''))
    }

    static buildItems() {
        return new FormArray([
            FlightItemControlComponent.buildItem('aaa'),
            FlightItemControlComponent.buildItem('')],
            )
    }
}

