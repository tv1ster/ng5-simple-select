import {Component, OnInit, OnChanges, ElementRef} from '@angular/core';

@Component({
  selector: 'ng-simple-select',
  templateUrl: './ng-simple-select.component.html',
  styleUrls: ['ng-simple-select.component.scss'],
  host: {
    '(document:click)': 'onDocClick($event)',
  }
})
export class NgSimpleSelectComponent implements OnInit, OnChanges {
  public showDropdown: boolean;

  constructor(private element: ElementRef) {
  }

  ngOnChanges() {
  }

  ngOnInit() {
  }

  public toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  private onDocClick (ev: Event) {
    if (this.isClickOutsideComponent(ev)) {
      this.showDropdown = false;
    }
  }

  private isClickOutsideComponent(ev: Event) {
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
