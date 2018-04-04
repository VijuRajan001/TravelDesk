import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Renderer2, ElementRef, ViewChild,ViewChildren,QueryList, AfterViewInit } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatSidenav, MatMenuModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../../shared/services/user.service';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { RequestDialog } from '../../request/request-dialog.component';
import { TableOverviewExample } from '../../dashboard/grid/dashboard-grid.component';
import { GridService } from '../../../shared/services/grid.service';
@Component({
    selector: 'home-layout',
    templateUrl: './home-layout.component.html',
    styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements AfterViewInit {
    
     
    @ViewChild('snav') snav: MatSidenav;
    
    @ViewChildren(TableOverviewExample) DashBoardGrid: QueryList<TableOverviewExample>

    
   
    mobileQuery: MediaQueryList;
    fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

    
    private _mobileQueryListener: () => void;

    constructor(public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher, private renderer: Renderer2, private router: Router,
        private gridService: GridService,
        private userService: UserService) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        
    }
    
    openDialog(): void {
        let dialogRef = this.dialog.open(RequestDialog, {
            width: '80vw',
            height: '80vh',
             data: { project_Code: '', country: '', travelDate: '', returnDate: '' ,employeeId:'',employeeName:''}
        });

        dialogRef.afterClosed().subscribe(result => {
            
            this.gridService.loadGridData();
        });
    }
    
    ngAfterViewInit(): void {

        if (this.mobileQuery.matches) {
            this.snav.close();
        }
        
        
    }
    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    signout() {
        this.userService.logout();
        this.router.navigateByUrl('/login');
    }
}
