import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDetialsComponent } from './passenger-detials.component';

describe('PassengerDetialsComponent', () => {
  let component: PassengerDetialsComponent;
  let fixture: ComponentFixture<PassengerDetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerDetialsComponent]
    });
    fixture = TestBed.createComponent(PassengerDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
