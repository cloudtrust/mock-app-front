import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { ServerCommPocService } from '../server-comm-poc.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  string = 'Loading...';

  constructor(private hospitalService : ServerCommPocService) {
  }

  ngOnInit() {
    this.loadHospitals();
  }
  
  loadHospitals(): void {
    this.hospitalService.getHospitals().subscribe(hospitals => this.string = JSON.stringify(hospitals));
  }
}
