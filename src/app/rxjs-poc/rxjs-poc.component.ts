import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { ServerCommPocService } from '../server-comm-poc.service';

@Component({
  selector: 'app-rxjs-poc',
  templateUrl: './rxjs-poc.component.html',
  styleUrls: ['./rxjs-poc.component.css']
})
export class RxjsPocComponent implements OnInit {

  exampleString = 'Click on me!';

  constructor(private hospitalService : ServerCommPocService) {
  }

  ngOnInit() {
  }
  
  changeValueAsync(): void {
    this.hospitalService.getHospitals().subscribe(hospitals => this.exampleString = hospitals.length + " hospital(s)");
  }
}
