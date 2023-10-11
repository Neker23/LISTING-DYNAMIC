import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerTimelineComponent } from './customer-timeline/customer-timeline.component';
import { TimelineListingComponent } from './timeline-listing/timeline-listing.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { DateFormatPipe } from './date-format.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CustomerTimelineComponent,
    TimelineListingComponent,
    DialogBodyComponent,
    DateFormatPipe
  ],
  imports: [
    MatMenuModule,
    MatButtonModule,
    BrowserModule,
    MatIconModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
