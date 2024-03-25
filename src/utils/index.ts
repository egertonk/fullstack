// Common Use

const host = "data.usajobs.gov";
const userAgent = "egertonduring@yahoo.com";
const authKey = "8CfcZzlmKOxAUQ34MPIhoo60uEzd8+4gh3cfHlbJzlg=";

export const fetchData = {
  method: "GET",
  headers: new Headers({
    Host: host,
    "User-Agent": userAgent,
    "Authorization-Key": authKey,
  }),
};
