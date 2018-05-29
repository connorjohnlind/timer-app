import { Component, OnInit } from '@angular/core';
import {TimerService} from "./timer.service";

@Component({
  selector: 'app-timer-with-service',
  templateUrl: './timer-with-service.component.html',
  styleUrls: ['./timer-with-service.component.css'],
  providers: [TimerService]
})

export class TimerWithServiceComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
