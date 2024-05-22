import httpClient from "./axiosinstance";

export const apiRequest = async (url, method, payload = {}) => {
  console.log(url,typeof(method),payload, 'api');
    try {
      const result = await httpClient({
        url: url,
        method: method,
        data: payload,
      });
      return result?.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };