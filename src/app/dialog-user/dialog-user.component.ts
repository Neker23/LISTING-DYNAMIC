// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder } from '@angular/forms';

// Third party dependencies
// ...

// You custom dependencies
import { COUNTRIES_FLAGS, DEVICES } from './dialog-user.data';
import { generateUUID } from '../utils/generators.util';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss'],
})
export class DialogUserComponent implements OnInit {
  // private variables

  // public variables
  devices = DEVICES;
  countryData = COUNTRIES_FLAGS;
  // userForm: FormGroup<{ username: FormControl }>;
  userForm = this.formBuilder.group({
    username: ['', Validators.required],
    photoURL: ['https://picsum.photos/200/300'],
    device: ['', Validators.required],
    time: ['', Validators.required],
    date: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
  });

  // Inputs, Outputs, Viewchild and Viewchildren

  // Constructor
  constructor(
    private dialogRef: MatDialogRef<DialogUserComponent>,
    private formBuilder: FormBuilder
  ) {}

  // Angular lifecycles
  ngOnInit(): void {}

  // Methods
  onSubmit() {
    if (!this.userForm.valid) return;

    const data = this.getData();
    // Se envia data al otro componente
    this.dialogRef.close(data);
  }
  private getData() {
    const uuid = generateUUID();
    const controls = this.userForm.controls;
    const device = this.devices[controls.device.value];
    const country = controls.country.value;
    return {
      id: uuid,
      username: controls.username.value,
      photoURL: controls.photoURL.value,
      flag: country,
      device: device.nombre,
      device_icon: device.device_icon,
      localization: country.toUpperCase() + ', ' + controls.city.value,
      time: controls.time.value,
      date: controls.date.value,
      credential: [],
    };
  }
}
