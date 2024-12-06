import { useState, useEffect } from "react";
import { fetchWeatherData } from "../api/weatherApi";

const WeatherInfo = ( {city} ) => {
  
  const [weatherData, setWeatherData] = useState(null);
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

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
          <h2 className="text-xl font-semibold">{city}</h2>
          <p>{formattedDate}</p>
        </div>
        <div className="text-center">
          <p>{weatherData.temperature} °C</p>
          <img 
          src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
          alt="Weather Icon" className="w-16 h-16" />
          <p>{weatherData.weather}</p>
        </div>  
      </div>
    )
  );
};

export default WeatherInfo;