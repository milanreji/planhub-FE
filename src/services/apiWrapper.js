import httpClient from "./axiosinstance";

export const apiRequest = async (url, method, payload = {}) => {
  let headers = {};

  if (url === "/auth/login") {
    headers["Content-Type"] = "application/x-www-form-urlencoded";
  } else {
    headers["Content-Type"] = "application/json";
  }
  try {
    const result = await httpClient({
      url: url,
      method: method,
      data: payload,
      headers: headers,
    });
    return result?.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
