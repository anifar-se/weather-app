export const fetchWeatherData = async (location: string): Promise<any> => {
    const response = await fetch(`/api/weather?location=${location}`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    return data;
};