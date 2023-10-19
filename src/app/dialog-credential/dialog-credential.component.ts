import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CHANGE, DOCUMENTS_TYPE, TYPE_DEVICES } from './dialog-user.data';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-credential.component.html',
  styleUrls: ['./dialog-credential.component.scss'],
})
export class DialogCredentialComponent implements OnInit {
  documents = DOCUMENTS_TYPE;
  typeItems = TYPE_DEVICES;
  changeType = CHANGE;

  credentialForm = this.formBuilder.group({
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

  constructor(
    public dialogRef: MatDialogRef<DialogCredentialComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.credentialForm.valid;
    this.credentialForm.controls.typeItem.valueChanges.subscribe((value) => {});
  }

  onSubmit() {
    const credentialForm = this.credentialForm.controls;
    switch (credentialForm.typeItem.value) {
      case 'document':
        let document = {
          data: {
            credentialID: '',
            type: 'document',
            title: 'Credencials/Identity document',
            documentType:
              this.documents[
                credentialForm.document.controls.documentType
                  .value
              ].nombre,
            documentNumber:
              credentialForm.document.controls.documentNumber
                .value,
            verified:
              credentialForm.document.controls.verified.value,
          },
        };
        this.dialogRef.close(document);
        break;

      case 'phone':
        let phone = {
          data: {
            credentialID: '',
            type: 'phone',
            title: 'Credencials/Phone',
            phoneNumber:
              credentialForm.phone.controls.phoneNumber.value,
          },
        };
        this.dialogRef.close(phone);
        break;

      case 'address':
        let address = {
          data: {
            credentialID: '',
            type: 'address',
            title: 'Credencials/Address',
            address:
              credentialForm.address.controls.address.value,
            state: credentialForm.address.controls.state.value,
            country:
              credentialForm.address.controls.country.value,
          },
        };
        this.dialogRef.close(address);
        break;

      case 'change':
        let change = {
          data: {
            credentialID: '',
            type: 'change',
            title:
              'Credencials/Personal information/Basic info/' +
              credentialForm.change.controls.title.value,
            before: credentialForm.change.controls.before.value,
            after: credentialForm.change.controls.after.value,
          },
        };
        this.dialogRef.close(change);
        break;

      default:
        alert('No hay nada');
    }
  }
}
