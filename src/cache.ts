import { createCache } from "~/utils";

/**
 * 缓存实例，用于管理与 UI 无关的全局数据。
 * 与 UI 相关的全局数据存储在 store.ts 文件中。
 *
 * - RAM 缓存：用于存储需要快速访问的短期数据（如临时令牌）。
 * - 本地存储：用于存储需要持久化的长期数据（如系统信息）。
 */
const cache = createCache({
  ram: { session_key: "" },
  local: {
    sysInfo: "", // 系统信息
    openid: "", // 用户的 OpenID
  },
});

export { cache };
