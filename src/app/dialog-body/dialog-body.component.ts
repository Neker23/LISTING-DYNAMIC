import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.myForm)
  }

  
  typeItems = ['document','phone','address','change']
  documents = [{id: '01', nombre: 'Goverment-issued ID'}, {id: '02', nombre: 'Social security'}]

  myForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('Credencials/Identity document'),
    typeDoc: new FormControl('', Validators.required),
    documentType: new FormControl(''),
    documentNumber: new FormControl(''),
    verified: new FormControl(true),
  });


  onSubmit(){
    console.log(this.myForm.value)
    this.myForm.controls.id
  }



}
