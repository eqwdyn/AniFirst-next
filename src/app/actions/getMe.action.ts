"use server";

import { IUser } from "@entities/IUser.ent";
import { AuthService } from "@services/AuthService";

type ActionsReturnType = IUser | string;

export async function getMe(): Promise<ActionsReturnType> {
  try {
    const user = await AuthService.me();
    return user;
  } catch (e: any) {
    return e.message;
  }
}
