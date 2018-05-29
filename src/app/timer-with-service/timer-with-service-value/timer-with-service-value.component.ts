import {Component, OnDestroy, OnInit} from '@angular/core';
import {TimerService} from "../timer.service";
import {Observable} from "rxjs/internal/Observable";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-timer-with-service-value',
  templateUrl: './timer-with-service-value.component.html',
  styleUrls: ['./timer-with-service-value.component.css']
})
export class TimerWithServiceValueComponent implements OnInit, OnDestroy {
  private timerSubscription: Subscription;
  time: number;

  constructor(private timerService: TimerService) {
  }

  ngOnInit() {
    this.time = this.timerService.currentTime();
    this.timerSubscription = this.timerService.getTimer()
      .subscribe(time => this.time = time);
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}
