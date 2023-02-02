


fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=97293d61a13fbefe5d4d79ca9cd6558f")
  .then(response => response.json())
  .then(citiesFound => {
    let firstCity = citiesFound[0];
    
    console.log(firstCity.lat);
    console.log(firstCity.lon);
  
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=97293d61a13fbefe5d4d79ca9cd6558f`)
  })
  .then(response => response.json())
  .then(firstCity => {
    console.log(firstCity);
  });

// var APIKEY = "97293d61a13fbefe5d4d79ca9cd6558f";
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=97293d61a13fbefe5d4d79ca9cd6558f";
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// //You'll wantto allow your application to accept user input and store it in the variable that you've created. You'll also likely need to specify state and country variables in your API call,git 
// var city;
//put fetch inside of an event listener
//My weather API key 840e2eedb61362e6a6b45816372f15b9

// fetch(queryURL)
//....



//...
    // return fetch("https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&cnt=3&appid=97293d61a13fbefe5d4d79ca9cd6558f")



//     .then(response => response.json())
//     .then(citiesFound => {


//         let firstCity = citiesFound[0];
//         //error in console log means I'm trying to use data object that doesn't exist.
//         console.log(firstCity.lat);
//         console.log(firstCity.lon);
//     })

//     //>This is another copy and paste example of the code above.
//     fetch("api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=840e2eedb61362e6a6b45816372f15b9")
//     .then(response => response.json())
//     .then(data => {
        
//         console.log(data);
//     })

    ///.....

    //This is an api call example
    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}


//on click fire off....grab the value from the button its self, you can pull off the string from the button and use delegation
//event.target...will grab the event of the city.

//focus on the functionaliy
//get the buttons working with local storage and getting the data back.



