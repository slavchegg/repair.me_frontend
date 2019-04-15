import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicSpecializationComponent } from './mechanic-specialization.component';

describe('MechanicSpecializationComponent', () => {
  let component: MechanicSpecializationComponent;
  let fixture: ComponentFixture<MechanicSpecializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicSpecializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
