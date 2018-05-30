import { Component, OnInit } from '@angular/core';

import { ServerCommService } from '../server-comm.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      patientAvsNumber: {
        title: 'Patient AVS Number'
      },
      doctorId: {
        title: 'Doctor ID'
      },
      data: {
        title: 'Data'
      }
    }
  };

  data = [];

  constructor(private backend : ServerCommService) {
  }

  ngOnInit() {
    this.backend.getMedicalFiles().subscribe(f => this.data = f);
  }

}
