import { Component, OnInit } from '@angular/core';

import { EventSourcePolyfill } from 'ng-event-source';

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
    let eventSource = new EventSourcePolyfill('http://localhost:8000/events/channel-1', {

    });
    eventSource.onmessage = (data => {
        console.info(data);
    });
    eventSource.onopen = (a) => {
        console.info("SSE connection established!");
    };
    eventSource.onerror = (e) => {
      console.error(e);
    }
  }

}
