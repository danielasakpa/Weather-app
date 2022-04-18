const date = () => {
  const date = new Date();
  return date.toDateString();
};

const weatherIcons = (Icon) => {
  switch (Icon) {
    case "01d":
    case "01n":
      return "clearsky.png";
      break;
    case "02d":
    case "02n":
      return "fewclouds.png";
      break;
    case "03d":
    case "03n":
      return "scatteredclouds.png";
      break;
    case "04d":
    case "04n":
      return "brokenclouds.png";
      break;
    case "09d":
    case "09n":
      return "showerrain.png";
      break;
    case "10d":
    case "10n":
      return "rain.png";
      break;
    case "11d":
    case "11n":
      return "thunderstorm.png";
      break;
    case "13d":
    case "13n":
      return "snow.png";
      break;
    case "50d":
    case "50n":
      return "mist.png";
      break;
    default:
  }
};

const backgroungImage = () => {
  let rendomNum = Math.floor(Math.random() * 6 + 1);

  switch (rendomNum) {
    case 1:
      return "anime1.jpg";
      break;
    case 2:
      return "anime2.jpg";
      break;
    case 3:
      return "anime3.jpg";
      break;
    case 4:
      return "anime4.jpg";
      break;
    case 5:
      return "anime5.jpg";
      break;
    case 6:
      return "anime6.jpg";
      break;
    default:
  }
};
exports.date = date;

exports.weatherIcons = weatherIcons;

exports.backgroungImage = backgroungImage;
