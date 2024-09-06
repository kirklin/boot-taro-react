import { useLogin } from "taro-hooks";
import type Taro from "@tarojs/taro";
import { cache } from "~/cache";
import { WechatAuthUseCase } from "~/usecase/WechatAuthUseCase";
import { WechatAuthRepository } from "~/infrastructure/persistence/WechatAuthRepository";
import { AuthController } from "~/adapters/controllers/AuthController";

export function useWechatAuth() {
  const { login } = useLogin();
  const authRepository = new WechatAuthRepository();
  const authUseCase = new WechatAuthUseCase(authRepository);
  const authController = new AuthController(authUseCase);

  const getWechatAuthInfo = () => {
    login(true).then(async (res: Taro.login.SuccessCallbackResult) => {
      // 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid、unionid、session_key 等信息
      if (res.errMsg === "login:ok") {
        const result = await authController.handleWechatAuth(res.code);
        if (result.success) {
          const { user } = result;
          await Promise.all([
            cache.set("openid", user!.openid),
            cache.set("session_key", user!.session_key),
          ]);
        } else {
          console.error("WeChat auth failed:", result.error);
        }
      } else {
        console.error(`WeChat login failed: ${res.errMsg}`);
      }
    }).catch((error) => {
      console.error("Login promise rejected:", error);
    });
  };

  return { getWechatAuthInfo };
}
