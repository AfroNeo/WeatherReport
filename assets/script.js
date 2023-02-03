// Weather Report - Challenge 

const button = document.querySelector("#search-button");
const userInput= document.querySelector("#search-input")

button.addEventListener("click", function(e) {
  e.preventDefault()
    // let storedData = localStorage.getItem("weatherData");
    const city= userInput.value
    console.log(city);

getWeather(city)

    
  //   fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=97293d61a13fbefe5d4d79ca9cd6558f")
  //   .then(response => response.json())
  // .then(citiesFound => {
  //     let firstCity = citiesFound[0];
      
  //     console.log(firstCity.lat);
  //     console.log(firstCity.lon);
      
  //     return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=97293d61a13fbefe5d4d79ca9cd6558f`)
  //   })
  // .then(response => response.json())
  // .then(firstCity => {
  //     console.log(firstCity);
  //   });
});

function getWeather(city){
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=97293d61a13fbefe5d4d79ca9cd6558f`)
  .then(response => response.json())
.then(citiesFound => {
    let firstCity = citiesFound[0];
    console.log(citiesFound);
    console.log(firstCity.lat);
    console.log(firstCity.lon);
   
    var url =`https://api.openweathermap.org/data/3.0/onecall?lat=${firstCity.lat}&lon=${firstCity.lon}&exclude={minutely,hourly,alerts}&appid=97293d61a13fbefe5d4d79ca9cd6558f`

    fetch(url)
    .then(response=> response.json())
    .then((data)=>{
      console.log(data);
      displayCurrentWeather(data.current)
    })
   
  })

}

function displayCurrentWeather(weather){
  console.log(weather, "from display function")
  const cardHeader= document.createElement("div")
  cardHeader.setAttribute("class","card-header")
  const title= document.createElement("h2")
  const cardBody=document.createElement("div")
  cardBody.setAttribute("class","card-body")
  const temp=document.createElement("p")
  const humdity=document.createElement("p")
  const wind=document.createElement("p")
  const uvi=document.createElement("p")
  const icon= document.createElement("img")
  icon.setAttribute("src","https://openweathermap.org/img/wn"+ weather.weather[0].icon+ ".png" )
}