import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicRegistrationComponent } from './mechanic-registration.component';

describe('MechanicRegistrationComponent', () => {
  let component: MechanicRegistrationComponent;
  let fixture: ComponentFixture<MechanicRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
