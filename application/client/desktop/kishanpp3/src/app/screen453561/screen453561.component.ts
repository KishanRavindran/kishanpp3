import { Component, OnInit } from '@angular/core';

import { Screen453561Service } from './screen453561.service';



@Component({
  selector: 'app-screen453561',
  templateUrl: './screen453561.component.html',
  styleUrls: ['./screen453561.component.scss'],
})
export class Screen453561Component implements OnInit {

testentity = {
   test1: '',
   test2: ''
};

  constructor(
private screen453561Service: Screen453561Service
  ) { }

  ngOnInit() {
    
  }

GpCreate() {
 this.screen453561Service.GpCreate(this.testentity)
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