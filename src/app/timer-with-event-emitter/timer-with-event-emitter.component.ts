import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-with-event-emitter',
  templateUrl: './timer-with-event-emitter.component.html',
  styleUrls: ['./timer-with-event-emitter.component.css']
})
export class TimerWithEventEmitterComponent implements OnInit {
  value: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onIntervalEventFire(firedNumber: number) {
    this.value = firedNumber;
  }

}
