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
        title: 'Hospital ID',
        valuePrepareFunction: function(d) {
          return d["id"];
        }
      }
    },
    attr: {
      class: 'table table-bordered table-striped table-hover table-sm'
    }
  };

  data = [];

  constructor(private backend : ServerCommService) {
  }

  ngOnInit() {
    this.backend.getDepartments().subscribe(d => this.data = d);
  }

}
