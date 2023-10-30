import { Component, OnInit } from '@angular/core';

import { TIMELINE_DATA, COUNTRY_DATA } from './country-listing.data';
import { DatePerCountry, DatePerUser } from './country-listing.interface';

import { MatDialog } from '@angular/material/dialog';
import { DialogCredentialComponent } from '../dialog-credential/dialog-credential.component';
import { DialogComfirmComponent } from '../dialog-confirm/dialog-confirm.component';

import { ActualizarServicio } from '../actualizar.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-country-listing',
  templateUrl: './country-listing.component.html',
  styleUrls: ['./country-listing.component.scss'],
})
export class CountryListingComponent implements OnInit {
  private _data = TIMELINE_DATA;
  private _countryData = COUNTRY_DATA;

  showItems = false;
  dateMap: DatePerCountry[] = [];

  constructor(
    private matDialog: MatDialog,
    private miServicio: ActualizarServicio,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.onOrder();
    this.onSeparete();
    //suscripción para que este atento a escuchar el evento
    this.miServicio.obtenerEvento().subscribe((data) => {
      this.onOrder();
      this.onSeparete();
    });
  }

  private onOrder() {
    this._countryData.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }

  private onSeparete() {
    this.dateMap = [];
    this._countryData.forEach((dataElement) => {
      const item = this.dateMap.find(
        (mapElement) => dataElement.date == mapElement.date
      );
      if (item) {
        item.data.push(dataElement);
      } else {
        this.dateMap.push({ date: dataElement.date, data: [dataElement] });
      }
    });
  }

  openDialogCredential(card_id: string) {
    const dialogRef = this.matDialog.open(DialogCredentialComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Aquí puedes acceder a la información devuelta por el diálogo
      if (result) {
        const card = TIMELINE_DATA.find((element) => element.id == card_id);
        const credentialID = (card.credential.length + 1).toString();
        // añado un id para el nuevo credential
        result.data.credentialID = credentialID;
        card.credential.push(result.data);
        this.toastr.success('Success', 'Credential Added');
      }
    });
  }

  onDeleteCredential(card_id, credentialID) {
    const dialogRef = this.matDialog.open(DialogComfirmComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Aquí puedes acceder a la información devuelta por el diálogo
      console.log(result);
      if (result.confirm) {
        const card = TIMELINE_DATA.find((element) => element.id == card_id);
        const credentialIndex = card.credential.findIndex(
          (element) => element.credentialID == credentialID
        );
        card.credential.splice(credentialIndex, 1);
        this.toastr.success('Success', 'Credential Deleted');
      }
    });
  }

  onDeleteCard(card_id) {
    const dialogRef = this.matDialog.open(DialogComfirmComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Aquí puedes acceder a la información devuelta por el diálogo
      console.log(result);
      if (result.confirm) {
        const cardIndex = TIMELINE_DATA.findIndex(
          (element) => element.id == card_id
        );
        TIMELINE_DATA.splice(cardIndex, 1);
        // Actializamos el render de los cards
        this.onOrder();
        this.onSeparete();
        this.toastr.success('Success', 'Card Deleted');
      }
    });
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
    this.toastr.success('Success', 'ID Copied');
  }
  
}
