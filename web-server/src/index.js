const path = require('path');
const express = require("express");
require("dotenv").config();
const app = express();

const pathToPublicDir = path.join(__dirname, '../public');

app.use(express.static(pathToPublicDir));

// app.get(``, (req, res) => {
//   res.send("Home Page");
// });

// app.get(`/help`, (req, res) => {
//   res.send("Help Page");
// });

// app.get(`/about`, (req, res) => {
//   res.send("About Page");
// });

app.get(`/about`, (req, res) => {
  res.redirect('/about.html')
});

app.get(`/help`, (req, res) => {
  res.redirect("/help.html");
});

app.get(`/weather`, (req, res) => {
  res.send("Weather Page");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});
