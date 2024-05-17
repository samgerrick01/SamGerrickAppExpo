import { DocumentPickerResponse } from 'react-native-document-picker';

import { TPrescriptionGraphQLResponse } from '../graphql/order.types';

export type TPrescriptionDataTypes = {
  file: DocumentPickerResponse;
  response?: TPrescriptionGraphQLResponse;
};

export type TAdditionalDocumentTypes = {
  id: string;
  isUploaded: boolean;
  uploadedURI: string;
};
