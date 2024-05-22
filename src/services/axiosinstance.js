import axios from "axios";

const baseURL = 'http://localhost:8000';

const httpClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

function getAccessTokenCookie () {
}

httpClient.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessTokenCookie();
    if (accessToken) {
      const { headers } = config;
      headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
