import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineListingComponent } from './timeline-listing.component';

describe('TimelineListingComponent', () => {
  let component: TimelineListingComponent;
  let fixture: ComponentFixture<TimelineListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineListingComponent]
    });
    fixture = TestBed.createComponent(TimelineListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
