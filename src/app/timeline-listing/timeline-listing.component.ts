import { Component, OnInit } from '@angular/core';
import { TIMELINE_DATA } from './timeline-listing.data';
import { DatePerUser } from './timeline-listing.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-timeline-listing',
  templateUrl: './timeline-listing.component.html',
  styleUrls: ['./timeline-listing.component.scss'],
})
export class TimelineListingComponent implements OnInit {
  private _data = TIMELINE_DATA;
  dateMap: DatePerUser[] = [];
  showItems = false;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.onOrder();
    this.onSeparete();
    this.onRender();
  }

  onOrder() {
    this._data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    console.log(this._data);
  }

  onSeparete() {
    this._data.forEach((dataElement) => {
      // index = this.dateMap.findIndex(
      //   (mapElement) => dataElement.date == mapElement['date']
      // );
      const item = this.dateMap.find(
        (mapElement) => dataElement.date == mapElement.date
      );
      if (item) {
        item.data.push(dataElement);
      } else {
        this.dateMap.push({ date: dataElement.date, data: [dataElement] });
      }
    });

    console.log(this.dateMap);
  }

  onRender() {
    this.showItems = !this.showItems;
  }

  onCopy(id) {
    const textoACopiar = document.getElementById(id);
    // Crear un rango de selección
    const rango = document.createRange();
    rango.selectNode(textoACopiar);
    // Seleccionar el texto en el rango
    window.getSelection().removeAllRanges(); // Limpiar selecciones anteriores
    window.getSelection().addRange(rango);
    // Intentar copiar el texto al portapapeles
      document.execCommand('copy');
    // Limpiar la selección
    window.getSelection().removeAllRanges();
  }

  openDialog2(card_id){
    console.log('dialog 2 funcionando')
    const dialogRef = this.matDialog.open(DialogBodyComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Aquí puedes acceder a la información devuelta por el diálogo
      if (result) {
        const item = TIMELINE_DATA.find((element) => element.id == card_id);
        item.credential.push(result.data);
      }
    });
  }
  
}
