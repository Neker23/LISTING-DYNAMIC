import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

import {COUNTRIES_FLAGS} from './dialog-user.countries'

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss'],
})
export class DialogUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogUserComponent>) {}

  countryData = COUNTRIES_FLAGS;

  ngOnInit(): void {
  
  }

  devices = [
    { id: '0', nombre: 'Windows', device_icon: 'desktop_windows'},
    { id: '1', nombre: 'Macbook PRO', device_icon: 'laptop_mac'},
    { id: '2', nombre: 'Galaxy S23', device_icon: 'smartphone'},
    { id: '3', nombre: 'iPhone Pro', device_icon: 'phone_iphone'},
  ];

  myUserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    photoURL: new FormControl('https://picsum.photos/200/300'),
    device: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  });

  onSubmit() {
    const uuid = this.generateUUID();
    const data = {
      id:          uuid,
      username:    this.myUserForm.controls.username.value,
      photoURL:    this.myUserForm.controls.photoURL.value,
      flag:        this.myUserForm.controls.country.value,
      device:      this.devices[this.myUserForm.controls.device.value].nombre,
      device_icon: this.devices[this.myUserForm.controls.device.value].device_icon,
      localization:(this.myUserForm.controls.country.value).toUpperCase() + ', '+ this.myUserForm.controls.city.value,
      time:        this.myUserForm.controls.time.value,
      date:        this.myUserForm.controls.date.value,
      credential:  [],
    }
    // console.log(data)
    // console.log(data)
    // Se envia data al otro componente
    this.dialogRef.close(data);
  };

  onTypeChange(changed: MatSelectChange){
    console.log('event selection',changed.value)
  }

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0;
      var v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
