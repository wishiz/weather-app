import { SeoData } from '../types';

export const convertFahrenheitToCelsius = (fahrenheitTemp: number) =>
  Math.round((fahrenheitTemp - 32) / 1.8);

export const getDayNightToken = (timezone: number) => {
  const dateNowInMs = new Date().getTime();
  const timezoneInMs = timezone * 1000;
  const timezoneOffsetInMs = new Date().getTimezoneOffset() * 60000;

  const date = new Date(dateNowInMs + timezoneInMs + timezoneOffsetInMs);
  return date.getHours() > 5 && date.getHours() < 20 ? 'day' : 'night';
};

export const getSeoData = (data: SeoData) => {
  const title = data.title || 'Weather forecast';
  document.title = title;
};
