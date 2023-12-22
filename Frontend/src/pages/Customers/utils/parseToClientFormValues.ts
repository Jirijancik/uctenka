import dayjs from 'dayjs';

import { ClientFormValues, IARESClientResponse } from '../types';

export const parseToClientFormValues = (data: IARESClientResponse): ClientFormValues | null => {
  if (data.zaznamy && data.zaznamy.length > 0) {
    const firstRecord = data.zaznamy[0];
    return {
      identificationNumber: firstRecord.ico,
      businessName: firstRecord.obchodniJmeno,
      legalForm: firstRecord.pravniForma,
      establishmentDate: dayjs(firstRecord.datumVzniku),
      taxIdentificationNumber: firstRecord.dic,
      countryCode: firstRecord.sidlo.kodStatu,
      countryName: firstRecord.sidlo.nazevStatu,
      municipalityName: firstRecord.sidlo.nazevObce,
      streetName: firstRecord.sidlo.nazevUlice,
      houseNumber: firstRecord.sidlo.cisloDomovni,
      postalCode: firstRecord.sidlo.psc,
      fullAddress: firstRecord.sidlo.textovaAdresa,
    };
  }
  return null;
};
