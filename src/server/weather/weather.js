const axios = require("axios");

const getWeather = (lat, lng) => {
  return axios
    .get(
      `https://api.darksky.net/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}?lang=it&exclude=minutely,hourly,alerts&units=si`
    )
    .then(response => {
      const weatherData = response.data.daily.data.map(weather => {
        return {
          time: weather.time,
          summary: weather.summary,
          precipIntensity: weather.precipIntensity,
          precipProbability: weather.precipProbability,
          temperatureHigh: weather.temperatureHigh,
          icon: weather.icon
        };
      });

      return Promise.resolve({
        summary: response.data.daily.summary,
        weatherData
      });
    })
    .catch(e => Promise.reject(e));
};

module.exports.getWeather = getWeather;
