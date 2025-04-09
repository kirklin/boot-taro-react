import type { User } from "~/api/models/user";

/**
 * 获取用户显示名称
 * @param user 用户信息
 * @param defaultName 默认名称
 * @param preferNote 是否优先使用备注。为 true 时优先返回备注,无备注则返回昵称；为 false 时返回 昵称(备注) 格式
 * @returns 格式化后的显示名称
 */
export function getUserDisplayName(
  user?: Partial<Pick<User, "nickname" | "note">>,
  defaultName: string = "未知用户",
  preferNote: boolean = false,
): string {
  if (!user?.nickname && !user?.note) {
    return defaultName;
  }

  if (preferNote) {
    return user.note || user.nickname || defaultName;
  }

  if (!user.nickname) {
    return defaultName;
  }

  return user.note || user.nickname;
}
