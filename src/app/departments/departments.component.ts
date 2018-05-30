import { Component, OnInit } from '@angular/core';

import { ServerCommService } from '../server-comm.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      hospital: {
        title: 'Hospital ID'
      }
    }
  };

  data = [];

  constructor(private backend : ServerCommService) {
  }

  ngOnInit() {
    this.backend.getDepartments().subscribe(d => this.data = d);
  }

}
