import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMakeComponent } from './request-make.component';

describe('RequestMakeComponent', () => {
  let component: RequestMakeComponent;
  let fixture: ComponentFixture<RequestMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
