// setting global var
const apiKey = "d5a31c547245680a0f00b2ffe15f45df";
var searchButton = document.querySelector("#search-btn");
var repoContainerEl = document.querySelector("#repos-container");

var searchArr = [];

// search by city
async function getCityDetails(event) {
  event.preventDefault();
  var searchInput = $("#search-input").val();
  console.log(searchInput, "searchInput");
  try {
    const cityWeatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`
    );
    console.log("citywweatherres", cityWeatherRes);
    searchArr = cityWeatherRes.data;
  } catch (err) {
    // handle error
    console.log(err);
  }
  //  clear search input
  $("#forecast-form")[0].reset();
  displayForecast();
}

// display city name,
// the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// function displayCurrentCity() {
//   var cityName = searchArr.name;
//   console.log(searchArr.name, "searchArrayName");
//   const cityHeading = document.createElement("h2");
//   var heading = document.getElementById("cityname-header");
//   heading.innerHTML = cityName;
// }

// append city name, temp and humidity into col-1

function displayForecast() {
  var mainForcastDIV = document.querySelector("#main-forecast");
  const cityNameElement = document.createElement("h2");
  cityNameElement.innerText = `${searchArr.name}`;
  mainForcastDIV.append(cityNameElement);
}
