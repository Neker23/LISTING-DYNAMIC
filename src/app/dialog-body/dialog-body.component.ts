import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss'],
})
export class DialogBodyComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>) {}

  ngOnInit(): void {
    console.log(this.myForm);
    this.myForm.valid;
    this.myForm.controls.typeItem.valueChanges.subscribe((value)=>{
      console.log('cambio el type', value)
    })

  }

  typeItems = ['document', 'phone', 'address', 'change'];

  documents = [
    { id: '0', nombre: 'Goverment-issued ID' },
    { id: '1', nombre: 'Social security' },
  ];

  change = [
    { id: '01', nombre: 'Fist name' },
    { id: '02', nombre: 'Full name' },
  ];

  myForm = new FormGroup({
    typeItem: new FormControl('', Validators.required),
    document: new FormGroup({
      documentType: new FormControl(''),
      documentNumber: new FormControl(''),
      verified: new FormControl(true),
    }),
    phone: new FormGroup({
      phoneNumber: new FormControl(''),
    }),
    address: new FormGroup({
      address: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
    }),
    change: new FormGroup({
      title: new FormControl(''),
      before: new FormControl(''),
      after: new FormControl(''),
    }),
  });



  onSubmit() {
    switch (this.myForm.controls.typeItem.value) {
      case 'document':
        let document = {
          data: {
            type: 'document',
            title: 'Credencials/Identity document',
            documentType:
              this.documents[
                this.myForm.controls.document.controls.documentType.value
              ].nombre,
            documentNumber:
              this.myForm.controls.document.controls.documentNumber.value,
            verified: this.myForm.controls.document.controls.verified.value,
          },
        };
        this.dialogRef.close(document);
        break;

      case 'phone':
        let phone = {
          data: {
            type: 'phone',
            title: 'Credencials/Phone',
            phoneNumber: this.myForm.controls.phone.controls.phoneNumber.value,
          },
        };
        this.dialogRef.close(phone);
        break;

      case 'address':
        let address = {
          data: {
            type: 'address',
            title: 'Credencials/Address',
            address: this.myForm.controls.address.controls.address.value,
            state: this.myForm.controls.address.controls.state.value,
            country: this.myForm.controls.address.controls.country.value,
          },
        };
        this.dialogRef.close(address);
        break;

      case 'change':
        let change = {
          data: {
            type: 'change',
            title:
              'Credencials/Personal information/Basic info/' +
              this.myForm.controls.change.controls.title.value,
            before: this.myForm.controls.change.controls.before.value,
            after: this.myForm.controls.change.controls.after.value,
          },
        };
        this.dialogRef.close(change);
        break;

      default:
        alert('No hay nada');
    }
  };

  onTypeChange(changed: MatSelectChange){
    console.log('event selection',changed.value)
  }


}
