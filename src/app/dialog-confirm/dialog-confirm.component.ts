import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss'],
})
export class DialogComfirmComponent{
  data = {
    confirm: false
  };
  
  // Creamos la referencia del MatDIalog 
  constructor(public dialogRef: MatDialogRef<DialogComfirmComponent>) {}

  onSubmit() {
    this.data.confirm = true;
    this.dialogRef.close(this.data);
  }  
}
