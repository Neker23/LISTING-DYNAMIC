import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerTimelineComponent } from './customer-timeline/customer-timeline.component';
import { TimelineListingComponent } from './timeline-listing/timeline-listing.component';
import { DialogCredentialComponent } from './dialog-credential/dialog-credential.component';
import { DateFormatPipe } from './date-format.pipe';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { ActualizarServicio } from './actualizar.service';


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
import { ToastrModule } from 'ngx-toastr';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CustomerTimelineComponent,
    TimelineListingComponent,
    DialogCredentialComponent,
    DialogUserComponent,
    DateFormatPipe,
    DialogComfirmComponent
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
    MatSlideToggleModule,
    ToastrModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [ActualizarServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
