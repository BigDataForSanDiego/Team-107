export interface Country {
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  emoji: string;
  id: number;
  iso2: string;
  iso3: string;
  latitude: string;
  longitude: string;
  name: string;
  native: string;
  numeric_code: string;
  phone_code: number;
  region: string;
  subregion: string;
  tld: string;
}

export interface State {
  id: number;
  name: string;
  state_code: string;
}

export interface City {
  id: number;
  latitude: string;
  longitude: string;
  name: string;
}
