import { Component, OnInit } from '@angular/core';

import { ServerCommService } from '../server-comm.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      firstName: {
        title: 'First name'
      },
      lastName: {
        title: 'Last name'
      },
      departments: {
        title: 'Department ID',
        valuePrepareFunction: function(d) {
          return d[0]["id"];
        }
      }
    }
  };

  data = [];

  constructor(private backend : ServerCommService) {
  }

  ngOnInit() {
    this.backend.getDoctors().subscribe(d => this.data = d);
  }

}
