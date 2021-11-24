// setting global var
const apiKey = "d5a31c547245680a0f00b2ffe15f45df";
var searchButton = document.querySelector("#search-btn");
var repoContainerEl = document.querySelector("#repos-container");

var searchArr = [];
var searchArrTwo = [];

// search by city
async function getCityDetails(event) {
  event.preventDefault();
  var searchInput = $("#search-input").val();
  console.log(searchInput, "searchInput");
  try {
    const cityWeatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=imperial`
    );
    console.log("citywweatherres", cityWeatherRes);
    searchArr = cityWeatherRes.data;
  } catch (err) {
    // handle error
    console.log(err);
  }
  //  clear search input
  $("#forecast-form")[0].reset();
  getMoreDetails();
}

// second api to get uv index, current date
async function getMoreDetails() {
  try {
    const cityWeatherResTwo = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${searchArr.coord.lat}&lon=${searchArr.coord.lon}&units=imperial&appid=${apiKey}`
    );
    console.log("citywweatherrestwo", cityWeatherResTwo);
    searchArrTwo = cityWeatherResTwo.data;
  } catch (err) {
    // handle error
    console.log(err);
  }
  displayForecast();
}

// displays and appends city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index into main-forecast containter

function displayForecast() {
  var mainForcastDIV = document.querySelector("#main-forecast");

  var weatherIconElement = document.createElement("img");
  var cityNameElement = document.createElement("h1");
  var dateElement = new Date().toISOString().slice(0, 10);document.createElement("h2");
  var tempElement = document.createElement("p");
  var humidElement = document.createElement("p");
  var windElement = document.createElement("p");
  var uvElement = document.createElement("p");

  cityNameElement.innerText = `${searchArr.name}`;
  tempElement.innerText =
    "Temperature: " + `${searchArr.main.temp}` + "° Farenheit";
  humidElement.innerText = "Humidity: " + `${searchArr.main.humidity}` + "%";
  windElement.innerText =
    "Wind Speed: " + `${searchArr.wind.speed}` + " miles/hour";
  uvElement.innerText = "UV Index: " + `${searchArrTwo.current.uvi}`;

  mainForcastDIV.append(
    cityNameElement,
    dateElement,
    tempElement,
    humidElement,
    windElement,
    uvElement
  );
}
