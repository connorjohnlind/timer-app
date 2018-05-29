import {Injectable} from "@angular/core";
import { Observable, interval, of, merge, Subject } from 'rxjs';
import {map, startWith} from "rxjs/operators";

@Injectable()
export class TimerService {
  private interval;
  timer$ = new Subject();
  time: number = 0;

  constructor() {
  }

  startTimer() {
    this.interval = setInterval(()=> {
      this.time += 1;
      this.timer$.next(this.time);
    }, 1000);
  }

  clearTimer() {
    clearInterval(this.interval);
  }

  getTimer(): Subject<any> {
    return this.timer$;
  }

  currentTime(): number {
    return this.time;
  }
}
