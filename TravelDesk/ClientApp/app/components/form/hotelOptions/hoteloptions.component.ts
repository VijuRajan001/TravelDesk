
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { HotelItemControlComponent } from '../hotelItems/hotel-item-control.component';

@Component({
    selector: 'hotel-items-array',
    templateUrl:'./hoteloptions.component.html'
 })

@Injectable()
export class HotelItemsArrayComponent {

    @Input()
    public hotelItemsFormArray: FormArray;

    addItem(index: number) {
        if (index === this.hotelItemsFormArray.length - 1) {
            this.hotelItemsFormArray.push(HotelItemControlComponent.buildItem(''));
        }
        else {
            this.hotelItemsFormArray.insert(index + 1, HotelItemControlComponent.buildItem(''));
        }
    }

    static buildItems() {
        console.log("here");
        return new FormArray([
            HotelItemControlComponent.buildItem('aaa'),
            HotelItemControlComponent.buildItem('')],
            )
    }
}

