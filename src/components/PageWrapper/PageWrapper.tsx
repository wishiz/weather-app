import React, { PropsWithChildren } from 'react';

import { getDayNightToken } from '../../helpers';

const PageWrapper = ({
  mainWeather,
  timezone,
  children,
}: PropsWithChildren<{ mainWeather: string; timezone: number }>) => {
  const dayNightToken = getDayNightToken(timezone);

  return (
    <>
      <main
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${mainWeather}-${dayNightToken}.jpg)` }}
      >
        <div className="max-w-6xl px-4 mx-auto">
          <div className=" bg-black/40 text-white rounded-2xl p-8">{children}</div>
        </div>
      </main>
      <footer className="absolute inset-x-0 bottom-0 text-xs">
        <a href="https://www.flaticon.com/free-icons/wind" title="wind favicon">
          Wind favicon created by QudaDesign - Flaticon
        </a>
      </footer>
    </>
  );
};

export default PageWrapper;
