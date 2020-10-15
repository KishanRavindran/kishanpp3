import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen468114Component } from './screen468114.component';

describe('Screen468114Component', () => {
  let component: Screen468114Component;
  let fixture: ComponentFixture<Screen468114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen468114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen468114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});