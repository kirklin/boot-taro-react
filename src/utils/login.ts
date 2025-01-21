import type Taro from "@tarojs/taro";
import type { WechatAuthResponse } from "~/api/wechat";
import { useLogin } from "taro-hooks";
import { wechatAuthApi } from "~/api/wechat";
import { cache } from "~/cache";

/**
 * 获取微信认证信息
 * @param code 微信授权码
 * @returns Promise<WechatAuthResponse>
 * @throws Error 当无法获取openid和session_key时
 */
async function fetchWechatAuthInfo(code: string): Promise<WechatAuthResponse> {
  try {
    const data = await wechatAuthApi({ code });
    if (data?.openid && data?.session_key) {
      return { openid: data.openid, session_key: data.session_key };
    } else {
      throw new Error("Failed to retrieve openid and session key");
    }
  } catch (error) {
    console.error("Failed to fetch WeChat auth info:", error);
    throw error;
  }
}

export function useWechatAuth() {
  const { login } = useLogin();

  const getWechatAuthInfo = () => {
    login(true).then((res: Taro.login.SuccessCallbackResult) => {
      // 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid、unionid、session_key 等信息
      if (res.errMsg === "login:ok") {
        fetchWechatAuthInfo(res.code)
          .then(({ openid, session_key }) => {
            // 这里可以进行进一步的操作，比如存储到全局状态或本地存储
            // 异步存储到 cache
            Promise.all([
              cache.set("openid", openid),
              cache.set("session_key", session_key),
            ]).catch((error) => {
              console.error("Error saving to cache:", error);
            });

            // 这里可以进行其他操作，但不会阻塞主线程
          })
          .catch((error) => {
            console.error("Error during fetching WeChat auth info:", error);
          });
      } else {
        console.error(`WeChat login failed: ${res.errMsg}`);
      }
    }).catch((error) => {
      console.error("Login promise rejected:", error);
    });
  };

  return { getWechatAuthInfo };
}
