# Weather Report

## This is my Weather Report (Challenge 8) read me. 
Using the open weather API and obtaining a working API key we were to contruct a functional structure of pulling the data using the API for a comphresnhive weather report. We had to then store it into local storage and display the search of the cities after using the browser. So, on click of a city we will get the Temperature, Humidity, Wind speed, the dates and forecast for the next five days.

I have made two API requests to Open Weather website using the "fetch" function, one for the city and the other for longitude and lantitude.

I have made the first API to point to the geographical location of London and it asks for the first five results using my API key.

I have put the response in JSON format and once it is recieved it is logged to the console as "citiesFound" and now as well as the forecast of the weather for the next five days.

The code then takes the first city from the "citiesFound" array and makes another request to the forecast API, passing in the latitude and longitude of those city paramaters. 

The response from the second request is logged to the console as "firstCity".

We used bootstrap for the display elements and stored the data.
However, looking at the code now, the display is for a matter of seconds.
I plan to revisit this assignment. APIs can be very temperamental, especially the free ones.

![Weather location and temperature](images/Weather-API-SS.PNG)
>
![Weather location and temperature including terminal of vs code](images/Weather-API-console-log-ss.PNG)



