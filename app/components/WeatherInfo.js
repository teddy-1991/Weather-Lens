import { useState, useEffect } from "react";
import { fetchWeatherData } from "../api/weatherApi";

const WeatherInfo = ( {city} ) => {
  
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    }

    if (city) {
      getWeatherData();
    }
    
  }, [city]);

  return (
    // Weather Info
    weatherData && (
      <div className="mt-8 flex justify-between bg-white p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="text-xl font-semibold">Weather</h2>
          <p>{weatherData.weather}</p>
          <p>{weatherData.temperature} °C</p>
        </div>
        <div className="text-right">
          <img 
          src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
          alt="Weather Icon" className="w-16 h-16" />
        </div>  
      </div>
    )
  );
};

export default WeatherInfo;