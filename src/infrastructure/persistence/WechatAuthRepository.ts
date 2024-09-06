import type { AuthRepository } from "~/domain/repository/AuthRepository";
import { User } from "~/domain/entities/User";
import { wechatAuthApi } from "~/api/wechat";

export class WechatAuthRepository implements AuthRepository {
  async getWechatAuthInfo(code: string): Promise<User> {
    const { openid, session_key } = await wechatAuthApi({ code });
    return new User(openid, openid, session_key);
  }
}
