import React, { useState } from 'react';
import cn from 'classnames';

import { convertFahrenheitToCelsius } from '../helpers';
import { WeatherResponse } from '../types';

type Props = { mainWeather: WeatherResponse['main'] };

const Temperature = ({ mainWeather: { temp, feels_like } }: Props) => {
  const [isTempInCelsius, setTempInCelsius] = useState(true);

  const tempActual = isTempInCelsius ? convertFahrenheitToCelsius(temp) : Math.round(temp);

  const tempFeelsLike = isTempInCelsius
    ? convertFahrenheitToCelsius(feels_like)
    : Math.round(feels_like);

  return (
    <>
      <div className="flex">
        <span className="text-9xl mr-4">{tempActual}</span>
        <div className="text-white/70">
          <button
            type="button"
            onClick={() => setTempInCelsius(false)}
            className={cn('text-lg', { 'font-bold text-white': isTempInCelsius === false })}
          >
            °F
          </button>
          <div className="h-px w-full bg-white"></div>
          <button
            type="button"
            onClick={() => setTempInCelsius(true)}
            className={cn('text-lg', { 'font-bold text-white': isTempInCelsius })}
          >
            °C
          </button>
        </div>
      </div>
      <span>Feels like: {`${tempFeelsLike}${isTempInCelsius ? '°C' : '°F'}`}</span>
    </>
  );
};

export default Temperature;
