const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const icon = require("./app");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let temp = "";
let query;
let country;
let description;
let icons;
let backgroung = "";

app.get("/", function (req, res) {
  if (temp === "") {
    temp = "0";
  }

  if (backgroung === "") {
    backgroung = "anime2.jpg";
  }

  if (description === "") {
    description = "Weather";
  }

  if (query === "") {
    query = "City Name";
  }

  res.render("index", {
    date: icon.date(),
    temp: temp,
    query: query,
    description: description,
    icons: icons,
    backgroung: backgroung
  });
});

app.post("/", (req, res) => {
  query = req.body.cityName;
  const apiKey = "4db646e2e9ba434bbaef50df0b5b05cf";
  const units = "metric";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&units=" +
    units +
    "&appid=" +
    apiKey;

  https.get(url, function (response) {
    // console.log(response);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);

      if (weatherData.cod === "404") {
        query = weatherData.message;
        temp = "0";
        icons = "";
        description = "";
      } else {
        temp = Math.floor(weatherData.main.temp);

        description = weatherData.weather[0].description;

        country = weatherData.sys.country;
        query += ", " + country;

        const Icon = weatherData.weather[0].icon;
        icons = icon.weatherIcons(Icon);
        backgroung = icon.backgroungImage();
      }
      res.redirect("/");
    });
  });
});

app.post("/", (req, res) => {});

app.listen(3000, () => {
  console.log("runnning on prot 3000");
});
