import { Component, OnInit } from '@angular/core';
import {TimerService} from "../timer.service";

@Component({
  selector: 'app-timer-with-service-controls',
  templateUrl: './timer-with-service-controls.component.html',
  styleUrls: ['./timer-with-service-controls.component.css']
})
export class TimerWithServiceControlsComponent implements OnInit {
  constructor(private timerService: TimerService) { }

  ngOnInit() {
  }

  onStart() {
    this.timerService.startTimer();
  }

  onStop() {
    this.timerService.clearTimer();
  }

}
