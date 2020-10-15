import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen453561Component } from './screen453561.component';

describe('Screen453561Component', () => {
  let component: Screen453561Component;
  let fixture: ComponentFixture<Screen453561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen453561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen453561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});