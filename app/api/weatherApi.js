export const fetchWeatherData = async (city) => {
    const apiKey = '102ecd62a97186769bbe376f56e45d9d';
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
    );

    const data = await res.json();
    return {
        temperature: data.main.temp,
        weather: data.weather[0]?.description,
        icon: data.weather[0]?.icon,
    };
};