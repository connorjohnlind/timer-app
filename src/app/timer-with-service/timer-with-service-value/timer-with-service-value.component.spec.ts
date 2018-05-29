import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerWithServiceValueComponent } from './timer-with-service-value.component';

describe('TimerWithServiceValueComponent', () => {
  let component: TimerWithServiceValueComponent;
  let fixture: ComponentFixture<TimerWithServiceValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerWithServiceValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerWithServiceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
