const axios = require("axios");

const getCity = (lat, long) => {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyDoni9NqKPfChr_GCma7IHquc8-yrcDi4M`
    )
    .then(results => {
      const city = results.data.results[0].address_components[2].long_name;
      const country = results.data.results[0].address_components[6].short_name;

      return Promise.resolve({
        city,
        country
      });
    })
    .catch(e => Promise.reject(e));
};

module.exports.getCity = getCity;
