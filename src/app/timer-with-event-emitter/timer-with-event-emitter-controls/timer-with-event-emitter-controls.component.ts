import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timer-with-event-emitter-controls',
  templateUrl: './timer-with-event-emitter-controls.component.html',
  styleUrls: ['./timer-with-event-emitter-controls.component.css']
})
export class TimerWithEventEmitterControlsComponent implements OnInit {
  @Output() intervalEventFire = new EventEmitter<number>();

  private interval;
  value: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(()=>{
      this.value += 1;
      this.intervalEventFire.emit(this.value);
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }

}
