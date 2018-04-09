import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sse-poc',
  templateUrl: './sse-poc.component.html',
  styleUrls: ['./sse-poc.component.css']
})
export class SsePocComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  establishSSEConnection(): void {
    console.info(`todo`)
  }

}
