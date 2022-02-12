# Weather server

Sample express web Api written in Typescript. Exposes a random weather data endpoint (i.e. `/api/weather`) and serves the [weather-client](https://github.com/capelski/weather-client) web app in the root url.

```bash
# 1) Install dependencies
npm install

# 2) Build and start or start in development mode
npm run build && npm start
npm run start:dev

# 3) Consume Api
curl "http://localhost:3000/api/weather?cityName=Madrid"
# > {"icon":"50d","maxTemperature":39.24,"minTemperature":6.12,"temperature":20.11,"windSpeed":10.97}
```

## Motivation

The goal of this repository is to illustrate different ways of structuring interdependent Typescript projects. See [weather-monorepo](https://github.com/capelski/weather-monorepo) for more details.
