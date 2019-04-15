import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicRequestsComponent } from './mechanic-requests.component';

describe('MechanicRequestsComponent', () => {
  let component: MechanicRequestsComponent;
  let fixture: ComponentFixture<MechanicRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
