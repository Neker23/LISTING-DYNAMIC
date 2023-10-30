export interface UserData {
  id: string;
  username: string;
  photoURL: string;
  flag: string;
  device: string;
  device_icon: string;
  localization: string;
  time: string;
  date: string;
  credential: UserCredential[];
}

export interface UserCredential {
  credentialID: string;
  type: string;
  title: string;
  address?: string;
  state?: string;
  country?: string;
  documentType?: string;
  documentNumber?: string;
  verified?: boolean;
  before?: string;
  after?: string;
  phoneNumber?: string;
}

export interface DatePerUser {
  date: string;
  data?: UserData[];
}

// NUEVAS INTERFACES PARA MIS COUNTRY CARD

export interface CountryCard {
  id: string;
  country: string;
  visa: boolean;
  language: string;
  typeOfMoney: string;
  flag: string;
  photoURL: string;
  date: string;
  weather: string;
  placesToVisit: PlaceToVisit[];
}
export interface PlaceToVisit {
  placeID: string;
  transporting: string;
  singnalPhone: boolean;
  city: string;
  hostelReserved: boolean;
  hostel: string;
  phoneNumber: string;
}

export interface DatePerCountry {
  date: string;
  data?: CountryCard[];
}
