// setting global var
const apiKey = "d5a31c547245680a0f00b2ffe15f45df";
var searchButton = document.querySelector("#search-btn");
var repoContainerEl = document.querySelector("#repos-container");

var searchArr = [];

async function getCityDetails(event) {
  event.preventDefault();
  var searchInput = $("#search-input").val();
  console.log(searchInput, "searchInput");
  const cityWeatherRes = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=d5a31c547245680a0f00b2ffe15f45df`
  );
  console.log("citwweatherres", cityWeatherRes);
  searchArr = cityWeatherRes.data;
  console.log("searchArr", searchArr);
  //  clear search input
  searchInput.val = "";
}
