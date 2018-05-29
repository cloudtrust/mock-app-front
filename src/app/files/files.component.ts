import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() {
  }

  ngOnInit() {
    this.dtOptions = {
      ajax: {
        "url": "http://localhost:8000/files",
        "dataSrc": ""
      },
      lengthChange: false,
      searching: false,
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'Patient AVS Number',
        data: 'patientAvsNumber'
      }, {
        title: 'Doctor ID',
        data: 'doctorId'
      }, {
        title: 'Data',
        data: 'data'
      }]
    };
  }

}
