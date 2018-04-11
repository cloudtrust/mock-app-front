import { Component, OnInit } from '@angular/core';

import { EventSourcePolyfill } from 'ng-event-source';

@Component({
  selector: 'app-sse-poc',
  templateUrl: './sse-poc.component.html',
  styleUrls: ['./sse-poc.component.css']
})
export class SsePocComponent implements OnInit {

  sseEstablished: boolean = false;
  buttonLabel: string = "Establish";
  lastMessage: string = "";

  constructor() { }

  ngOnInit() {
  }

  establishSSEConnection(): void {
    if (!this.sseEstablished) {
      this.sseEstablished = true;
      this.buttonLabel = "Establishing..."
      let eventSource = new EventSourcePolyfill('http://localhost:3000/events/channel-1', {
      });
      eventSource.onmessage = (data => {
          console.info(data);
          this.lastMessage = data.data;
      });
      eventSource.onopen = (a) => {
        this.buttonLabel = "Established";
      };
      eventSource.onerror = (e) => {
        console.error(e);
        this.sseEstablished = false;
      }
    }
  }

}
