import express from 'express';
import { join } from 'path';
import { Weather } from './types';
import { randomFloat, randomWeatherIcon, validateCityName } from './utils';

const getRandomWeather = (): Weather => ({
  icon: randomWeatherIcon(),
  maxTemperature: randomFloat(20, 40),
  minTemperature: randomFloat(0, 20),
  temperature: randomFloat(10, 30),
  windSpeed: randomFloat(0, 10)
});

const app = express();

app.use('/', express.static(join(__dirname, '..', 'public')));

app.get('/api/weather', express.json(), (req, res) => {
  const cityName = <string | undefined>req.query.cityName;
  const cityNameValidation = validateCityName(cityName);

  if (!cityNameValidation.valid) {
    res.status(400).json({ message: cityNameValidation.message });
  } else {
    // For the sake of simplicity, random weather data is generated
    // instead of fetching it from a real service (e.g. OpenWeatherMap)
    res.json(getRandomWeather());
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server up and running!');
});
