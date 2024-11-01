import { getWeather } from './api.js';

const appContainer = document.querySelector('#app');

function createLocationForm() {
    if (document.querySelector('#locationForm')) return;

    const form = document.createElement('form');
    form.id = 'locationForm';

    const label = document.createElement('label');
    label.setAttribute('for', 'location');
    label.textContent = 'Enter location: ';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'location';
    input.name = 'location';
    input.required = true;

    const submitBtn = document.createElement('button');
    submitBtn.type ='submit';
    submitBtn.textContent = 'Get Weather';

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submitBtn);

    appContainer.appendChild(form);

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const location = input.value.trim();
        if (location) {
            const weatherData = await getWeather(location);
            displayWeatherData(weatherData);
        }
    });

}

function displayWeatherData({ currentWeather, forecast }) {
    appContainer.innerHTML = '';

    const currentWeatherDiv = document.createElement('div');
    currentWeatherDiv.innerHTML = `
        <h2>Current Weather</h2>
        <p>Temperature: ${currentWeather.temperature}°F</p>
        <p>Conditions: ${currentWeather.conditions}</p>
        <p>Humidity: ${currentWeather.humidity}%</p>
        <p>Wind Speed: ${currentWeather.windspeed} mp/h</p>
        <p>Wind Direction: ${currentWeather.windDirection}°</p>
    `;

    const forecastDiv = document.createElement('div');
    forecastDiv.innerHTML = '<h2>Forecast</h2>';
    forecast.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = `
        <p><strong>Date:</strong> ${day.date}</p>
        <p><strong>Max Temp:</strong> ${day.maxTemp}°F</p>
        <p><strong>Min Temp:</strong> ${day.minTemp}°F</p>
        <p><strong>Conditions:</strong> ${day.conditions}</p>
        <hr>
        `;
        forecastDiv.appendChild(dayDiv);
    });
    appContainer.appendChild(currentWeatherDiv);
    appContainer.appendChild(forecastDiv);
}

createLocationForm();