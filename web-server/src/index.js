const express = require("express");
require("dotenv").config();
const app = express();

// app.get(``, (req, res) => {
//   res.send("Home Page");
// });

// app.get(`/help`, (req, res) => {
//   res.send("Help Page");
// });

// app.get(`/about`, (req, res) => {
//   res.send("About Page");
// });

app.get(`/weather`, (req, res) => {
  res.send("Weather Page");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});
