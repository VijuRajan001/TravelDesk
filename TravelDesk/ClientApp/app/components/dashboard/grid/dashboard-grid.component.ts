import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatPaginatorModule, MatSortModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
    selector: 'dash-grid',
    styleUrls: ['dashboard-grid.component.css'],
    templateUrl: 'dashboard-grid.component.html',
})
export class TableOverviewExample {
    displayedColumns = ['Request_id', 'Description', 'Progress', 'Actions'];
    dataSource: MatTableDataSource<RequestData>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        // Create 100 users
        var requestList: RequestData[] = [];
        
        requestList = getRequestList('user1');

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(requestList);
    }

    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
}

/** Builds and returns a new User. */
function getRequestList(userid: string): RequestData[] {


    var requestList: RequestData[] = [
        { "request_id": "One", "description": "hello1", "progress": "Initial", "actions":""},
        { "request_id": "two", "description": "hello2", "progress": "Initial", "actions": "" },
        
    ];
    return requestList;
}


export interface RequestData {
    request_id: string;
    description: string;
    progress: string;
    actions: string;
}