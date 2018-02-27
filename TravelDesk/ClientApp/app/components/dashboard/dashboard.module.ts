import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './dashboard.routing';
import { DashBoardHomeComponent } from './home/dashboard-home.component';
import { TableOverviewExample } from './grid/dashboard-grid.component';
import { MatPaginatorModule, MatSortModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { AuthGuard } from '../../auth.guard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
        MatPaginatorModule, MatSortModule, MatTableModule, MatFormFieldModule, MatInputModule],
    declarations: [DashBoardHomeComponent, TableOverviewExample],
    exports: [DashBoardHomeComponent],
    providers: [AuthGuard]
})
export class DashboardModule {

}