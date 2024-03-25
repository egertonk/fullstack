import { useQuery } from "react-query";
import { getWrapper } from "./fetch.ts";
import { FormValues, USASearchTypes } from "../types/USAJob-Tyoes.ts";

const url = "https://data.usajobs.gov";
// const Keyword = "Software Development"; // user search
// const LocationName = "Washington, DC"; // user search
// user search
// https://data.usajobs.gov/api/Search?LocationName=Atlanta,%20Georgia.
export const getUserSearch = (
  endpointName?: string,
  formValues?: FormValues
): Promise<USASearchTypes> => {
  const location = `${url}/api/Search?LocationName=${formValues?.location}`;
  const title = `${url}${endpointName}&Keyword=${formValues?.title}&LocationName=${formValues?.location}`;
  if (formValues?.title.length === 0 && formValues?.location.length > 0)
    return getWrapper(location);
  else return getWrapper(title);
};

export const useGetUser = (formValues?: FormValues, refetchAgain?: boolean) => {
  console.log("title:  ", formValues);
  return useQuery(
    [`search`],
    () => getUserSearch("/api/search?JobCategoryCode=2210", formValues),
    {
      placeholderData: [] as unknown as USASearchTypes,
      enabled: refetchAgain,
    }
  );
};
