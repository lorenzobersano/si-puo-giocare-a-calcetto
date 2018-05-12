const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const { getWeather } = require('./weather/weather');
const { getCity } = require('./geocoder/geocoder');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());

app.post('/api/weatherInfo', async (req, res) => {
  let weather;
  let city;

  const lat = req.body.latitude;
  const long = req.body.longitude;

  try {
    weather = await getWeather(lat, long);
    city = await getCity(lat, long);
  } catch (e) {
    res.send(e);
  }

  const { weatherData } = weather;

  const daysNoRain = weatherData.filter(filtWeather => filtWeather.precipProbability <= 0.1);

  const canPlay = daysNoRain.length > 0;

  res.status(200).send({ ...city, canPlay, ...weather });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
