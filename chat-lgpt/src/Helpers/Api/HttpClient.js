import endpoint from "../../Configs/endpoint.json"

export default class HttpClient {
  constructor() {
    const endpointArr = Object.keys(endpoint);
    if (endpointArr.length) {
      endpointArr.forEach((item) => {
        this[item.toLowerCase()] = endpoint[item];
      });
    }
  }
  callApi = async (url, method, params = {}, body = null, token) => {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Authorization": `Bearer ${token}`
      },
    };
    if (body !== null) {
      options.body = JSON.stringify(body);
    }
    if (Object.keys(params).length) {
      const searchParams = new URLSearchParams(params).toString();
      if (url.indexOf("?") !== -1) {
        url += `&${searchParams}`;
      } else {
        url += `?${searchParams}`;
      }
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return {
      response: response,
      data: data,
    };
  };
  post = (url, body, params = {}, token) => {
    return this.callApi(url, "POST", params, body, token);
  };
}
