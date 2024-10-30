const visualCrossingKey = 'QFQ59ZMVGLUGMZ8LTTYYK8QPV';
const giphyKey = 'G1GiuZ2UGAyhpKhmE8AMQ3TDiXAEjNbG';

async function getWeather(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${visualCrossingKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Weather data:', data);

        // Get GIF based on current weather condition
        const currentCondition = data.currentConditions.conditions;
        getGif(currentCondition);
    } catch (error)
    {
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