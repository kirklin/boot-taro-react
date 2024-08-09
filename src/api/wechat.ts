import { createFetch } from "~/utils/httpClient";

// 定义响应类型
export interface WechatAuthResponse {
  openid: string;
  session_key: string;
}

// 定义请求参数类型
interface WechatAuthRequest {
  code: string;
}

// 创建API请求函数
export const wechatAuthApi = createFetch<WechatAuthRequest, WechatAuthResponse>("/v1/wechat/auth", "POST");
