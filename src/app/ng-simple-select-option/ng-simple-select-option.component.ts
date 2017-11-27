import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {ParentChildService} from '../parent-child/parent-child.service';

@Component({
  selector: 'ng-simple-select-option',
  templateUrl: './ng-simple-select-option.component.html',
  styleUrls: ['ng-simple-select-option.component.scss']
})
export class NgSimpleSelectOptionComponent implements OnInit {
  @Input() value?: string;

  constructor(private element: ElementRef,
              private parentChild: ParentChildService) { }

  ngOnInit() {
    //setting value, if it's not provided
    if (!this.value) {
      this.value = this.element.nativeElement.innerText.trim();
    }
  }

  public setParentValue() {
    let correctParent = this.element.nativeElement.parentNode;
    let i = 0;
    while (correctParent.nodeName !== 'NG-SIMPLE-SELECT' && i < 10) {
      correctParent = correctParent.parentNode;
    }
    let fn = this.parentChild.getParentOnChangeFn(correctParent);
    fn(this.value);
  }

}
