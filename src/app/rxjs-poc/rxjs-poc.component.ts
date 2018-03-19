import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-rxjs-poc',
  templateUrl: './rxjs-poc.component.html',
  styleUrls: ['./rxjs-poc.component.css']
})
export class RxjsPocComponent implements OnInit {

  exampleString = 'Click on me!';

  constructor() { }

  ngOnInit() {
  }
  
  changeValueAsync(): void {
    of("RxJS works!").subscribe(newString => this.exampleString = newString);
  }
}
