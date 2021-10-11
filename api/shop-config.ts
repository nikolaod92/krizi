import { AxiosRequestConfig } from "axios";

type ShopConfig = {
  config: AxiosRequestConfig;
};

export default {
  pinnbet: {
    config: {
      method: "post",
      url: "https://land.pinnbet.rs/scanticketapi/tickets/find",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      data: JSON.stringify(["2115198662"])
    }
  },
  merkur: {
    config: {}
  }
};
