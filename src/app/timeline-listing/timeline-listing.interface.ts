export interface UserData {
    id:          string;
    username:    string;
    photoURL:    string;
    flag:        string;
    device:      string;
    device_icon: string;
    localization:string;
    time:        string;
    date:        string;
    credential: UserCredential[];
}

interface UserCredential {
    type:            string;
    title:           string;
    address?:        string;
    state?:          string;
    country?:        string;
    documentType?:   string;
    documentNumber?: string;
    verified?:       boolean;
    before?:         string;
    after?:          string;
    phoneNumber?:    string;
}

export interface DatePerUser {
    date:    string;
    data?: UserData[];
}