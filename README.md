# WeatherWise 🌦️

WeatherWise is a dynamic weather application that provides real-time weather data for a user-specified location, including visual representations via GIFs that reflect the current weather conditions. This project leverages both the Visual Crossing API for weather data and the Giphy API for fetching weather-themed GIFs.

## Features
- Real-time Weather Data: Fetches current weather information and a 7-day forecast based on the user’s location input.
- GIF Integration: Displays a relevant GIF for the current weather conditions.
- Modular JavaScript: Built with modular JavaScript, making each function and feature separate and reusable.
- User Input: Users can input any location to get up-to-date weather data.
- Dynamic UI: The app's interface is updated dynamically using JavaScript, giving users an interactive experience.

## Getting Started
To explore the project, follow these steps:

- Open the app on GitHub Pages: The app is deployed on [GitHub Pages](https://zalbright90.github.io/weather-wise/). Simply navigate to the provided link to use the app live.
- Enter a location: In the search bar, type the name of a city or location and click Get Weather to see the current conditions (temperature, conditions, humidity, wind speed and direction), and a 15-day forecast.

### Project Structure
- index.html: Contains the basic HTML structure.
- style.css: Basic styling for the application.
- api.js: Fetches weather data and GIFs, and calls functions to process and display data.
- processCurrentWeather.js: Processes current weather data received from the API.
- processForecast.js: Processes forecast data received from the API.
- index.js: Initializes the app, adds the form for user input, and dynamically loads content.

### Tech Stack
- HTML5
- CSS3
- JavaScript (ES6)
- Visual Crossing Weather API for weather data
- Giphy API for GIF integration

### Future Improvements
- UI Enhancements: Adding more styling to improve the app’s visual appeal.
- Error Handling: Better handling for cases where data cannot be fetched.
- Additional Features: Include more detailed weather information and animations.
