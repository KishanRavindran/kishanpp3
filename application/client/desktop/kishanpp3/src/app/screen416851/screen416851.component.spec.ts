import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen416851Component } from './screen416851.component';

describe('Screen416851Component', () => {
  let component: Screen416851Component;
  let fixture: ComponentFixture<Screen416851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen416851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen416851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});