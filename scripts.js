const xhr = new XMLHttpRequest();
const url = "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

xhr.open("GET", url, true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const weatherData = JSON.parse(xhr.responseText);
        const weatherDescription = weatherData.weather[0].description;
        const weatherTemperature = weatherData.main.temp;
        const weatherPressure = weatherData.main.pressure;
        const weatherHumidity = weatherData.main.humidity;
        const weatherSpeed = weatherData.wind.speed;
        const weatherDeg = weatherData.wind.deg;
        const weatherIcon =
             "http://openweathermap.org/img/w/" +
             weatherData.weather[0].icon +
             ".png";
        const weatherString =
             "<p>Temperature: " +
             weatherTemperature +
             " &deg;C</p><p>Pressure: " +
             weatherPressure +
             " hPa</p><p>Description: " +
             weatherDescription +
             "</p><p>Humidity: " +
             weatherHumidity +
             "%</p><p>Wind Speed: " +
             weatherSpeed +
             " m/s</p><p>Wind Direction: " +
             weatherDeg +
             "&deg;</p><img src='" +
             weatherIcon +
             "' />";
        
        document.getElementById("weather").innerHTML = weatherString;
    }
};
xhr.send();
