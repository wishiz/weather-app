type Clouds = {
  all: number;
};

type Coord = {
  lon: number;
  lat: number;
};

type Main = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type Sys = {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
};

type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type Wind = {
  deg: number;
  gust: number;
  speed: number;
};

export type WeatherResponse = {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
};

export type SeoData = {
  title: string;
};
