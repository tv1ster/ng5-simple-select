import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'ng-simple-select-option',
  templateUrl: './ng-simple-select-option.component.html',
  styleUrls: ['ng-simple-select-option.component.scss']
})
export class NgSimpleSelectOptionComponent implements OnInit {
  @Input() value?: string;
  private parentChangeFn: (value: any) => void;
  private highlighted: boolean = false;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    //setting value, if it's not provided
    if (!this.value) {
      this.value = this.element.nativeElement.innerText.trim();
    }
  }

  public setParentValue() {
    this.parentChangeFn(this.value);
  }

  public setParentChangeFn(fn) {
    this.parentChangeFn = fn;
  }

  public setHighlightedState(val: boolean) {
    this.highlighted = val;
  }

  public getValue() {
    return this.value;
  }
}
