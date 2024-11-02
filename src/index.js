import { getWeather, getGif } from './api.js';
import './style.css';

const appContainer = document.querySelector('#app');

function createLoadingOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay hidden';
    
    const loaderContainer = document.createElement('div');
    loaderContainer.style.textAlign = 'center';
    
    const loader = document.createElement('div');
    loader.className = 'loader';

    const text = document.createElement('div');
    text.className = 'loader-text';
    text.textContent = 'Consulting the cloud whisperers... or maybe just a squirrel. Stay tuned!';

    loaderContainer.appendChild(loader);
    loaderContainer.appendChild(text);
    overlay.appendChild(loaderContainer);

    document.body.appendChild(overlay);

    return overlay;
}

const loadingOverlay = createLoadingOverlay();

function showLoading() {
    loadingOverlay.classList.remove('hidden');
}

function hideLoading() {
    loadingOverlay.classList.add('hidden');
}

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
            showLoading();
            try {
                const weatherData = await getWeather(location);
                displayWeatherData(weatherData);
            } catch (error) {
                console.error('Error fetching weather: ', error);
                appContainer.innerHTML =`
                <div style="color: #ff6b6b; padding: 20px; text-align: center;">
                    Unable to find weather data. Please try again.
                </div>
                `;
            } finally {
                hideLoading();
            }
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
        <p>Wind Speed: ${currentWeather.windSpeed} mp/h</p>
        <p>Wind Direction: ${currentWeather.windDirection}°</p>
        <div class="weather-gif"></div>
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

    getGif(currentWeather.conditions).then(gifUrl => {
        if (gifUrl) {
            const gifContainer = currentWeatherDiv.querySelector('.weather-gif');
            gifContainer.innerHTML = `<img src="${gifUrl}" alt="Weather conditions visualization">`;
        }
    });
}

createLocationForm();