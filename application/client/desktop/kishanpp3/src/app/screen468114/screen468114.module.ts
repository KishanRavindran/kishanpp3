import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Screen468114Component } from './screen468114.component';

@NgModule({
  imports: [
  CommonModule,
RouterModule,
FormsModule,
ReactiveFormsModule,
RouterModule.forChild([
            {path: '', component: Screen468114Component}
          ])
],
  declarations: [
  Screen468114Component
]
  
})
export class Screen468114Module { }