import moment from "moment";
import "moment/locale/it";
import Qty from "js-quantities";

const convertTimestamp = timestamp => {
  return moment.unix(timestamp).format("dddd D");
};

const convertPrecipProbability = precipProbability => {
  return precipProbability * 100;
};

const convertPrecipIntensity = precipIntensity => {
  return Qty(precipIntensity, "in")
    .to("mm")
    .toPrec("0.01 mm")
    .toString();
};

const roundTemperature = temperatureHigh => {
  const roundedTempStr = Qty(temperatureHigh, "celsius")
    .toPrec("1 celsius")
    .toString();
  return roundedTempStr.substring(0, roundedTempStr.length - 4);
};

const getLocation = () => {
  if (!navigator.geolocation)
    return alert("Geolocalizzazione non supportata dal tuo browser");

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      () => reject("Non è stato possibile capire la tua posizione")
    );
  });
};

export {
  convertTimestamp,
  convertPrecipProbability,
  convertPrecipIntensity,
  roundTemperature,
  getLocation
};
