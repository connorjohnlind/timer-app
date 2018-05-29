import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerWithEventEmitterControlsComponent } from './timer-with-event-emitter-controls.component';

describe('TimerWithEventEmitterControlsComponent', () => {
  let component: TimerWithEventEmitterControlsComponent;
  let fixture: ComponentFixture<TimerWithEventEmitterControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerWithEventEmitterControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerWithEventEmitterControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
