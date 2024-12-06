"use client"
import Header from './components/Header';
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
      {/* Weather Info */}
      <div className="mt-8 flex justify-between bg-white p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="text-xl font-semibold">Weather</h2>
          <p>fjfj</p>
        </div>
        <div className="text-right">
          <h3 className="text-2xl">d</h3>
          <p>ajf</p>
        </div>
      </div>

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
