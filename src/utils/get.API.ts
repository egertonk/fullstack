import { useQuery } from "react-query";
import { getWrapper, getWrapperUSAJobs } from "./fetch.ts";
import { FormValues, USASearchTypes } from "../types/USAJob-Tyoes.ts";

// export const url = "https://data.usajobs.gov";
export const localUrl = "http://localhost:8080"; // todo Move

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

// USAJOBs
export const geUsaJobs = (
  endpointName?: string,
  formValues?: FormValues
): Promise<USASearchTypes> => {
  return getWrapper(`${localUrl}/usajobs/${endpointName}`, formValues).then(
    (data) => {
      return data;
    }
  );
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
