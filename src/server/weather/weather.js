const axios = require('axios');

const getWeather = (lat, lng) => axios
  .get(`https://api.darksky.net/forecast/${
    process.env.WEATHER_API_KEY
  }/${lat},${lng}?lang=it&exclude=minutely,hourly,alerts&units=si`)
  .then((response) => {
    const weatherData = response.data.daily.data.map(weather => ({
      time: weather.time,
      summary: weather.summary,
      precipIntensity: weather.precipIntensity,
      precipProbability: weather.precipProbability,
      temperatureHigh: weather.temperatureHigh,
      icon: weather.icon
    }));

    return Promise.resolve({
      summary: response.data.daily.summary,
      weatherData
    });
  })
  .catch(e => Promise.reject(e));

module.exports.getWeather = getWeather;
