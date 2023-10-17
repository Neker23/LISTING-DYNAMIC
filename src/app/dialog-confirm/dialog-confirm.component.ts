import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {UserData, UserCredential} from '../timeline-listing/timeline-listing.interface'
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss'],
})
export class DialogComfirmComponent implements OnInit {
  
  // Creamos la referencia del MatDIalog 
  constructor(public dialogRef: MatDialogRef<DialogComfirmComponent>) {}

  ngOnInit(): void {

  }

  data = {
    confirm: false
  };


  onSubmit() {
    this.data.confirm = true;
    this.dialogRef.close(this.data);
  }  

}
