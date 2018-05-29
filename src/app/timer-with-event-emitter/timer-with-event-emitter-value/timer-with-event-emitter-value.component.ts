import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer-with-event-emitter-value',
  templateUrl: './timer-with-event-emitter-value.component.html',
  styleUrls: ['./timer-with-event-emitter-value.component.css']
})
export class TimerWithEventEmitterValueComponent implements OnInit {
  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

}
