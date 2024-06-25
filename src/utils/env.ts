import { getSystemInfo } from "@tarojs/taro";
import { cache } from "~/cache";

/**
 * 异步设置系统信息
 * @param force - 是否强制获取系统信息
 */
export async function setSystemInfoAsync(force = false) {
  if (force) {
    // 强制获取系统信息
    getSystemInfo({
      success(systemInfo) {
        // eslint-disable-next-line ts/ban-ts-comment
        // @ts-expect-error
        cache.set("sysInfo", systemInfo);
      },
    });
  } else {
    // 尝试从缓存中获取系统信息
    const cachedSystemInfo = await cache.get("sysInfo");
    if (!cachedSystemInfo) {
      // 如果缓存中没有系统信息，则获取系统信息并缓存
      getSystemInfo({
        success(systemInfo) {
          // eslint-disable-next-line ts/ban-ts-comment
          // @ts-expect-error
          cache.set("sysInfo", systemInfo);
        },
      });
    }
  }
}
