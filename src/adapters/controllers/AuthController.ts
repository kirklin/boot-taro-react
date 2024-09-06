import type { WechatAuthUseCase } from "~/usecase/WechatAuthUseCase";

export class AuthController {
  constructor(private wechatAuthUseCase: WechatAuthUseCase) {}

  async handleWechatAuth(code: string) {
    try {
      const user = await this.wechatAuthUseCase.execute(code);
      return { success: true, user };
    } catch (error) {
      console.error("Error during WeChat auth:", error);
      return { success: false, error: "Authentication failed" };
    }
  }
}
