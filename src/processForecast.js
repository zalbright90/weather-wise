import { getWeatherIcon } from './weatherIcons';

export function processForecast(data) {
    const dailyForecast = data.days.slice(0, 7).map(day => ({
        date: day.datetime,
        maxTemp: day.tempmax,
        minTemp: day.tempmin,
        conditions: day.conditions || "N/A",
        icon: getWeatherIcon(
            day.conditions,
            day.datetime,
            day.sunrise,
            day.sunset
        )
    }));
    
    return dailyForecast;
}