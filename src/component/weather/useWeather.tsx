import React, { useEffect, useState } from "react";
import { WeatherData } from "../../types/WeatherTypes.tsx";
import { useGetWeather } from "../../utils/get.API.ts";

export const useWeather = (): Record<string, any> => {
  const [weatherLocation, setWeatherLocation] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [refetchAgain, setRefetchAgain] = React.useState(false);

  const { data, isFetched } = useGetWeather(
    weatherLocation,
    weatherLocation.length > 0 ? refetchAgain : true
  );

  useEffect(() => {
    if (isFetched) setWeatherData(data as WeatherData);
  }, [data]);

  const handleChangeWeather = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWeatherLocation(value);
  };

  const handleWeatherSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRefetchAgain(true);
  };

  return {
    weatherData,
    weatherLocation,
    setWeatherLocation,
    handleChangeWeather,
    handleWeatherSubmit,
  };
};
