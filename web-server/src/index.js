const path = require('path');
const express = require("express");
require("dotenv").config();
const hbs = require('hbs')
const app = express();

const pathToPublicDir = path.join(__dirname, '../public');
// app.set("view engine", "hbs");

app.set("view engine", "html");
app.engine("html", hbs.__express);

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

app.get(``, (req, res) => {
  res.render("index", {
    textWelcome: "Welcome To Home Page Jasbir",
  });
});

// app.get(`/about`, (req, res) => {
//   res.redirect('/about.html')
// });

// app.get(`/help`, (req, res) => {
//   res.redirect("/help.html");
// });

app.get(`/about`, (req, res) => {
  res.render("about", {
    textAbout: "About Us",
  });
});

app.get(`/help`, (req, res) => {
  res.render("help", {
    textHelp: "Get Help Here: 👌"
  });
});

app.get(`/weather`, (req, res) => {
  res.send("Weather Page");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});
