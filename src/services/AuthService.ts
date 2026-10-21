import {
  AxiosInstance,
  create,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { IUser } from "@entities/IUser.ent";
import { ACCESS_TOKEN_SESSION_STORAGE_KEY } from "@shared/config";

const authPath = "auth";

const loginPath = "/login";
const registerPath = "/register";
const refreshPath = "/refresh";
const mePath = "/me";

interface AuthDto {
  login: string;
  password: string;
}

export class AuthServiceC {
  constructor(private readonly api: AxiosInstance) {}

  async login(dto: AuthDto): Promise<string> {
    try {
      const { data } = await this.api.post<{ accessToken: string }>(loginPath, {
        login: dto.login,
        password: dto.password,
      });

      const accessToken = data.accessToken;
      sessionStorage.setItem(ACCESS_TOKEN_SESSION_STORAGE_KEY, accessToken);

      return accessToken;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || error.message);
      }
      throw error;
    }
  }

  async register(dto: AuthDto): Promise<string> {
    try {
      const { data } = await this.api.post<{ accessToken: string }>(
        registerPath,
        { login: dto.login, password: dto.password },
      );

      const accessToken = data.accessToken;
      sessionStorage.setItem(ACCESS_TOKEN_SESSION_STORAGE_KEY, accessToken);

      return accessToken;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || error.message);
      }
      throw error;
    }
  }

  async me(): Promise<IUser> {
    const { data: user } = await this.api.get<IUser>(mePath);
    return user;
  }
}

const authApi = create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL ?? ""}/${authPath}`,
  withCredentials: true,
});

authApi.interceptors.request.use(
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

authApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      sessionStorage.getItem(ACCESS_TOKEN_SESSION_STORAGE_KEY)
    ) {
      originalRequest._retry = true;

      try {
        let retryCount = 0;
        const maxRetries = 1;
        console.log("Interceptor");

        while (retryCount <= maxRetries) {
          try {
            const newTokens = await authApi.post(refreshPath);
            const { accessToken } = newTokens.data;

            sessionStorage.setItem(
              ACCESS_TOKEN_SESSION_STORAGE_KEY,
              accessToken,
            );

            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            }

            return authApi(originalRequest);
          } catch (refreshError) {
            retryCount++;
            if (retryCount > maxRetries) {
              sessionStorage.clear();
              throw new Error("SESSION_EXPIRED");
            }
          }
        }
      } catch (refreshError) {
        sessionStorage.clear();
        throw new Error("SESSION_EXPIRED");
      }
    }
    return Promise.reject(error);
  },
);

export const AuthService = new AuthServiceC(authApi);
