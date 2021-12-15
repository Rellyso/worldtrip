import { ActiveModelSerializer, createServer, Factory, Model } from 'miragejs'

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

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      continent: Model.extend<Partial<Continent>>({})
    },

    seeds(server) {
      server.create("continent", {
        id: 1,
        slug: 'america',
        name: 'América',
        short: 'O continente do desenvolvimento',
        description: 'América é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros.',
        banner: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        country_count: 50,
        language_count: 10,
        city_count: 27,
        cities: [
          {
            name: 'New York',
            image: '',
            country: 'Estados Unidos',
            country_flag: '',
          }
        ]
      } as Object)

      server.create("continent", {
        id: 2,
        slug: 'europe',
        name: 'Europa',
        short: 'O continente mais antigo',
        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
        banner: 'https://images.unsplash.com/photo-1612994000819-52bf05f1ae98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        country_count: 50,
        language_count: 10,
        city_count: 27,
        cities: [
          {
            name: 'Madrid',
            image: '',
            country: 'Espanha',
            country_flag: '',
          }
        ]
      } as Object)

      server.create("continent", {
        id: 3,
        slug: 'africa',
        name: 'África',
        short: 'O continente mais antigo',
        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
        banner: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        country_count: 50,
        language_count: 10,
        city_count: 27,
        cities: [
          {
            name: 'Madrid',
            image: '',
            country: 'Espanha',
            country_flag: '',
          }
        ]
      } as Object)

      server.create("continent", {
        id: 4,
        slug: 'asia',
        name: 'Ásia',
        short: 'O continente mais antigo',
        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
        banner: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        country_count: 50,
        language_count: 10,
        city_count: 27,
        cities: [
          {
            name: 'Madrid',
            image: '',
            country: 'Espanha',
            country_flag: '',
          }
        ]
      } as Object)

      server.create("continent", {
        id: 5,
        slug: 'oceania',
        name: 'Oceania',
        short: 'Localizado entre os oceanos Índico e Pacífico',
        description: 'Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico.',
        banner: 'https://images.unsplash.com/photo-1622732718352-d4c89c582f7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80',
        country_count: 50,
        language_count: 10,
        city_count: 27,
        cities: [
          {
            name: 'Madrid',
            image: '',
            country: 'Espanha',
            country_flag: '',
          }
        ]
      } as Object)

      server.create("continent", {
        id: 5,
        slug: 'antarctica',
        name: 'Antártida',
        short: 'É o mais meridional e o segundo menor dos continentes',
        description: 'Antártida ou Antártica é o mais meridional e o segundo menor dos continentes, com uma superfície de 14 milhões de quilômetros quadrados.',
        banner: 'https://images.unsplash.com/photo-1535752385016-16aa049b6a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1523&q=80',
        country_count: 50,
        language_count: 10,
        city_count: 27,
        cities: [
          {
            name: 'Madrid',
            image: '',
            country: 'Espanha',
            country_flag: '',
          }
        ]
      } as Object)
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/continents')
      this.post('/continents')

      this.get('/continents/:slug', (continentSchema, request) => {
        const { slug } = request.params
        let queryAttrs = {
          slug: slug
        }

        return continentSchema.where("continent", (continent) => {
          console.log(continent)
          return continent.attrs === queryAttrs
        })
      })

      // this.post('api/continents', (schema, request) => {
      //   const data = JSON.parse(request.requestBody)

      //   return schema.create('continent', data)
      // })

      this.namespace = '';
      this.passthrough();
    }
  })

  return server;
}
