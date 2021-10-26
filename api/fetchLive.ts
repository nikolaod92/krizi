import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const getLiveMatchesList = () => {
  const response = axios.get("https://live.pinnbet.rs/api.live/offer/activeEvents");
  console.log(response);
};

fetch("https://live.pinnbet.rs/api.live/offer/activeEvents", {
  headers: {
    accept: "application/json, text/plain, */*",
    intercept: "false",
    "sec-ch-ua": '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"'
  },
  referrer: "https://www.pinnbet.rs/",
  referrerPolicy: "strict-origin-when-cross-origin",
  body: null,
  method: "GET",
  mode: "cors",
  credentials: "omit"
});
