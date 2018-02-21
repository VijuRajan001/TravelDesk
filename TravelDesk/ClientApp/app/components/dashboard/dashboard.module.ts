import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './dashboard.routing';
import { DashBoardHomeComponent } from './home/dashboard-home.component'


import { AuthGuard } from '../../auth.guard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing],
    declarations: [DashBoardHomeComponent],
    exports: [],
    providers: [AuthGuard]
})
export class DashboardModule { }