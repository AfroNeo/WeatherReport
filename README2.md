This is my Weather Report (Challenge 8) read me.

I have made two API requests to Open Weather website using the "fetch" function.

I have made the first API to point to the geographical location of London and it asks for the first five results using my API key.

I have put the response in JSON format and once it is recieved it is logged to the console as "citiesFound".

The code then takes the first city from the "citiesFound" array and makes another request to the forecast API, passing in the latitude and longitude of those city paramaters. 

The response from the second request is logged to the console as "firstCity".



