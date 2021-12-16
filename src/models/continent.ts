
export type Cities = {
  name: string;
  image: string;
  country: string;
  country_flag: string;
}

export type Continent = {
  id: number;
  slug: string;
  name: string;
  short: string;
  description: string;
  banner: string;
  country_count: number;
  language_count: number;
  city_count: number;
  cities: Cities[];
}

export function getNewContinent(): Continent {
  return {
    id: 0,
    slug: '',
    name: '',
    short: '',
    description: '',
    banner: '',
    country_count: 0,
    language_count: 0,
    city_count: 0,
    cities: [
      {
        name: '',
        image: '',
        country: '',
        country_flag: '',
      },
    ],
  }
}