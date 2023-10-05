import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTimelineComponent } from './customer-timeline.component';

describe('CustomerTimelineComponent', () => {
  let component: CustomerTimelineComponent;
  let fixture: ComponentFixture<CustomerTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerTimelineComponent]
    });
    fixture = TestBed.createComponent(CustomerTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
