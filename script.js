const apiKey = "298eb75776a89f3bd444521f7d443053";

function getWeather() {
    const location = document.getElementById("location-input").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error("Error fetching data: ", error);
    });
}

function displayWeather(data) {
    const weatherContainer = document.getElementById("weather-container");
    weatherContainer.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].main}</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" />
    `;
}
