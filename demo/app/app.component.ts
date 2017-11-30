import { Component, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnChanges{
  title = 'app';
  test1 = 1;
  test2 = 2;

  testModel = '';
  arrayOptions = [{
    displayValue: 'displayValue1',
    value: 'value1'
  },{
    displayValue: 'displayValue2',
    value: 'value2'
  },{
    displayValue: 'displayValue3',
    value: 'value3'
  }];
  arrayModel;
  ngOnChanges(s) {
    console.log(s);
  }
  log () {
  }
  addSmthIntoModel() {
    this.arrayOptions.push({
      displayValue: 'displayValue4',
      value: 'value4'
    });
  }
}
