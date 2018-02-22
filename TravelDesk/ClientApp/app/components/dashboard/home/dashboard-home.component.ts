import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './dashboard-home.component.html'
})
export class DashBoardHomeComponent implements OnInit {

    ngOnInit() {
        console.log('inside dashborad components');
    }
}
