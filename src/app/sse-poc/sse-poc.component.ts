import { Component, OnInit } from '@angular/core';

import { EventSourcePolyfill } from 'ng-event-source';

@Component({
  selector: 'app-sse-poc',
  templateUrl: './sse-poc.component.html',
  styleUrls: ['./sse-poc.component.css']
})
export class SsePocComponent implements OnInit {

  eventSource: EventSourcePolyfill;

  connectButtonLabel: string = "Connect";
  disconnectButtonLabel: string = "Disconnect";
  lastMessage: string = "";

  constructor() { }

  ngOnInit() {
  }

  isConnectingOrConnected(): boolean {
    return this.eventSource &&
      (this.eventSource.readyState == this.eventSource.CONNECTING || this.eventSource.readyState == this.eventSource.OPEN);
  }

  isConnected(): boolean {
    return this.eventSource && this.eventSource.readyState == this.eventSource.OPEN;
  }

  isDisconnected(): boolean {
    return !this.eventSource || this.eventSource.readyState == this.eventSource.CLOSED;
  }

  connect(): void {
    if (this.isDisconnected()) {
      console.info("SSE connection in progress...");
      this.eventSource = new EventSourcePolyfill('http://localhost:3000/events/channel-1', {
      });
      this.eventSource.onmessage = (data => {
          console.info(data);
          this.lastMessage = data.data;
      });
      this.eventSource.onopen = (a) => {
        this.updateLabel();
        console.info("SSE connection established!");
      };
      this.eventSource.onerror = (e) => {
        console.error(e);
        this.updateLabel();
      }
      this.updateLabel();
    }
  }

  disconnect(): void {
    if (this.isConnectingOrConnected()) {
      var message = this.isConnected() ? "SSE connection closed." : "SSE connection aborted.";
      this.eventSource.close();
      this.updateLabel();
      console.info(message)
    }
  }

  updateLabel(): void {
    if (this.eventSource) {
      switch (this.eventSource.readyState) {
        case this.eventSource.CONNECTING:
          this.connectButtonLabel = "Connecting...";
          return;
        case this.eventSource.OPEN:
          this.connectButtonLabel = "Connected";
          return;
      }
    }
    this.connectButtonLabel = "Connect";
  }

}
