import type Taro from "@tarojs/taro";
import type { SystemInfo } from "~/utils";
import { createCache } from "~/utils";

/**
 * 定义缓存数据结构的类型：
 * - RamCache: 存储在 RAM 中的缓存项的类型
 * - LocalCache: 存储到本地持久缓存中的类型
 */
interface RamCache {
  session_key: string; // 存储会话的临时密钥
}

interface LocalCache {
  launchOptions: Taro.getLaunchOptionsSync.LaunchOptions; // 小程序启动选项信息
  sysInfo: SystemInfo; // 系统信息
  openid: string; // 用户的 OpenID
}

/**
 * createCache 函数创建一个缓存实例，并提供获取/设置缓存中数据的方法。
 * 缓存实例包括两种类型的缓存：RAM 缓存（短期存储）和本地存储（长期存储）。
 *
 * 我们通过 createCache 创建的 cache 实例包含以下属性：
 * - ram: 临时存储（RAM 缓存），如会话密钥。
 * - local: 持久存储（本地缓存），如小程序系统信息、用户的 OpenID。
 */
const cache = createCache<RamCache, LocalCache>({
  ram: {
    session_key: "",
  },
  local: {
    launchOptions: {} as Taro.getLaunchOptionsSync.LaunchOptions, // 启动选项
    sysInfo: {} as SystemInfo, // 系统信息
    openid: "",
  },
});

export { cache };
