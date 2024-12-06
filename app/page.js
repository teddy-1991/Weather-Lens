"use client"
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import { useState, useEffect } from "react";
import { fetchBackgroundImage } from "./api/imageApi";
import WeatherForecast from './components/Forecast';

export default function Home() {
  const [city, setCity] = useState("Calgary");
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const getBackgroundImage = async () => {
      const imageUrl = await fetchBackgroundImage(city);
      setBackgroundImage(imageUrl);
    };

    getBackgroundImage();
  }, [city]);

  return (
    <div className="w-3/4 bg-cover bg-center min-h-screen p-4"
    style={{ backgroundImage: `url(${backgroundImage})`}}>
      <Header />
      <WeatherInfo city={city} />
      <WeatherForecast city={city} />
    </div>
  );
}
