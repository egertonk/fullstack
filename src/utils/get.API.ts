import { useQuery } from "react-query";
import { getRegularWrapper, getWrapper, getWrapperUSAJobs } from "./fetch.ts";
import { FormValues, USASearchTypes } from "../types/USAJob-Tyoes.ts";
import { WeatherData, WeatherError } from "../types/WeatherTypes.tsx";
import { USMarketsData } from "../types/USMarkets.ts";

// export const url = "https://data.usajobs.gov";
// export const localUrl =
//   "http://ec2-18-217-69-142.us-east-2.compute.amazonaws.com:8080"; // todo Move

// export const getUserSearch = (
//   endpointName?: string,
//   formValues?: FormValues
// ): Promise<USASearchTypes> => {
//   const location = `${url}/api/Search?LocationName=${formValues?.location}`;
//   const title = `${url}${endpointName}&Keyword=${formValues?.title}&LocationName=${formValues?.location}`;
//   if (formValues?.title.length === 0 && formValues?.location.length > 0)
//     return getWrapperUSAJobs(location);
//   else return getWrapperUSAJobs(title);
// };

// export const useGetUser = (formValues?: FormValues, refetchAgain?: boolean) => {
//   return useQuery(
//     [`search`],
//     () => getUserSearch("/api/search?JobCategoryCode=2210", formValues),
//     {
//       placeholderData: [] as unknown as USASearchTypes,
//       enabled: refetchAgain,
//     }
//   );
// };

const aws = "http://acme.duringfamily.com:8080/";
const duringURL = "https://duringfamily.com/";
const isInGit = window.location.href.includes("github.io");

// USAJOBs
export const geUsaJobs = (
  endpointName?: string,
  formValues?: FormValues
): Promise<USASearchTypes> => {
  // const url = isInGit ? `${aws}usajobs/` : `usajobs/`;
  const url = `usajobs/`;

  return getWrapper(`${url}${endpointName}`, formValues).then((data) => {
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

  // const url = isInGit ? `${aws}weather/` : `weather/`;
  const url = `weather/`;

  return getRegularWrapper(url, body).then((data) => {
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
  // const url = isInGit ? `${aws}us-markets/` : `us-markets/`;
  const url = `us-markets/`;
  console.log("sticker  = ", sticker);
  console.log("url  = ", url);
  return getRegularWrapper(url, body).then((data) => {
    return data;
  });
};

export const useGetUSMarkets = (sticker: string, refetchAgain?: boolean) => {
  return useQuery([`us-markets`], () => getUSMarkets(sticker), {
    enabled: refetchAgain,
  });
};
