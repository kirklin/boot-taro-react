import type Taro from "@tarojs/taro";
import type { User } from "~/api/users";
import type { SystemInfo } from "~/utils";
import { createCache } from "~/utils";

/**
 * 定义缓存数据结构的类型：
 * - RamCache: 存储在 RAM 中的缓存项的类型
 * - LocalCache: 存储到本地持久缓存中的类型
 */
interface RamCache {
  launchOptions: Taro.getLaunchOptionsSync.LaunchOptions; // 小程序启动选项信息
}

interface LocalCache {
  sysInfo: SystemInfo; // 系统信息
  openid: string; // 用户的 OpenID
  access_token?: string;
  refresh_token?: string;
  expires_at?: string; // Token 过期时间
  user?: User;
  privacyAgreed: boolean; // 是否同意隐私政策
}

/**
 * createCache 函数创建一个缓存实例，并提供获取/设置缓存中数据的方法。
 * 缓存实例包含两种类型：RAM 缓存（短期存储）、本地缓存（长期存储）。
 */
const cache = createCache<RamCache, LocalCache>({
  ram: {
    launchOptions: {} as Taro.getLaunchOptionsSync.LaunchOptions, // 启动选项
  },
  local: {
    sysInfo: {} as SystemInfo, // 系统信息
    openid: "",
    access_token: "",
    refresh_token: "",
    expires_at: "", // 默认 Token 过期时间为空
    user: undefined, // 默认没有用户信息
    privacyAgreed: false, // 默认未同意隐私政策
  },
});

export { cache };
