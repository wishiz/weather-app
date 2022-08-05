import React from 'react';
import { WeatherResponse } from '../../types';

import Temperature from '../Temperature';

type Props = { weatherData: WeatherResponse };

const Weather = ({ weatherData }: Props) => {
  return (
    <section>
      <h1 className="font-medium text-5xl mb-4">
        {weatherData.name}, {weatherData.sys.country}
      </h1>
      <Temperature mainWeather={weatherData.main} />
    </section>
  );
};

export default Weather;
