import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng5SimpleSelectDropdownComponent } from './ng5-simple-select-dropdown.component';

describe('Ng5SimpleSelectDropdownComponent', () => {
  let component: Ng5SimpleSelectDropdownComponent;
  let fixture: ComponentFixture<Ng5SimpleSelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng5SimpleSelectDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng5SimpleSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
