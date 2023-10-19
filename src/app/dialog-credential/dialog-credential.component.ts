import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { NAME_CHANGES, DOCUMENTS_TYPE, TYPE_DEVICES } from './dialog-user.data';
import { CredentialType } from '../core/enums/credential-type.enum';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-credential.component.html',
  styleUrls: ['./dialog-credential.component.scss'],
})
export class DialogCredentialComponent implements OnInit {
  documents = DOCUMENTS_TYPE;
  typeItems = TYPE_DEVICES;
  nameChanges = NAME_CHANGES;
  credencialDocumentKey = CredentialType.Document;
  credencialKeys = CredentialType;

  credentialForm = this.formBuilder.group({
    typeItem: ['', Validators.required],
    document: this.formBuilder.group({
      documentType: [''],
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

  ngOnInit(): void {}

  onSubmit() {
    const credentialForm = this.credentialForm.controls;

    switch (credentialForm.typeItem.value) {
      case CredentialType.Document:
        const documentControl = credentialForm.document.controls;
        const document = {
          data: {
            credentialID: '',
            type: CredentialType.Document,
            title: 'Credencials/Identity document',
            documentType:
              this.documents[documentControl.documentType.value].nombre,
            documentNumber: documentControl.documentNumber.value,
            verified: documentControl.verified.value,
          },
        };
        this.dialogRef.close(document);
        break;

      case 'phone':
        const phone = {
          data: {
            credentialID: '',
            type: 'phone',
            title: 'Credencials/Phone',
            phoneNumber: credentialForm.phone.controls.phoneNumber.value,
          },
        };
        this.dialogRef.close(phone);
        break;

      case 'address':
        const addressControl = credentialForm.address.controls;
        const address = {
          data: {
            credentialID: '',
            type: 'address',
            title: 'Credencials/Address',
            address: addressControl.address.value,
            state: addressControl.state.value,
            country: addressControl.country.value,
          },
        };
        this.dialogRef.close(address);
        break;

      case 'change':
        const changeControl = credentialForm.change.controls;
        const change = {
          data: {
            credentialID: '',
            type: 'change',
            title:
              'Credencials/Personal information/Basic info/' +
              changeControl.title.value,
            before: changeControl.before.value,
            after: changeControl.after.value,
          },
        };
        this.dialogRef.close(change);
        break;

      default:
        alert('No hay nada');
    }
  }
}
