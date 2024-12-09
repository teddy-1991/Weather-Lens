import {useState, useEffect } from "react";
import { fetchForecastData } from "../api/forecastApi";
import { convertTemperature } from "./convertTemp";

const WeatherForecast = ({ city, unit }) => {
    const [forecastData, setForecastData] = useState([]);
    useEffect(() => {
        const getForecastData = async () => {
            const data = await fetchForecastData(city);
            setForecastData(data);
        };

        getForecastData();
    }, [city]);

    return (
        <section className="mt-8 bg-white/70 p-6 rounded-lg shadow-lg">
            <h2 className="text-center text-xl font-semibold mb-4">5-Day Forecast</h2>
            <div className="grid grid-cols-5 gap-4 text-center">
                {forecastData.map((day, index) => (
                    <div key={index} className="flex items-center flex-col">
                        <p>{day.date}</p>
                        <div className="flex items-center">
                            <img 
                            src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                            alt={day.description} className="w-12 h-12 bg-black/30 rounded-full p-2" />
                        </div>
                        <div>
                        <span className="ml-2">{convertTemperature(day.temperature, unit).toFixed(1)}°{unit}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeatherForecast;