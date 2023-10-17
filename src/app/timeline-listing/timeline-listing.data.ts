import { UserData } from "./timeline-listing.interface";

const TIMELINE_DATA: UserData[] = [
  {
    id: '635AAD33-05E8-433B-9504-B293587800D4',
    username: 'Alicia Stanger, updated the profile',
    photoURL: 'https://hips.hearstapps.com/hmg-prod/images/screen-shot-2020-07-16-at-16-32-03-1594914078.png',
    flag: 'fr',
    device: 'Windows',
    device_icon: 'desktop_windows',
    localization: 'FR, Marseille',
    date: '2023-10-05',
    time: '10:00:00',
    credential: [
      {
        credentialID: '1',
        type: 'address',
        title: 'Credencials/Address',
        address: 'Provence-Alpes-Côte dAzur',
        state: ' Marseille',
        country: 'Francia',
      },
    ],  
  },
  {
    id: '635AAD33-05E8-433B-9504-B293587800D5',
    username: 'Pedro Castillo, created the profile',
    photoURL: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/11/29/16697627516809.jpg',
    flag: 'pe',
    device: 'Macbook PRO',
    device_icon: 'laptop_mac',
    localization: 'PE, Lima',
    date: '2021-04-02',
    time: '09:15:00',
    credential: [ ]
  },
  {
    id: '635AAD33-05E8-433B-9504-B293587800D6',
    username: 'Sijmen Immens, replaced the credential',
    photoURL: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
    flag: 'us',
    device: 'Galaxy S23',
    device_icon: 'smartphone',
    localization: 'USA, Chicago',
    date: '2021-08-14',
    time: '07:20:00',
    credential: [
      { 
        credentialID: '1',
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
    photoURL: 'https://hips.hearstapps.com/hmg-prod/images/screen-shot-2020-07-16-at-16-32-03-1594914078.png',
    flag: 'mx',
    device: 'iPhone Pro',
    device_icon: 'phone_iphone',
    localization: 'MX, Guadalajara',
    id: '635AAD33-05E8-433B-9504-B293587800D7',
    date: '2023-10-04',
    time: '03:12:11',
    credential: [
      { 
        credentialID: '1',
        type: 'change',
        title: 'Credencials/Personal information/Basic info/Full name',
        before: 'Julian Romero',
        after: 'Julian Romero',
      },
      { 
        credentialID: '2',
        type: 'change',
        title: 'Credencials/Personal information/Basic info/First name',
        before: 'Julian',
        after: 'Julian',
      },
    ],
  },
  {
    id: '635AAD33-05E8-433B-9504-B293587800D8',
    username: 'Sijmen Immens, delected information from the credential',
    photoURL: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
    flag: 'us',
    device: 'Windows',
    device_icon: 'desktop_windows',
    localization: 'USA, California',
    date: '2023-10-04',
    time: '22:20:22',
    credential: [
      {
        credentialID: '1',
        type: 'document',
        title: 'Credencials/Identity document',
        documentType: 'Social security',
        documentNumber: '987543219012761',
        verified: true,
      },
    ],
  },
  {
    id: '635AAD33-05E8-433B-9504-B293587800D9',
    username: 'Shirline Dungey, added information to the profile',
    photoURL: 'https://images.summitmedia-digital.com/cosmo/images/2020/08/26/julia-barretto-profile-picture-idea-1598430021.jpg',
    flag: 'us',
    device: 'Macbook PRO',
    device_icon: 'laptop_mac',
    localization: 'USA, Mississippi',
    date: '2023-10-04',
    time: '05:11:59',
    credential: [
      {
        credentialID: '1',
        type: 'phone',
        title: 'Credencials/Phone',
        phoneNumber: '+1 303-999-999901',
      },
    ],
  },
];

export {
    TIMELINE_DATA
}
