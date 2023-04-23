const axios = require("axios").default;
require("dotenv").config();
const getData = async (url, params) => {
  return await axios.get(url, {
    params,
  });
};


const params1 = {
  q: "New Delhi",
  limit: "1",
  appid: `${process.env.APP_ID}`,
};

getData(process.env.GEOCOING_URL, params1)
  .then(async (geolocationData) => {
    const params = {
      lat: `${geolocationData?.data[0]?.lat}`,
      lon: `${geolocationData?.data[0]?.lon}`,
      appid: `${process.env.APP_ID}`,
      units: `metric`,
    };

    const weatherData = await getData(process.env.WEATHER_URL, params);
    console.log(weatherData?.data);
  })
  .catch((e) => {
    console.log(e);
  });
