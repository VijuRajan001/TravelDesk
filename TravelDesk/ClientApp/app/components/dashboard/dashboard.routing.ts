import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashBoardHomeComponent } from './home/dashboard-home.component';
import { AuthGuard } from '../../auth.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'dashboard',        
        canActivate: [AuthGuard],
        
        children: [
            { path: '', component: DashBoardHomeComponent },
            { path: 'home', component: DashBoardHomeComponent },
        ]
    }
]);