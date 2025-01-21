import type { User } from "~/api/users";
import { createFetch } from "~/utils/httpClient";

// 定义响应类型
export interface WechatAuthResponse {
  access_token: string;
  refresh_token: string;
  expires_at: string;
  user: User;
}

// 定义请求参数类型
interface WechatAuthRequest {
  code: string;
}

// 创建 API 请求函数 - LoginOrRegister 功能
export const wechatLoginOrRegisterApi
  = createFetch<WechatAuthRequest, WechatAuthResponse>("/v1/api/wechat/login-or-register", "POST", { noAuth: true },
  );
