import { fetchData } from "./index.ts";

export const getWrapper = async (url: string) =>
  fetch(url, fetchData).then((response) => response.json() || []);
