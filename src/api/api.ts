import axios from 'axios';
import { WeatherResponse } from '../types';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const currentWeatherApi = {
  getCurrentWeather(lat: number, lon: number, cb: (responseData: WeatherResponse) => void) {
    return instance
      .get(`/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
      .then(response => {
        cb(response.data);
        return response.data;
      });
  },
};
