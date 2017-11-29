import {
  Component, forwardRef, OnInit, OnChanges, ElementRef, QueryList, ContentChildren, AfterContentInit,
  OnDestroy, Input, Output, EventEmitter
} from '@angular/core';
import {ControlValueAccessor,  NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgSimpleSelectOptionComponent} from '../ng-simple-select-option/ng-simple-select-option.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ng-simple-select',
  templateUrl: './ng-simple-select.component.html',
  styleUrls: ['ng-simple-select.component.scss'],
  host: {
    '(document:click)': 'onDocClick($event)'
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
  public value: any;
  private subscriptions: Subscription[] = [];
  @Input() public displayValue?: string|number;
  @Input() public placeholder?: string = '';
  @Output() public change = new EventEmitter<any>();
  @ContentChildren(NgSimpleSelectOptionComponent)
  private options: QueryList<NgSimpleSelectOptionComponent>;

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
    if (this.disabled) {
      return;
    }
    this.showDropdown = !this.showDropdown;
    this.onTouched();
  }

  private childChanges(str: string) {
    this.showDropdown = false;
    this.value = str;
    this.change.emit(this.value);
    this.onChange(this.value);
  }

  private onDocClick (ev: Event) {
    if (this.isClickOutsideComponent(ev)) {
      this.showDropdown = false;
    }
  }

  writeValue(newVal: any): void {
    if (!this.disabled) {
      // setting dirty state, if ngModel changed and this is not initialisation
      if (this.value && this.value !== newVal) {
        this.onChange(this.value);
      }
      this.value = newVal;
    }
  }

  registerOnChange(fn: (newVal: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onChange = (newVal: any) => {};
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
