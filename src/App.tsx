import React, { useState, useEffect } from 'react';
import { currentWeatherApi } from './api/api';
import { WeatherResponse } from './types';
import { getSeoData } from './helpers';

import PageWrapper from './components/PageWrapper/PageWrapper';
import CurrCityWeather from './components/CurrCityWeather/CurrCityWeather';

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });

    if (!lat || !lon) return;
    currentWeatherApi.getCurrentWeather(lat, lon, data => setWeatherData(data));
  }, [lat, lon]);

  useEffect(() => {
    getSeoData({ title: weatherData?.name });
  }, [weatherData]);

  if (!weatherData) return null;

  // keep it temporarity
  console.log(`weatherData`, weatherData);

  const mainWeatherToken = weatherData.weather[0].main.toLowerCase();

  return (
    <PageWrapper mainWeather={mainWeatherToken} timezone={weatherData.timezone}>
      <CurrCityWeather weatherData={weatherData} />
    </PageWrapper>
  );
}

export default App;
