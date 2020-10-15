import { Component, OnInit } from '@angular/core';

import { Screen468114Service } from './screen468114.service';



@Component({
  selector: 'app-screen468114',
  templateUrl: './screen468114.component.html',
  styleUrls: ['./screen468114.component.scss'],
})
export class Screen468114Component implements OnInit {

testentity = {
   test1: '',
   test2: ''
};

  constructor(
private screen468114Service: Screen468114Service
  ) { }

  ngOnInit() {
    
  }

GpCreate() {
 this.screen468114Service.GpCreate(this.testentity)
  .subscribe(
    data => {
       console.log('data created successfully');
this.testentity.test1 = '';

this.testentity.test2 = '';

    },
    error => {
       console.log('cannot able to create the data');
    }
    );
}

}