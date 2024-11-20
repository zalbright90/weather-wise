// Map of weather conditions to icon names
const iconMap = {
    'snow': 'snow',
    'snow-showers-day': 'snow-showers-day',
    'snow-showers-night': 'snow-showers-night',
    'thunder-rain': 'thunder-rain',
    'thunder-showers-day': 'thunder-showers-day',
    'thunder-showers-night': 'thunder-showers-night',
    'rain': 'rain',
    'showers-day': 'showers-day',
    'showers-night': 'showers-night',
    'fog': 'fog',
    'wind': 'wind',
    'cloudy': 'cloudy',
    'partly-cloudy-day': 'partly-cloudy-day',
    'partly-cloudy-night': 'partly-cloudy-night',
    'clear-day': 'clear-day',
    'clear-night': 'clear-night'
};

// Helper function to determine if its night
function isNightTime(datetime, sunrise, sunset) {
    const hour = new Date(datetime).getHours();
    const sunriseHour = new Date(sunrise).getHours();
    const sunsetHour = new Date(sunset).getHours();

    return hour < sunriseHour || hour >= sunsetHour;
}

// Function to get the appropriate icon
function getWeatherIcon(conditions, datetime, sunrise, sunset) {
    const isNight = isNightTime(datetime, sunrise, sunset);

    //Convert conditions for matching conditions
    const normalizedConditions = conditions
       .toLowerCase()
       .split(',')
       .map(condition => condition.trim().replace(/\s+/g, '-'));

    // Check for specific conditions that have day/night
    if (normalizedConditions.includes('clear') || normalizedConditions.includes('sunny')) {
        return isNight ? 'clear-night' : 'clear-day';
    }

    if (normalizedConditions.includes('partly-cloudy')) {
        return isNight ? 'partly-cloudy-night' : 'partly-cloudy-day';
    }

    if (normalizedConditions.includes('shower')) {
        return isNight ? 'showers-night' : 'showers-day';
    }
    
    if (normalizedConditions.includes('thunder')) {
        return isNight ? 'thunder-showers-night' : 'thunder-showers-day';
    }

    // Loop through normalized conditions to find a match in iconMap
    for (const condition of normalizedConditions) {
        if (iconMap[condition]) {
            return iconMap[condition];
        }
    }
    console.log("Normalized Conditions:", normalizedConditions);
    return 'cloudy';
    
}

export { getWeatherIcon };
