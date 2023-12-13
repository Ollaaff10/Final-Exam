document.getElementById('search-btn').addEventListener('click', function() {
    let city = document.getElementById('location-input').value;
    getWeather(city);
});

function getWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(() => {
            alert('City not found. Please try again.');
        });
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const resultDiv = document.getElementById('weather-result');
    resultDiv.innerHTML = `Temperature: ${temperature}°C <br> Description: ${description}`;
}
