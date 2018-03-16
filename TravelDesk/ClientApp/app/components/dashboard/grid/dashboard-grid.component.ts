import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginatorModule,MatFormFieldModule, MatButtonModule, MatSortModule, MatDialogModule, MatTableModule } from '@angular/material';
import { MatPaginator, MatSort,MatDialog } from '@angular/material';
import { RequestService } from '../../../shared/services/request.service'
import { RequestData } from '../../../shared/models/requestdata.interface';
import { RequestDialog } from '../../request/request-dialog.component';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
    selector: 'dash-grid',
    styleUrls: ['dashboard-grid.component.css'],
    templateUrl: 'dashboard-grid.component.html',
})
export class TableOverviewExample implements OnInit {
    displayedColumns = ['requestId', 'project_Code', 'country','actions'];
    dataSource: RequestDataSource;
    request: RequestData;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog,private requestService : RequestService) {
        // Create 100 users
        
        
    }
    
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    ngAfterViewInit() {
    //    this.dataSource.paginator = this.paginator;
    //    this.dataSource.sort = this.sort;
    }

    ngOnInit() {
        this.dataSource = new RequestDataSource(this.requestService);
        this.dataSource.loadRequests();

    }

    applyFilter(filterValue: string) {
        //filterValue = filterValue.trim(); // Remove whitespace
        //filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        //this.dataSource.filter = filterValue;
    }

    openDialog(id:number): void {

        this.requestService.getRequestById(id).subscribe(
            (val) => {
                
                this.request = val;
                console.log(val);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });
            
            

        let dialogRef = this.dialog.open(RequestDialog, {
            width: '80vw',
            height: '70vh',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

        });
    }
}

/** Builds and returns a new User. */
export class RequestDataSource extends DataSource<RequestData>
{
    private requestSubject = new BehaviorSubject<RequestData[]>([]);
    private loadingRequestSubject = new BehaviorSubject<boolean>(false);
    constructor(private requestService: RequestService) {
        super();
    }
    connect(): Observable<RequestData[]> {
        
        console.log(this.requestSubject);
        return this.requestSubject.asObservable();
        
    }
    disconnect() {
        this.requestSubject.complete();
        this.loadingRequestSubject.complete();

    }

    loadRequests() {
        this.loadingRequestSubject.next(true);
        this.requestService.getRequestList()
            .subscribe(requests => this.requestSubject.next(requests))
        console.log(this.requestSubject);
    }
}

