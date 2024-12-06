"use client"
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import { useState, useEffect } from "react";
import { fetchBackgroundImage } from "./api/imageApi";

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
    <div className="bg-cover bg-center min-h-screen p-4"
    style={{ backgroundImage: `url(${backgroundImage})`}}>
      <Header />
      <WeatherInfo city={city} />

      {/* Weather Forecast */}
      <section className="mt-8 bg-slate-200">
        <h2 className="text-xl font-semibold">5 day Forecast</h2>
        <div>
          djfjejdi
        </div>
      </section>
    </div>
  );
}
