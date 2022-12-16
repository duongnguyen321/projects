import React from "react";
import config from "../../Configs/Config.json";
import endpoint from "../../Configs/Endpoint.json";

const { SERVER_API } = config;

export default function useClient(serverApi = null) {
  //Nếu serverApi không được truyền vào => lấy SERVER_API mặc định từ config
  serverApi = serverApi ?? SERVER_API;

  const client = {
    ...endpoint,

    callApi: async function (
      url,
      method,
      params = {},
      body = {},
      token = null
    ) {
      url = serverApi + url;

      if (Object.keys(params).length) {
        url = url + "?" + new URLSearchParams(params).toString();
      }

      const headers = {
        "Content-Type": "application/json",
      };

      if (token !== null) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const options = {
        method: method,
        headers: headers,
      };

      if (Object.keys(body).length) {
        options.body = JSON.stringify(body);
      }

      const res = await fetch(url, options);

      const data = await res.json();

      return {
        response: res,
        data: data,
      };
    },

    get: function (url, params = {}, token = null) {
      return this.callApi(url, "GET", params, {}, token);
    },

    post: function (url, body, params = {}, token = null) {
      return this.callApi(url, "POST", params, body, token);
    },

    put: function (url, body, params = {}, token = null) {
      return this.callApi(url, "PUT", params, body, token);
    },

    patch: function (url, body, params = {}, token = null) {
      return this.callApi(url, "PATCH", params, body, token);
    },

    delete: function (url, params = {}, token = null) {
      return this.callApi(url, "DELETE", params, {}, token);
    },
  };

  return client;
}

/*
- Trong 1 dự án có thể có nhiều server api
- endpoint có thể thay đổi 
*/
