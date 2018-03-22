
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { FlightItemControlComponent } from '../flightItems/flight-item-control.component';
import { FlightItem } from '../../../shared/models/flightitem.interface';

@Component({
    selector: 'flight-items-array',
    templateUrl:'./flightoptions.component.html'
 })

@Injectable()
export class FlightItemsArrayComponent {


    @Input()
    public itemsFormArray: FormArray;

    flightItem: FlightItem = {
        flightItemId: 0,
        flightStart: '',
        flightEnd: '',
        flightName: '',
        requestInfoId:0,
    };

    addItem(index: number) {
        if (index === this.itemsFormArray.length - 1) {
            this.itemsFormArray.push(FlightItemControlComponent.buildItem(this.flightItem));
        }
        else {
            this.itemsFormArray.insert(index + 1, FlightItemControlComponent.buildItem(this.flightItem));
        }
    }

    static buildItems(flightItems: FlightItem[]) {
        let formArray =  new  Array<AbstractControl>();
        console.log("inside FlightItems");
        if (flightItems.length > 0) {
            for (let flightitem of flightItems) {

                formArray.push(FlightItemControlComponent.buildItem(flightitem));
            }
        }
        else {
            formArray.push(FlightItemControlComponent.buildItem(new FlightItem()));
        }
    
        return new FormArray(formArray);
    }
}

