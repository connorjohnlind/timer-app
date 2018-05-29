import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerWithEventEmitterValueComponent } from './timer-with-event-emitter-value.component';

describe('TimerWithEventEmitterValueComponent', () => {
  let component: TimerWithEventEmitterValueComponent;
  let fixture: ComponentFixture<TimerWithEventEmitterValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerWithEventEmitterValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerWithEventEmitterValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
