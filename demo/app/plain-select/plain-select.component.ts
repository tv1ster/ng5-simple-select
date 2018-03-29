import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'plain-select',
  templateUrl: './plain-select.component.html',
  styleUrls: ['./plain-select.component.scss']
})
export class PlainSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
