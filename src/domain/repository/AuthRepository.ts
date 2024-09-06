import type { User } from "../entities/User";

export interface AuthRepository {
  getWechatAuthInfo: (code: string) => Promise<User>;
}
