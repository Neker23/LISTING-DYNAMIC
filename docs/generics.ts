/**
 * {id: '3j48j34t348tj', isSuccess: true, data: {country: 'PE', number: '983454395'}}
 * {id: '3j48j34t348tj', isSuccess: true, data: {email: '983454395'}}
 * {id: '3j48j34t348tj', isSuccess: false, error: 'Unknown error'}}
 *
 *
 */

interface IPhone {
  country: string;
  number: string;
}

interface IEmail {
  email: string;
}

interface IResponse<T, K = number> {
  id: string;
  data: T;
  data2: K;
}

const readPhoneResponse = (response: IResponse<IPhone, boolean>) => {
  response.data2;
};

const readEmailResponse = (response: IResponse<boolean>) => {
  response.data2;
};
