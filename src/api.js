import { processCurrentWeather } from './processCurrentWeather';
import { processForecast } from './processForecast';

const visualCrossingKey = 'QFQ59ZMVGLUGMZ8LTTYYK8QPV';
const giphyKey = 'G1GiuZ2UGAyhpKhmE8AMQ3TDiXAEjNbG';

async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${visualCrossingKey}`);
        const data = await response.json();

        if (!data.currentConditions) {
            console.warn('Unexpected data structure:', data);
        }

        // Process weather data
        const currentWeather = processCurrentWeather(data);
        const forecast = processForecast(data);

        console.log('Current Weather:', currentWeather);
        console.log('Forecast:', forecast);

        // Get GIF based on current weather condition
        const currentCondition = data.currentConditions.conditions;
        getGif(currentCondition);

        return { currentWeather, forecast };
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function getGif(weatherCondition) {
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=${giphyKey}&s=${weatherCondition}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('GIF data:', data);
    } catch(error) {
        console.error('Error fetching GIF:', error);
    }
}

export { getWeather, getGif };