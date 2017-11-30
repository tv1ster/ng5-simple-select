import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSimpleSelectComponent } from './ng-simple-select.component';

describe('NgSimpleSelectComponent', () => {
  let component: NgSimpleSelectComponent;
  let fixture: ComponentFixture<NgSimpleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSimpleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSimpleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
