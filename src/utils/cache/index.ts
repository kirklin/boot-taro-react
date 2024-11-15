import type { AnyObject, CacheConfig, CacheKey, CacheMethods, CacheValue, CombinedCache } from "./types";
import { getStorage, getStorageSync, removeStorage, removeStorageSync, setStorage, setStorageSync } from "@tarojs/taro";

/**
 * 缓存管理类
 * @author Kirk Lin
 *
 * @template R - RAM缓存类型
 * @template L - 本地存储缓存类型
 */
class CacheManager<R extends AnyObject, L extends AnyObject> implements CacheMethods<R, L> {
  private ramKeys: (keyof R)[];
  private localKeys: (keyof L)[];
  private store: Partial<CombinedCache<R, L>> = {};
  private defaults: CombinedCache<R, L>;

  /**
   * 创建一个新的缓存管理器实例
   * @param config - 缓存配置
   */
  constructor(config: CacheConfig<R, L>) {
    this.ramKeys = Object.keys(config.ram) as (keyof R)[];
    this.localKeys = Object.keys(config.local) as (keyof L)[];
    this.defaults = { ...config.ram, ...config.local };
  }

  /**
   * 检查键是否有效
   * @param key - 要检查的键
   * @returns 键是否有效
   */
  private isValidKey(key: CacheKey<R, L>): key is CacheKey<R, L> {
    return this.ramKeys.includes(key as keyof R) || this.localKeys.includes(key as keyof L);
  }

  /**
   * 获取键的默认值
   * @param key - 缓存键
   * @returns 默认值
   */
  private getDefaultValue<K extends CacheKey<R, L>>(key: K): CacheValue<R, L, K> {
    return this.defaults[key];
  }

  /**
   * 同步获取缓存值
   * @param key - 缓存键
   * @returns 缓存值或undefined
   */
  getSync<K extends CacheKey<R, L>>(key: K): CacheValue<R, L, K> | undefined {
    if (!this.isValidKey(key)) {
      console.error(`Invalid cache key: ${String(key)}`);
      return undefined;
    }

    if (this.ramKeys.includes(key as keyof R)) {
      return this.store[key] ?? this.getDefaultValue(key);
    }

    let value = this.store[key];
    if (value === undefined) {
      value = getStorageSync(key as string);
      this.store[key] = value;
    }
    return value ?? this.getDefaultValue(key);
  }

  /**
   * 异步获取缓存值
   * @param key - 缓存键
   * @returns Promise，解析为缓存值或undefined
   */
  async get<K extends CacheKey<R, L>>(key: K): Promise<CacheValue<R, L, K> | undefined> {
    if (!this.isValidKey(key)) {
      console.error(`Invalid cache key: ${String(key)}`);
      return undefined;
    }

    if (this.ramKeys.includes(key as keyof R)) {
      return this.store[key] ?? this.getDefaultValue(key);
    }

    const value = this.store[key];
    if (value === undefined) {
      try {
        const res = await getStorage({ key: key as string });
        this.store[key] = res.data;
        return res.data ?? this.getDefaultValue(key);
      } catch {
        return this.getDefaultValue(key);
      }
    }
    return value;
  }

  /**
   * 同步设置缓存值
   * @param key - 缓存键
   * @param value - 要设置的值
   */
  setSync<K extends CacheKey<R, L>>(key: K, value: CacheValue<R, L, K>): void {
    if (!this.isValidKey(key)) {
      console.error(`Invalid cache key: ${String(key)}`);
      return;
    }

    this.store[key] = value;
    if (this.localKeys.includes(key as keyof L)) {
      setStorageSync(key as string, value);
    }
  }

  /**
   * 异步设置缓存值
   * @param key - 缓存键
   * @param value - 要设置的值
   * @returns Promise，在设置完成时解析
   */
  async set<K extends CacheKey<R, L>>(key: K, value: CacheValue<R, L, K>): Promise<void> {
    if (!this.isValidKey(key)) {
      console.error(`Invalid cache key: ${String(key)}`);
      return;
    }

    this.store[key] = value;
    if (this.localKeys.includes(key as keyof L)) {
      await setStorage({ key: key as string, data: value });
    }
  }

  /**
   * 同步移除缓存值
   * @param key - 要移除的缓存键
   */
  removeSync<K extends CacheKey<R, L>>(key: K): void {
    if (!this.isValidKey(key)) {
      console.error(`Invalid cache key: ${String(key)}`);
      return;
    }

    delete this.store[key];
    if (this.localKeys.includes(key as keyof L)) {
      removeStorageSync(key as string);
    }
  }

  /**
   * 异步移除缓存值
   * @param key - 要移除的缓存键
   * @returns Promise，在移除完成时解析
   */
  async remove<K extends CacheKey<R, L>>(key: K): Promise<void> {
    if (!this.isValidKey(key)) {
      console.error(`Invalid cache key: ${String(key)}`);
      return;
    }

    delete this.store[key];
    if (this.localKeys.includes(key as keyof L)) {
      await removeStorage({ key: key as string });
    }
  }
}

/**
 * 创建一个新的缓存管理器
 * @param config - 缓存配置
 * @returns 缓存方法对象
 */
export default function createCache<R extends AnyObject, L extends AnyObject>(
  config: CacheConfig<R, L>,
): CacheMethods<R, L> {
  const cacheManager = new CacheManager(config);
  return {
    getSync: cacheManager.getSync.bind(cacheManager),
    get: cacheManager.get.bind(cacheManager),
    setSync: cacheManager.setSync.bind(cacheManager),
    set: cacheManager.set.bind(cacheManager),
    removeSync: cacheManager.removeSync.bind(cacheManager),
    remove: cacheManager.remove.bind(cacheManager),
  };
}
