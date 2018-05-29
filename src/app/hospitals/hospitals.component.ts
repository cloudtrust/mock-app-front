import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() {
  }

  ngOnInit() {
    this.dtOptions = {
      ajax: {
        "url": "http://localhost:8000/hospitals",
        "dataSrc": ""
      },
      lengthChange: false,
      searching: false,
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'Name',
        data: 'name'
      }, {
        title: 'City',
        data: 'city'
      }]
    };
  }

}
