import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { TIMELINE_DATA } from '../timeline-listing/timeline-listing.data';
import { ActualizarServicio } from '../actualizar.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-timeline',
  templateUrl: './customer-timeline.component.html',
  styleUrls: ['./customer-timeline.component.scss'],
})
export class CustomerTimelineComponent {
  constructor(
    private matDialog: MatDialog,
    private miServicio: ActualizarServicio,
    private toastr: ToastrService
  ) {}

  openDialogUser() {
    
    const dialogRef = this.matDialog.open(DialogUserComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      try {
        if (result) {
          TIMELINE_DATA.push(result);
          this.toastr.success('Success', 'Credential Added');
        }
        // emite el evento desde el padre
        this.miServicio.emitirEvento()
      } catch (error) {
        this.toastr.error('Error', "Credential weren't Added")
      }
    });
  }
}
