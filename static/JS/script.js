const apikey = "5c1032c6b55ce9952cd2bf78efff5eb9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input"); 
const searchbtn = document.querySelector(".search button"); 
const weathericon = document.querySelector(".weather-icon");


document.addEventListener("DOMContentLoaded", function() {
  const searchBar = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search button");

  searchBar.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
          searchButton.click();
      }
  });
});




async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if(response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kph";


    // if (data.weather[0].main == "Clouds") {
    //   weathericon.src = "images/clouds.png";
    // } else if (data.weather[0].main == "Clear") {
    //   weathericon.src = "images/clear.png";
    // } else if (data.weather[0].main == "Rain") {
    //   weathericon.src = "images/rain.png";
    // } else if (data.weather[0].main == "Snow") {
    //   weathericon.src = "images/snow.png";
    // }else if (data.weather[0].main == "Drizzle") {
    //   weathericon.src = "images/drizzle.png";
    // }else if (data.weather[0].main == "Mist") {
    //   weathericon.src = "images/mist.png";
    // }

    const mainWeather = data.weather[0].main; 
    if (weatherIcons[mainWeather]) { 
      weathericon.src = weatherIcons[mainWeather]; 
    }


    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";

    }

    
  }

  

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
