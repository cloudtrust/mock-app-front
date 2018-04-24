import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-poc',
  templateUrl: './bootstrap-poc.component.html',
  styleUrls: ['./bootstrap-poc.component.css']
})
export class BootstrapPocComponent implements OnInit {
	
  items: string[] = [
    'It seems',
    'to work',
    'just fine!'
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
