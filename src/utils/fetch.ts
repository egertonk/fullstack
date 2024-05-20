import { FormValues } from "../types/USAJob-Tyoes.ts";
import { fetchData } from "./index.ts";

const handleError = async (data: Response, noJSON: boolean) => {
  // console.log("data = ", data);
  // console.log("noJSON = ", data);
  if (data.status === 400) {
    throw new Error("Our ba");
  } else {
    throw new Error("Please reach out to support");
  }
};

// export const getWrapperUSAJobs = async (url: string) =>
//   fetch(url, fetchData).then((response) => response.json());

export const getWrapper = async (url: string, formValues?: FormValues) => {
  // Construct query parameters
  const queryParams = new URLSearchParams();
  if (formValues) {
    Object.keys(formValues).forEach((key) => {
      queryParams.append(key, formValues[key]);
    });
  }

  // Append query parameters to URL
  const fullUrl = `${url}?${queryParams.toString()}`;
  console.log("fullUrl = ", fullUrl);
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS",
  };

  // headers: { "Content-Type": "application/json", Accept: "application/json" },
  return fetch(fullUrl, {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      // const noJSON = !data.headers
      //   .get("content-type")
      //   ?.includes("application/json");
      // handleError(data, noJSON);
      return data;
    })
    .catch((error) => {
      return error;
    });
};

// export const getRegularWrapper = async (url: string, body: []) => {
//   const queryParams = new URLSearchParams();

//   for (const key in body) {
//     if (Object.hasOwnProperty.call(body, key)) {
//       const value = body[key];
//       queryParams.append(`${key}`, value);
//     }
//   }

//   const fullUrl = `${url}?${queryParams.toString()}`;
//   const requestOptions = {
//     method: "GET",
//     redirect: "follow",
//     mode: "cors",
//     headers: { "Content-Type": "application/json", Accept: "application/json" },
//     body: JSON.stringify(body),
//   };

//   return fetch(url, {
//     method: "GET",
//     body: JSON.stringify(body),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       return error;
//     });
// };
