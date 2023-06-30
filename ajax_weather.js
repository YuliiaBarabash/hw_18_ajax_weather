const xhr = new XMLHttpRequest();
const city = "Kyiv";
const apiKey = "5d066958a60d315387d9492393935c19";
const lang = "ua";
const url =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&units=metric&APPID=" +
  apiKey +
  "&lang=" +
  lang;

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    const temperature = data.main.temp;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const windDegree = data.wind.deg;
    const iconCode = data.weather[0].icon;
    const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

    document.getElementById("city").innerHTML =
      "Погода зараз у місті " + city + " :";
    document.getElementById("temperature").innerHTML =
      "Температура: " + temperature + "°C";
    document.getElementById("pressure").innerHTML =
      "Атмосферний тиск: " + pressure + " hPa";
    document.getElementById("description").innerHTML =
      "Поточна погода: " + description;
    document.getElementById("humidity").innerHTML =
      "Вологість: " + humidity + "%";
    document.getElementById("wind").innerHTML =
      "Швидкість вітру: " + windSpeed + " м/с";
    document.getElementById("wind-degree").innerHTML =
      "Напрям вітру: " + windDegree + "°";
    document.getElementById("icon").src = iconUrl;
  }
};

xhr.open("GET", url, true);
xhr.send();
