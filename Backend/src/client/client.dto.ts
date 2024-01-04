// ClientEntity.interface.ts
export interface ClientEntity {
  id: number;
  identificationNumber: string;
  businessName: string;
  legalForm: string;
  establishmentDate: string;
  taxIdentificationNumber: string | null;
  countryCode: string;
  countryName: string;
  municipalityName: string;
  streetName: string;
  houseNumber: number;
  postalCode: number;
  fullAddress: string;
}

// client-get.dto.ts
export class ClientGetDto implements Omit<ClientEntity, 'id'> {
  identificationNumber: string;
  businessName: string;
  legalForm: string;
  establishmentDate: string;
  taxIdentificationNumber: string;
  countryCode: string;
  countryName: string;
  municipalityName: string;
  streetName: string;
  houseNumber: number;
  postalCode: number;
  fullAddress: string;
}

// client-put.dto.ts
export class ClientPutDto implements Omit<ClientEntity, 'id'> {
  identificationNumber: string;
  businessName: string;
  legalForm: string;
  establishmentDate: string;
  taxIdentificationNumber: string;
  countryCode: string;
  countryName: string;
  municipalityName: string;
  streetName: string;
  houseNumber: number;
  postalCode: number;
  fullAddress: string;
}

// client-patch.dto.ts
export class ClientPatchDto implements Partial<ClientEntity> {
  identificationNumber?: string;
  businessName?: string;
  legalForm?: string;
  establishmentDate?: string;
  taxIdentificationNumber?: string;
  countryCode?: string;
  countryName?: string;
  municipalityName?: string;
  streetName?: string;
  houseNumber?: number;
  postalCode?: number;
  fullAddress?: string;
}
