// Weather Report - Challenge 

const button = document.querySelector("#search-button");
const userInput = document.querySelector("#search-input")
const weatherContainer = document.querySelector(".current-weather-card")
const forecastCards = document.querySelector(".forecast-cards")
const historybtn= document.querySelector(".historyButtons")
let cityName = ""
let searchHistory = []




function getHistory(city){

  const btn=document.createElement("button")
  btn.setAttribute("class", "btn btn-warning" )
  btn.setAttribute("value", city)
  btn.textContent=city
  historybtn.append(btn)

}

let storageArr= JSON.parse(localStorage.getItem("history"))||[]
for(let i=0; i<storageArr.length;i++){
  getHistory(storageArr[i])
}

button.addEventListener("click", function (e) {
  e.preventDefault()
console.log(!userInput=="")

  if (!userInput == "") {
    const city = userInput.value
    console.log(city);

    getWeather(city)
   
  }


});


function getWeather(city) {
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=97293d61a13fbefe5d4d79ca9cd6558f`)
    .then(response => response.json())
    .then(citiesFound => {
      let firstCity = citiesFound[0];
      console.log(citiesFound);
      console.log(firstCity.lat);
      console.log(firstCity.lon);
      cityName = firstCity.name

      var url = `https://api.openweathermap.org/data/3.0/onecall?lat=${firstCity.lat}&lon=${firstCity.lon}&exclude={minutely,hourly,alerts}&appid=97293d61a13fbefe5d4d79ca9cd6558f&units=metric`

      fetch(url)
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          displayCurrentWeather(data.current)
          displayForecast(data.daily)
        })

    })

}

function displayCurrentWeather(weather) {
  storage()
  weatherContainer.innerHTML = ""
  console.log(weather, "from display function")
  const cardHeader = document.createElement("div")
  cardHeader.setAttribute("class", "card-header")
  const title = document.createElement("h2")
  const cardBody = document.createElement("div")
  cardBody.setAttribute("class", "card-body")
  const temp = document.createElement("p")
  const humidity = document.createElement("p")
  const wind = document.createElement("p")
  const uvi = document.createElement("p")
  const span = document.createElement("span")
  const icon = document.createElement("img")
  icon.setAttribute("src", "https://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png")

  temp.textContent = `Temperature: ${weather.temp} Celsius`
  humidity.textContent = `Humidity: ${weather.humidity} %`
  wind.textContent = `Wind Speed: ${weather.wind_speed} KPM`
  uvi.textContent = `UVI:  ${weather.uvi}`
  title.textContent = cityName

  //append
  span.append(icon)
  title.append(span)
  cardHeader.append(title)
  cardBody.append(temp, humidity, wind, uvi)

  weatherContainer.append(cardHeader, cardBody)


}

function displayForecast(data) {
  forecastCards.innerHTML=""

  for (let i = 1; i < 6; i++) {

    const day = new Date(data[i].dt * 1000).toDateString()

    const card = document.createElement("div")
    card.setAttribute("class", "card eachCard")
    card.setAttribute("style", "width:18rem;")
    const cardHeader = document.createElement("div")
    cardHeader.setAttribute("class", "card-header")
    const title = document.createElement("h4")
    const cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body")
    const temp = document.createElement("p")
    const humidity = document.createElement("p")
    const wind = document.createElement("p")
    const uvi = document.createElement("p")
    const span = document.createElement("span")
    const icon = document.createElement("img")
    icon.setAttribute("src", "https://openweathermap.org/img/wn/" + data[i].weather[0].icon + ".png")

    temp.textContent = `Temperature: ${data[i].temp.day} Celsius`
    humidity.textContent = `Humidity: ${data[i].humidity} %`
    wind.textContent = `Wind Speed: ${data[i].wind_speed} KPM`
    title.textContent = day

    span.append(icon)
    title.append(span)
    cardHeader.append(title)
    cardBody.append(temp, humidity, wind)
    card.append(cardHeader, cardBody)
    forecastCards.append(card)

  }

}

function storage() {
  searchHistory = JSON.parse(localStorage.getItem("history")) || []
  if (!searchHistory.includes(cityName)) {
    searchHistory.push(cityName)
    console.log(searchHistory);

    localStorage.setItem("history", JSON.stringify(searchHistory))
    getHistory(cityName)
  } 


}

historybtn.addEventListener("click", (e)=>{
  e.preventDefault()
  const cityClicked=this.event.target.value
  console.log(cityClicked);
  getWeather(cityClicked)
})