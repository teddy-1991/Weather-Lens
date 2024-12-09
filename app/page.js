"use client"
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import { useState, useEffect } from "react";
import { fetchBackgroundImage } from "./api/imageApi";
import WeatherForecast from './components/Forecast';

export default function Home() {
  const [city, setCity] = useState("");
  const [displayCity, setDisplayCity] = useState("Calgary");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [debouncedCity, setDebouncedCity] = useState("Calgary");
  const [unit, setUnit] = useState("C");

  const handleCityChange = (value) => {
    setCity(value);

    if (value.trim() === "") {
      return;
    }

    setDisplayCity(value);
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      
      setDebouncedCity(city.trim() === "" ? displayCity : city);
      
    }, 1000);

    return () => clearTimeout(timer);
  }, [city, displayCity]);

  useEffect(() => {
    const getBackgroundImage = async () => {
      if (debouncedCity) {
        const imageUrl = await fetchBackgroundImage(displayCity);
        setBackgroundImage(imageUrl);
      }
    };

    getBackgroundImage();
  }, [debouncedCity]);

  return (
    <div className="bg-cover bg-center min-h-screen p-4"
    style={{ backgroundImage: `url(${backgroundImage})`}}>
      <Header city={city} setCity={handleCityChange} />
      <WeatherInfo city={displayCity} unit={unit} toggleUnit={toggleUnit} />
      <WeatherForecast city={displayCity} unit={unit} />
    </div>
  );
};
