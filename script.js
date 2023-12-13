const apiKey = "298eb75776a89f3bd444521f7d443053";

document.getElementById("search-button").addEventListener("click", function() {
    const city = document.getElementById("city-input").value;
    const state = document.getElementById("state-input").value;
    const country = document.getElementById("country-input").value;
    getWeather(city, state, country);
});

function getWeather(city, state, country) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;
    
    if (state) {
        url += `,${state}`;
    }
    if (country) {
        url += `,${country}`;
    }
    
    url += `&appid=${apiKey}&units=metric`;
    
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Weather data not found for ${city}`);
        }
        return response.json();
    })
    .then(data => displayWeather(data))
    .catch(error => {
        console.error("Error fetching data: ", error);
        alert(error.message);
    });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
        <div class="weather-card">
            <h2>Weather in ${data.name}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Conditions:</strong> ${data.weather[0].description}</p>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">
        </div>
    `;
    weatherInfo.style.display = 'block';
}
