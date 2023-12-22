import { Dayjs } from 'dayjs';

export interface IARESClientResponse {
  icoId: string;
  zaznamy: Zaznam[];
}

export interface Zaznam {
  ico: string;
  obchodniJmeno: string;
  sidlo: Sidlo;
  pravniForma: string;
  financniUrad: string;
  datumVzniku: string;
  datumZaniku: string;
  datumAktualizace: string;
  dic: string;
  pravniFormaRos: string;
  czNace: string[];
  doplnkovePravniFormy: string[];
  statistickeUdaje: StatistickeUdaje;
  zakladniUzemniJednotka: string;
  primarniZaznam: boolean;
}

export interface Sidlo {
  kodStatu: string;
  nazevStatu: string;
  kodKraje: number;
  nazevKraje: string;
  kodOkresu: number;
  nazevOkresu: string;
  kodObce: number;
  nazevObce: string;
  kodSpravnihoObvodu: number;
  nazevSpravnihoObvodu: string;
  kodMestskehoObvodu: number;
  nazevMestskehoObvodu: string;
  kodMestskeCastiObvodu: number;
  kodUlice: number;
  nazevMestskeCastiObvodu: string;
  nazevUlice: string;
  cisloDomovni: number;
  doplnekAdresy: string;
  kodCastiObce: number;
  cisloOrientacni: number;
  cisloOrientacniPismeno: string;
  nazevCastiObce: string;
  kodAdresnihoMista: number;
  psc: number;
  textovaAdresa: string;
}

export interface StatistickeUdaje {
  institucionalniSektor2010: string;
  kategoriePoctuPracovniku: string;
}

export interface ClientFormValues {
  identificationNumber: string; // Previously 'ico'
  businessName: string; // Previously 'obchodniJmeno'
  legalForm: string; // Previously 'pravniForma'
  establishmentDate: Dayjs; // Previously 'datumVzniku'
  taxIdentificationNumber: string; // Previously 'dic'
  countryCode: string; // Previously 'kodStatu'
  countryName: string; // Previously 'nazevStatu'
  municipalityName: string; // Previously 'nazevObce'
  streetName: string; // Previously 'nazevUlice'
  houseNumber: number; // Previously 'cisloDomovni'
  postalCode: number; // Previously 'psc'
  fullAddress: string; // Previously 'textovaAdresa'
}
