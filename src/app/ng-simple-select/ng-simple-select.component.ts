import {Component, forwardRef, OnInit, OnChanges, ElementRef} from '@angular/core';
import { ControlValueAccessor,  NG_VALUE_ACCESSOR } from '@angular/forms';
import {ParentChildService} from '../parent-child/parent-child.service';

@Component({
  selector: 'ng-simple-select',
  templateUrl: './ng-simple-select.component.html',
  styleUrls: ['ng-simple-select.component.scss'],
  host: {
    '(document:click)': 'onDocClick($event)',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgSimpleSelectComponent),
      multi: true
    },
    ParentChildService
  ]
})
export class NgSimpleSelectComponent implements OnInit, OnChanges, ControlValueAccessor  {
  value;
  public disabled;
  public showDropdown: boolean;
  private value: string = 'Placeholder';

  constructor(private element: ElementRef,
              private parentChild: ParentChildService) {
  }

  ngOnChanges() {
  }

  ngOnInit() {
    this.parentChild.setParenChangeEvent(this.element.nativeElement, this.childChanges.bind(this));
  }

  public toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    this.onTouched();
  }

  private childChanges(str: string) {
    this.showDropdown = false;
    this.value = str;
    this.onChange(this.value);
  }

  private onDocClick (ev: Event) {
    if (this.isClickOutsideComponent(ev)) {
      this.showDropdown = false;
    }
  }

  writeValue(rating: string): void {
    if (!this.disabled) {
      this.value = rating;
      this.onChange(this.value);
    }
  }

  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onChange = (newVal: number) => {};
  onTouched = () => {};

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private isClickOutsideComponent(ev) {
    let target = ev.target;

    // checking only 10 parents
    let i = 0;
    while (target.parentNode && i < 10) {
      if (target !== this.element.nativeElement) {
        target = target.parentNode;
        i ++;
      } else {
        return false;
      }
    }
    return true;
  }

}
