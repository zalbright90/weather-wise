export function processForecast(data) {
    const dailyForecast = data.days.map(day => ({
        date: day.datetime,
        maxTemp: day.tempmax,
        minTemp: day.tempmin,
        conditions: day.conditions || "N/A"
    }));
    
    return dailyForecast;
}