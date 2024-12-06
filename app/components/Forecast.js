import {useState, useEffect } from "react";
import { fetchForecastData } from "../api/forecastApi";

const WeatherForecast = ({ city }) => {
    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {
        const getForecastData = async () => {
            const data = await fetchForecastData(city);
            setForecastData(data);
        };

        getForecastData();
    }, [city]);

    return (
        <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>
            <div className="grid grid-cols-2 gap-4">
                {forecastData.map((day, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <p>{day.date}</p>
                        <div className="flex items-center">
                            <img 
                            src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                            alt={day.description} className="w-12 h-12" />
                            <span className="ml-2">{day.temperature} °C</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeatherForecast;