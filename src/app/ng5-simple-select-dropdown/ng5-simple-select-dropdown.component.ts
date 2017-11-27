import {Component, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'ng5-simple-select-dropdown',
  templateUrl: './ng5-simple-select-dropdown.component.html',
  styleUrls: ['./ng5-simple-select-dropdown.component.sass']
})
export class Ng5SimpleSelectDropdownComponent implements OnInit, DoCheck {
  optionsTemplates;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(this);
  }

}
