import { useQuery } from "react-query";
import { getWrapper } from "./fetch.ts";
import { FormValues, USASearchTypes } from "../types/USAJob-Tyoes.ts";
import { WeatherData, WeatherError } from "../types/WeatherTypes.tsx";
import { USMarketsData } from "../types/USMarkets.ts";

// const aws = "http://acme.duringfamily.com:8080/";
// const duringURL = "https://duringfamily.com/";
// const isInGit = window.location.href.includes("github.io");
// const awsURL = "http://18.217.69.142:8080/";

// USAJOBs
export const geUsaJobs = (
  endpointName?: string,
  formValues?: FormValues
): Promise<USASearchTypes> => {
  return getWrapper(`usajobs/${endpointName}`, formValues).then((data) => {
    return data;
  });
};

export const useGetUsaJobs = (
  formValues?: FormValues,
  refetchAgain?: boolean
) => {
  return useQuery([`usajobs`], () => geUsaJobs("current-jobs", formValues), {
    placeholderData: [] as unknown as USASearchTypes,
    enabled: refetchAgain,
  });
};

// Weather
export const getUsaWeather = (
  weatherLocation: string
): Promise<WeatherData | WeatherError> => {
  const body = {
    weatherLocation: weatherLocation || "",
  };

  return getWrapper("weather/", body).then((data) => {
    return data;
  });
};

export const useGetWeather = (
  weatherLocation: string,
  refetchAgain?: boolean
) => {
  return useQuery([`weather`], () => getUsaWeather(weatherLocation), {
    enabled: refetchAgain,
  });
};

// US Markets
export const getUSMarkets = (sticker: string): Promise<USMarketsData> => {
  const body = {
    sticker: sticker || "AMZ",
  };

  return getWrapper(`us-markets/`, body).then((data) => {
    return data;
  });
};

export const useGetUSMarkets = (sticker: string, refetchAgain?: boolean) => {
  return useQuery([`us-markets`], () => getUSMarkets(sticker), {
    enabled: refetchAgain,
  });
};
