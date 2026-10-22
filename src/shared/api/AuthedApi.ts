import { create, InternalAxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_SESSION_STORAGE_KEY } from "../config";

const refreshPath = "account/refresh" as const;

export const authedApi = create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});

authedApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = sessionStorage.getItem(ACCESS_TOKEN_SESSION_STORAGE_KEY);

    if (token) {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

authedApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (
      originalRequest.url?.includes(refreshPath) ||
      error.response?.status !== 401 ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const { data } = await authedApi.post(refreshPath);
      const accessToken = data.accessToken;

      sessionStorage.setItem(ACCESS_TOKEN_SESSION_STORAGE_KEY, accessToken);

      originalRequest.headers = originalRequest.headers ?? {};
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;

      return authedApi(originalRequest);
    } catch (refreshError: any) {
      console.log(refreshError);

      sessionStorage.clear();
      return Promise.reject(new Error("SESSION_EXPIRED"));
    }
  },
);
