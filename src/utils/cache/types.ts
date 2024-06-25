/**
 * 表示任意对象类型
 */
export type AnyObject = Record<string, any>;

/**
 * 缓存配置类型
 * @template R - RAM缓存类型
 * @template L - 本地存储缓存类型
 */
export interface CacheConfig<R extends AnyObject, L extends AnyObject> {
  ram: R;
  local: L;
}

/**
 * 组合的缓存类型
 * @template R - RAM缓存类型
 * @template L - 本地存储缓存类型
 */
export type CombinedCache<R extends AnyObject, L extends AnyObject> = R & L;

/**
 * 缓存键类型
 * @template R - RAM缓存类型
 * @template L - 本地存储缓存类型
 */
export type CacheKey<R extends AnyObject, L extends AnyObject> = keyof CombinedCache<R, L>;

/**
 * 缓存值类型
 * @template R - RAM缓存类型
 * @template L - 本地存储缓存类型
 * @template K - 缓存键类型
 */
export type CacheValue<R extends AnyObject, L extends AnyObject, K extends CacheKey<R, L>> = CombinedCache<R, L>[K];

/**
 * 缓存方法接口
 * @template R - RAM缓存类型
 * @template L - 本地存储缓存类型
 */
export interface CacheMethods<R extends AnyObject, L extends AnyObject> {
  getSync: <K extends CacheKey<R, L>>(key: K) => CacheValue<R, L, K> | undefined;
  get: <K extends CacheKey<R, L>>(key: K) => Promise<CacheValue<R, L, K> | undefined>;
  setSync: <K extends CacheKey<R, L>>(key: K, value: CacheValue<R, L, K>) => void;
  set: <K extends CacheKey<R, L>>(key: K, value: CacheValue<R, L, K>) => Promise<void>;
  removeSync: <K extends CacheKey<R, L>>(key: K) => void;
  remove: <K extends CacheKey<R, L>>(key: K) => Promise<void>;
}
