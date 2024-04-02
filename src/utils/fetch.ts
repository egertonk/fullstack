import { FormValues } from "../types/USAJob-Tyoes.ts";
import { fetchData } from "./index.ts";

export const getWrapperUSAJobs = async (url: string) =>
  fetch(url, fetchData).then((response) => response.json());

export const getWrapper = async (url: string, formValues?: FormValues) => {
  console.log("url ", url);
  console.log("body ", formValues);

  // Construct query parameters
  const queryParams = new URLSearchParams();
  if (formValues) {
    Object.keys(formValues).forEach((key) => {
      queryParams.append(key, formValues[key]);
    });
  }

  // Append query parameters to URL
  const fullUrl = `${url}?${queryParams.toString()}`;

  return fetch(fullUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data ", data);
      return data;
    })
    .catch((error) => {
      return error;
    });
};
