import {
  Component, forwardRef, OnInit, OnChanges, ElementRef, QueryList, ContentChildren, AfterContentInit,
  OnDestroy
} from '@angular/core';
import {ControlValueAccessor,  NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgSimpleSelectOptionComponent} from '../ng-simple-select-option/ng-simple-select-option.component';
import {Subscription} from 'rxjs';

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
    }
  ]
})
export class NgSimpleSelectComponent implements OnInit, OnChanges, ControlValueAccessor, AfterContentInit, OnDestroy  {
  public disabled;
  public showDropdown: boolean;
  public value: string = 'Placeholder';
  @ContentChildren(NgSimpleSelectOptionComponent)
  private options: QueryList<NgSimpleSelectOptionComponent>;
  private subscriptions: Subscription[] = [];

  constructor(private element: ElementRef) {
  }

  ngOnChanges() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.addParentFnToChildren(this.options);
    let s = this.options.changes.subscribe((query) => {
      this.addParentFnToChildren(query);
    });
    this.subscriptions.push(s);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private addParentFnToChildren(options: QueryList<NgSimpleSelectOptionComponent>) {
    options.forEach((child) => {
      child.setParentChangeFn(this.childChanges.bind(this));
    });
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

  writeValue(newVal: string): void {
    if (!this.disabled) {
      this.value = newVal;
      this.onChange(this.value);
    }
  }

  registerOnChange(fn: (newVal: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onChange = (newVal: string) => {};
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
