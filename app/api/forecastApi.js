export const fetchForecastData = async (city) => {
    const apiKey = '102ecd62a97186769bbe376f56e45d9d';
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
    );

    const data = await res.json();

    const dailyData = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00"));

    return dailyData.map((day) => ({
        date: day.dt_txt.split(" ")[0],
        temperature: Math.round(day.main.temp),
        description: day.weather[0].description,
        icon: day.weather[0].icon,
    }));
};