import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng5SimpleSelectInputComponent } from './ng5-simple-select-input.component';

describe('Ng5SimpleSelectInputComponent', () => {
  let component: Ng5SimpleSelectInputComponent;
  let fixture: ComponentFixture<Ng5SimpleSelectInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng5SimpleSelectInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng5SimpleSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
