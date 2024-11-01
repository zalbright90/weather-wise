export function processCurrentWeather(data) {
    const currentConditions =  data.currentConditions || {};
    
    return {
        temperature: data.currentConditions.temp,
        conditions: data.currentConditions.conditions,
        humidity: data.currentConditions.humidity,
        windSpeed: data.currentConditions.windspeed,
        windDirection: data.currentConditions.winddir,
    };
}