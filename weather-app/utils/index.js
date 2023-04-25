const axios = require("axios").default;
require("dotenv").config();

const getData = async (url, params) => {
  return await axios.get(url, {
    params,
  });
};

const getWeatherDetails = async (address = "New Delhi") => {
  const params1 = {
    q: `${address}`,
    limit: "1",
    appid: `${process.env.APP_ID}`,
  };

  try {
    const geolocationData = await getData(process.env.GEOCOING_URL, params1);
    const params = {
      lat: `${geolocationData?.data[0]?.lat}`,
      lon: `${geolocationData?.data[0]?.lon}`,
      appid: `${process.env.APP_ID}`,
      units: `metric`,
    };

    const weatherData = await getData(process.env.WEATHER_URL, params);
    return {
      ...weatherData?.data?.main,
      location: weatherData?.data?.name,
    };
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getData,
  getWeatherDetails,
};
