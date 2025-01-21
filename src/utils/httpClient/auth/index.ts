import type { WechatAuthResponse } from "~/api/wechat";
import dayjs from "dayjs";
import { cache } from "~/cache";

// Token相关工具函数
function isTokenExpired(expiresAt: string | null): boolean {
  if (!expiresAt) {
    return true;
  }
  return dayjs(new Date()).isAfter(dayjs(expiresAt));
}

// 缓存相关的工具函数
function saveAuthData(authData: WechatAuthResponse) {
  cache.setSync("access_token", authData.access_token);
  cache.setSync("refresh_token", authData.refresh_token);
  cache.setSync("expires_at", authData.expires_at);
  cache.setSync("user", authData.user);
}

// 导出工具函数
export { isTokenExpired, saveAuthData };
