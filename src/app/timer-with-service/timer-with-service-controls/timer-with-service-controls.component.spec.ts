import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerWithServiceControlsComponent } from './timer-with-service-controls.component';

describe('TimerWithServiceControlsComponent', () => {
  let component: TimerWithServiceControlsComponent;
  let fixture: ComponentFixture<TimerWithServiceControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerWithServiceControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerWithServiceControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
