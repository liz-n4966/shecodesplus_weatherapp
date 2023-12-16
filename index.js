//Function 1
function currentCityName(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".search-input");
  let cityName = document.querySelector(".current-city");

  if (cityInput.value) {
    cityName.innerHTML = `${cityInput.value}`;
  } else {
    cityName.innerHTML = null;
    alert(`Which city do you want to search for?`);
  }
}

let searchButton = document.querySelector(".search-form");
searchButton.addEventListener("submit", currentCityName);

//Function 2
let now = new Date();
let Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let min = now.getMinutes();
if (min < 10) {
  min = `0${min}`;
}
let dayTime = document.querySelector(".day-time");
dayTime.innerHTML = `${day} ${hour}:${min}`;
