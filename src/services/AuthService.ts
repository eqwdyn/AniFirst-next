import { AxiosInstance, AxiosError } from "axios";
import { IUser } from "@entities/IUser.ent";
import { ACCESS_TOKEN_SESSION_STORAGE_KEY } from "@shared/config";
import { authedApi } from "../shared/api/AuthedApi";

const loginPath = "account/login" as const;
const registerPath = "account/register" as const;
const mePath = "account/me" as const;

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

export const AuthService = new AuthServiceC(authedApi);
