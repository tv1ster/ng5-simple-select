import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnChanges{
  title = 'app';
  test1 = 1;
  test2 = 2;

  testModel = '';
  ngOnChanges(s) {
    console.log(s);
  }
}
