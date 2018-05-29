import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      ajax: {
        "url": "http://localhost:8000/doctors",
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
        title: 'Department ID',
        data: 'departments[0].id'
      }]
    };
  }

}
