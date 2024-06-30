// 定义 SuccessCallbackResult 接口
import type Taro from "@tarojs/taro";
import { useLogin } from "taro-hooks";

// 定义 fetchOpenIdAndSessionKey 函数
export async function fetchOpenIdAndSessionKey(code: string): Promise<{ openid: string; sessionKey: string }> {
  try {
    const response = await fetch(`https://your-backend.com/api/code2Session?code=${code}`);
    const data = await response.json();
    if (data.openid && data.session_key) {
      return { openid: data.openid, sessionKey: data.session_key };
    } else {
      throw new Error("Failed to retrieve openid and session key");
    }
  } catch (error) {
    console.error("Failed to fetch openid and session key:", error);
    throw error;
  }
}

// 定义 useLaunch 钩子封装
export function useHandleLogin() {
  const { login } = useLogin();

  login().then(async (res: Taro.login.SuccessCallbackResult) => {
    // 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 code2Session，使用 code 换取 openid、unionid、session_key 等信息
    if (res.errMsg === "login:ok") {
      try {
        const { openid, sessionKey } = await fetchOpenIdAndSessionKey(res.code);
        console.log(`OpenID: ${openid}, SessionKey: ${sessionKey}`);
        // 这里可以进行进一步的操作
      } catch (error) {
        console.error("Error during fetching openid and session key:", error);
      }
    } else {
      console.error(`Login failed: ${res.errMsg}`);
    }
  }).catch((error) => {
    console.error("Login promise rejected:", error);
  });
}
