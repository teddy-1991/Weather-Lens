# 🌦️ Weather Lens

## 📌 Overview  
Weather Lens is a real-time weather application that allows users to search for any city and view the current weather conditions. The app also dynamically updates the background image using an external API to reflect the searched location.  

## 🚀 Features  
- **Real-time Weather Data:** Fetches up-to-date weather information using the OpenWeather API.  
- **City-Based Dynamic Backgrounds:** Retrieves high-quality images via an external API to match the searched city.  
- **Responsive Design:** Optimized for both desktop and mobile devices for seamless user experience.  

## 🛠️ Tech Stack  
- **Frontend:** Next.js, JavaScript, Tailwind CSS  
- **APIs:**  
  - **OpenWeather API** (for real-time weather data)  
  - **Unsplash API** (for city-based background images)  

## 📷 Demo  
![Weather Lens Screenshot](https://via.placeholder.com/800x400)  
*Example screenshot of the Weather Lens UI*  

## 🔗 Live Demo  
[Check out Weather Lens](https://cprg306-project-nine-rust.vercel.app/)  

## 📌 Installation & Setup  
If you want to run this project locally, follow these steps:  

```bash
# Clone the repository
git clone https://github.com/teddy-1991/weather-lens.git

# Navigate to the project directory
cd weather-lens

# Install dependencies
npm install

# Create a .env file and add your API keys
NEXT_PUBLIC_WEATHER_API_KEY=your_openweather_api_key
NEXT_PUBLIC_IMAGE_API_KEY=your_image_api_key

# Run the development server
npm run dev
