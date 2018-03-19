
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { RequestDialog} from './components/request/request-dialog.component'
import { TableOverviewExample } from './components/dashboard/grid/dashboard-grid.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/account/login/login.component';
import { LoginLayoutComponent } from './components/layout/login/login-layout.component';
import { HomeLayoutComponent } from './components/layout/home/home-layout.component';

import { MediaMatcher } from '@angular/cdk/layout';
import { ConfigService } from './shared/utils/config.service';
import { UserService } from './shared/services/user.service';
import { RequestService } from './shared/services/request.service';
import { AuthService } from './shared/services/auth.service';
import { GridService } from './shared/services/grid.service';
import { AuthGuard } from '../app/auth.guard';
import { httpInterceptorProviders } from '../app/shared/interceptors/http.intercep.providers';
import {    
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  } from '@angular/material';
import { ErrorStateMatcher,ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import { FlightItemsArrayComponent } from './components/form/flightoptions/flightoptions.component';
import { FlightItemControlComponent } from './components/form/flightItems/flight-item-control.component';
import { FlightService } from './shared/services/flight.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        LoginLayoutComponent,
        HomeLayoutComponent,      
        LoginComponent,
        RequestDialog,
        TableOverviewExample,
        FlightItemsArrayComponent,
        FlightItemControlComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,        
        BrowserAnimationsModule,
        FormsModule,        
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        RouterModule.forRoot([                                   
                      
            {
                path: '',                       
                component: HomeLayoutComponent,
                canActivate: [AuthGuard],       
                children: [
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'counter', component: CounterComponent },
                    { path: 'fetch-data', component: FetchDataComponent },                     
                    { path: 'home', component: TableOverviewExample }, 
                    

                ]
            },
            {
                path: '',
                component: LoginLayoutComponent,
                children: [
                    {
                        path: 'login',
                        component: LoginComponent   // {5}
                    }]
            }
             
        ])
    ],
    entryComponents: [RequestDialog],
    providers: [MediaMatcher, ConfigService, RequestService, UserService, GridService,FlightService, AuthService, AuthGuard,httpInterceptorProviders,
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher } ]
    
    
})
export class AppModuleShared {
}
