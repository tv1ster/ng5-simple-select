import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSimpleSelectOptionComponent } from './ng-simple-select-option.component';

describe('NgSimpleSelectOptionComponent', () => {
  let component: NgSimpleSelectOptionComponent;
  let fixture: ComponentFixture<NgSimpleSelectOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSimpleSelectOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSimpleSelectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
