import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WiRain, WiDaySunny, WiCloudy } from 'react-icons/wi';
import styles from './Weather.module.css'



function Weather() {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    fetchForecastData();
  }, []);

  const fetchForecastData = async () => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/forecast?q=Uttarakhand&cnt=7&appid=915349dff148d92674bea6516c4b7905'
      );
      setForecastData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderForecast = () => {
    if (!forecastData) {
      return <p className={styles.loadingforecast}>Loading forecast...</p>;
    }
  
    const forecastList = forecastData.list;
  
    const currentDate = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayIndex = currentDate.getDay();
  
    return forecastList.map((forecast, index) => {
      const date = new Date();
      date.setDate(currentDate.getDate() + index);
      const dayIndex = (currentDayIndex + index) % 7;
      const day = days[dayIndex];
      const temperatureKelvin = forecast.main.temp;
      const temperatureCelsius = temperatureKelvin - 273.15; 
      const description = forecast.weather[0].description;
      let weatherIcon;
  if (description.includes('rain')) {
    weatherIcon = <WiRain />;
  } else if (description.includes('cloud')) {
    weatherIcon = <WiCloudy />;
  } else {
    weatherIcon = <WiDaySunny />;
  }
  
      return (
        <div key={forecast.dt} className={styles.forecastitem}>
      <p className={styles.day}>{day}</p>
      <p className={styles.temp}> {temperatureCelsius.toFixed(2)} °C</p>
      <div className={styles.description}>
        <p>{description}</p>
      <div className={styles.weathericon}>{weatherIcon}</div>
      </div>
    </div>
      );
    });
  };
  
  
  
  
  return (
    <>
    <h2 className={styles.waveTitle}>Next 7 Days Weather Forecast of Uttarakhand</h2>
    <div className={styles.container}>
      {renderForecast()}
    </div>
    </>
  );
}

export default Weather;
