import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Screen416851Component } from './screen416851.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
  CommonModule,
RouterModule,
FormsModule,
ReactiveFormsModule,
RouterModule.forChild([
            {path: '', component: Screen416851Component}
          ]),
AgGridModule
],
  declarations: [
  Screen416851Component
]
  
})
export class Screen416851Module { }