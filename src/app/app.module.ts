import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerTimelineComponent } from './customer-timeline/customer-timeline.component';
import { TimelineListingComponent } from './timeline-listing/timeline-listing.component';
import { DateFormatPipe } from './date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CustomerTimelineComponent,
    TimelineListingComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
