import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { ServerCommService } from '../server-comm.service';

@Component({
  selector: 'app-rxjs-poc',
  templateUrl: './rxjs-poc.component.html',
  styleUrls: ['./rxjs-poc.component.css']
})
export class RxjsPocComponent implements OnInit {

  exampleString = 'Click on me!';

  constructor(private hospitalService : ServerCommService) {
  }

  ngOnInit() {
  }
  
  changeValueAsync(): void {
    this.hospitalService.getHospitals().subscribe(hospitals => this.exampleString = hospitals.length + " hospital(s)");
  }
}
