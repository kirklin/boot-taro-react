import type { User } from "~/domain/entities/User";
import type { AuthRepository } from "~/domain/repository/AuthRepository";

export class WechatAuthUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(code: string): Promise<User> {
    return this.authRepository.getWechatAuthInfo(code);
  }
}
