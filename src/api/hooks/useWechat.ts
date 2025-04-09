import type { WechatAuthRequest, WechatAuthResponse } from "../models/wechat";
import { useMutation } from "@tanstack/react-query";
import { wechatApi } from "../endpoints/wechat";

/**
 * 微信相关Hook
 */
export function useWechat() {
  /**
   * 微信登录或注册
   */
  const loginOrRegister = useMutation<WechatAuthResponse, Error, WechatAuthRequest>({
    mutationFn: params => wechatApi.loginOrRegister(params),
  });

  return {
    loginOrRegister,
  };
}
