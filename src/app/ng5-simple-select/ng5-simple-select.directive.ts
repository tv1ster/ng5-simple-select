import {Directive, ViewContainerRef, AfterContentInit, ElementRef, ComponentFactoryResolver, Renderer2} from '@angular/core';
import {Ng5SimpleSelectInputComponent} from '../ng5-simple-select-input/ng5-simple-select-input.component';
import {Ng5SimpleSelectDropdownComponent} from '../ng5-simple-select-dropdown/ng5-simple-select-dropdown.component';

@Directive({
  selector: 'ng5-simple-select'
})
export class Ng5SimpleSelectDirective implements AfterContentInit{
  inputRef;
  dropdownRef;

  constructor(private view: ViewContainerRef,
              private el: ElementRef,
              private resolver: ComponentFactoryResolver) { }

  ngAfterContentInit () {
    console.log(this.el);
    console.log(this.view);
    let el = Object.assign({}, this.el);
    let input = this.resolver.resolveComponentFactory(Ng5SimpleSelectInputComponent);
    let dropdown = this.resolver.resolveComponentFactory(Ng5SimpleSelectDropdownComponent);
    this.inputRef = this.view.createComponent(input);
    this.dropdownRef = this.view.createComponent(dropdown);
    this.dropdownRef.instance.optionsTemplates = el
  }

}
