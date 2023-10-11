import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogBodyComponent}  from '../dialog-body/dialog-body.component'

@Component({
  selector: 'app-customer-timeline',
  templateUrl: './customer-timeline.component.html',
  styleUrls: ['./customer-timeline.component.scss']
})
export class CustomerTimelineComponent {



  constructor(private matDialog: MatDialog){ 
  }
    
  openDialog(){

    this.matDialog.open(DialogBodyComponent,{
      width: '450px',
    })
  }
      
  
}
