import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerTimelineComponent } from './customer-timeline/customer-timeline.component';
import { TimelineListingComponent } from './timeline-listing/timeline-listing.component';
import { DateFormatPipe } from './date-format.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CustomerTimelineComponent,
    TimelineListingComponent,
    DateFormatPipe
  ],
  imports: [
    MatMenuModule,
    MatButtonModule,
    BrowserModule,
    MatIconModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
