const { getWeatherDetails } = require("./utils/index");

getWeatherDetails()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(e);
  });
