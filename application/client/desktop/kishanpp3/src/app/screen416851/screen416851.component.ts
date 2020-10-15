import { Component, OnInit } from '@angular/core';

import { Screen416851Service } from './screen416851.service';



@Component({
  selector: 'app-screen416851',
  templateUrl: './screen416851.component.html',
  styleUrls: ['./screen416851.component.scss'],
})
export class Screen416851Component implements OnInit {

columnDefs = [
{headerName: 'test1', field: 'test1'}];
testentity = {
   test1: '',
   test2: ''
};
gridApi: any;
gridColumnApi: any;
rowSelection = 'single';
defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
paginationPageSize = 10;
rowData: any = [];

  constructor(
private screen416851Service: Screen416851Service
  ) { }

  ngOnInit() {
    this.GpGetAllValues();
  }

onGridReady(params) {
this.gridApi = params.api;
this.gridApi.sizeColumnsToFit();
this.gridColumnApi = params.columnApi;
}
GpGetAllValues() {
 this.screen416851Service.GpGetAllValues()
  .subscribe(
    data => {
       console.log('successfully get all data --- ', data);
       this.rowData = data;
    },
    error => {
       console.log('cannot able to get all data --- ', error);
    }
    );
}

}