import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInputComponent } from './signal-input.component';

describe('SignalInputComponent', () => {
  let component: SignalInputComponent;
  let fixture: ComponentFixture<SignalInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInputComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('count', 0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should double count input', () => {
    // arrange
    const count = 4;
    const expectedDoubledCount = 8;

    // act
    fixture.componentRef.setInput('count', count);

    // assert
    expect(component.doubleCount()).toEqual(expectedDoubledCount);
  });
});
