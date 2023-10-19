import { CredentialType } from '../core/enums/credential-type.enum';

const DOCUMENTS_TYPE = [
  { id: '0', nombre: 'Goverment-issued ID' },
  { id: '1', nombre: 'Social security' },
];

const NAME_CHANGES = [
  { id: '01', nombre: 'Fist name' },
  { id: '02', nombre: 'Full name' },
];

const TYPE_DEVICES = [CredentialType.Document, 'phone', 'address', 'change'];

export { DOCUMENTS_TYPE, NAME_CHANGES, TYPE_DEVICES };
