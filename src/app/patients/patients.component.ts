import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      ajax: {
        "url": "http://localhost:8000/patients",
        "dataSrc": ""
      },
      lengthChange: false,
      searching: false,
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First Name',
        data: 'firstName'
      }, {
        title: 'Last Name',
        data: 'lastName'
      }, {
        title: 'Birth Date',
        data: function(row, type, val, meta) {
          return row.birthDate.substring(0, 10);
        }
      }, {
        title: 'AVS Number',
        data: 'avsNumber'
      }]
    };
  }

}
