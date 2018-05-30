import { Component, OnInit } from '@angular/core';

import { ServerCommService } from '../server-comm.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

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
      birthDate: {
        title: 'Birthdate'
      },
      avsNumber: {
        title: 'AVS Number'
      }
    }
  };

  data = [];

  constructor(private backend : ServerCommService) {
  }

  ngOnInit() {
    this.backend.getPatients().subscribe(p => this.data = p);
  }

}
