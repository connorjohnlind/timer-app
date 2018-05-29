import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerWithEventEmitterComponent } from './timer-with-event-emitter.component';

describe('TimerWithEventEmitterComponent', () => {
  let component: TimerWithEventEmitterComponent;
  let fixture: ComponentFixture<TimerWithEventEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerWithEventEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerWithEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
