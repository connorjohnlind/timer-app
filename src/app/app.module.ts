import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerWithEventEmitterComponent } from './timer-with-event-emitter/timer-with-event-emitter.component';
import { TimerWithServiceComponent } from './timer-with-service/timer-with-service.component';
import { TimerWithServiceControlsComponent } from './timer-with-service/timer-with-service-controls/timer-with-service-controls.component';
import { TimerWithEventEmitterControlsComponent } from './timer-with-event-emitter/timer-with-event-emitter-controls/timer-with-event-emitter-controls.component';
import { TimerWithEventEmitterValueComponent } from './timer-with-event-emitter/timer-with-event-emitter-value/timer-with-event-emitter-value.component';
import { TimerWithServiceValueComponent } from './timer-with-service/timer-with-service-value/timer-with-service-value.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerWithEventEmitterComponent,
    TimerWithServiceComponent,
    TimerWithServiceControlsComponent,
    TimerWithEventEmitterControlsComponent,
    TimerWithEventEmitterValueComponent,
    TimerWithServiceValueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
