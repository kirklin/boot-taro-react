import type { User } from "./user";

/**
 * 微信相关模型定义
 */

/**
 * 微信认证响应
 */
export interface WechatAuthResponse {
  access_token: string;
  refresh_token: string;
  expires_at: string;
  user: User;
}

/**
 * 微信认证请求
 */
export interface WechatAuthRequest {
  code: string;
}
