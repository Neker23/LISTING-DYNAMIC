import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline-listing',
  templateUrl: './timeline-listing.component.html',
  styleUrls: ['./timeline-listing.component.scss'],
})
export class TimelineListingComponent {
  data = [
    {
      username: 'Alicia Stanger, updated the profile',
      photoURL: '',
      id: '635AAD33-05E8-433B-9504-B293587800D4',
      date: '2023-10-05',
      credential: [
        {
          type: 'address',
          title: 'Credencials/Address',
          address: '10134 NW 138 Street Suite 201-B',
          state: 'Miami, Florida 33131',
          country: 'United States',
        },
      ],
    },
    {
      username: 'Jhon Brown, created the profile',
      photoURL: '',
      id: '635AAD33-05E8-433B-9504-B293587800D4',
      date: '2021-04-02',
    },
    {
      username: 'Sijmen Immens, replaced the credential',
      photoURL: '',
      id: '635AAD33-05E8-433B-9504-B293587800D4',
      date: '2021-08-14',
      credential: [
        {
          type: 'document',
          title: 'Credencials/Identity document',
          documentType: 'Goverment-issued ID',
          documentNumber: '987543219012761',
          verified: false,
        },
      ],
    },
    {
      username: 'Alicia Stanger, updated the profile',
      photoURL: '',
      id: '635AAD33-05E8-433B-9504-B293587800D4',
      date: '2023-10-02',
      credential: [
        {
          type: 'change',
          title: 'Credencials/Personal information/Basic info/Full name',
          before: 'Julian Romero',
          after: 'Julian Romero',
        },
        {
          type: 'change',
          title: 'Credencials/Personal information/Basic info/First name',
          before: 'Julian',
          after: 'Julian',
        },
      ],
    },
    {
      username: 'Sijmen Immens, delected information from the credential',
      photoURL: '',
      id: '635AAD33-05E8-433B-9504-B293587800D4',
      date: '2023-10-02',
      credential: [
        {
          type: 'document',
          title: 'Credencials/Identity document',
          documentType: 'Social security',
          documentNumber: '987543219012761',
          verified: true,
        },
      ],
    },
    {
      username: 'Shirline Dungey, added information to the profile',
      photoURL: '',
      id: '635AAD33-05E8-433B-9504-B293587800D4',
      date: '2023-10-02',
      credential: [
        {
          type: 'phone',
          title: 'Credencials/Phone',
          phoneNumber: '+1 303-999-999901',
          verified: true,
        },
      ],
    },
  ];


  onOrder() {
    this.data.sort(function (a, b) {
      // const [monthA, dayA, yearA] = a.date.split('-');
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      // Compara las fechas y devuelve la diferencia
      // para ordenar de más reciente a más antigua
      return dateB.getTime() - dateA.getTime();
    });
    console.log(this.data);
  }

  dateMap = [];

  onSeparete() {
    
    this.data.forEach((dataElement)=>{
    
      let exist = false
      let index;
      // preguntamos si existe la fecha
      this.dateMap.forEach((mapElement)=>{
        if(dataElement.date == mapElement['date']){
          exist = true;
          index = this.dateMap.indexOf(mapElement);
        }
      })
      
      
      if (exist) {
        //this.dateMap[index][dataElement.date].push(dataElement);
        this.dateMap[index]['data'].push(dataElement);
      } else {
        //this.dateMap.push({ [dataElement.date]: [dataElement]});
        this.dateMap.push({ 'date':dataElement.date, 'data': [dataElement]});
      }
    });
    
    console.log(this.dateMap)
  }

  showItems = false;

  onRender(){
    this.showItems = true;
  }

 } 
    
    
