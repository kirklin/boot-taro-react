import type { User } from "~/api/models/user";
import { userApi } from "~/api/endpoints/user";
import { cache } from "~/cache";

/**
 * 获取当前登录的用户信息
 * @returns 当前用户信息或 null
 */
export async function getCurrentUser(): Promise<User | null> {
  let user = await cache.get("user");
  if (!user) {
    // 如果用户信息不存在，则从服务器获取
    const currentUser = await userApi.getCurrentUser(null);
    if (currentUser) {
      await cache.set("user", currentUser);
      user = currentUser; // 更新 user 变量为新获取的用户信息
    }
  }
  return user || null;
}

/**
 * 获取当前登录的用户 ID
 * @returns 当前用户 ID 或 null
 */
export async function getCurrentUserID(): Promise<string | null> {
  const user = await cache.get("user");
  if (!user) {
    // 如果用户信息不存在，则从服务器获取
    const currentUser = await userApi.getCurrentUser(null);
    if (currentUser) {
      await cache.set("user", currentUser);
      return currentUser.id;
    } else {
      return null;
    }
  }
  return user?.id || null;
}

/**
 * 根据用户 ID 获取用户信息
 * @param userId 用户 ID
 * @returns 对应用户信息或 null
 */
export async function getUserById(userId: string): Promise<User | null> {
  try {
    const user = await userApi.getUserDetail({ id: userId });
    return user || null;
  } catch (error) {
    console.error(`Failed to fetch user profile for userId ${userId}`, error);
    return null;
  }
}
