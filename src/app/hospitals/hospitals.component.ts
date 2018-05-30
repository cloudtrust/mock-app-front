import { Component, OnInit } from '@angular/core';

import { ServerCommService } from '../server-comm.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      city: {
        title: 'City'
      }
    }
  };

  data = [];

  constructor(private serverCommService : ServerCommService) {
  }

  ngOnInit() {
    this.serverCommService.getHospitals().subscribe(hospitals => this.data = hospitals);
  }

}
