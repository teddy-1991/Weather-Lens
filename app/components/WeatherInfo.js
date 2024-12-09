import { useState, useEffect } from "react";
import { fetchWeatherData } from "../api/weatherApi";
import { convertTemperature } from "./convertTemp";

const WeatherInfo = ( {city, unit, toggleUnit} ) => {
  
  const [weatherData, setWeatherData] = useState(null);
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    };

    if (city) {
      getWeatherData();
    }
    
  }, [city]);

  if (!city.trim()) {
    return null;
  }
  
  return (
    // Weather Info
    weatherData && (
      <div className="mt-8 bg-white/70 flex justify-evenly p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="text-3xl font-semibold">{formattedCity}</h2>
          <p>{formattedDate}</p>
        </div>
        <div className="text-center flex justify-center items-center">
          <div>
            <p className="text-4xl">{convertTemperature(weatherData.temperature, unit).toFixed(1)} °{unit}</p>
            <button onClick={toggleUnit}>
              Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
            </button>
          </div>
          <div className="ml-8 flex flex-col items-center justify-center">
            <p>{weatherData.weather}</p>
            <img 
            src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
            alt="Weather Icon" className="w-16 h-16 bg-black/30 rounded-full p-2" />
          </div>
        </div>  
      </div>
    )
  );
};

export default WeatherInfo;