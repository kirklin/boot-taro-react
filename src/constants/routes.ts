// 页面路由名称枚举
export enum RouteNames {
  HOME = "HOME",
  PROFILE = "PROFILE",
  PRIVACY_POLICY = "PRIVACY_POLICY",
  USER_AGREEMENT = "USER_AGREEMENT",
}

// 页面路径常量
export const PAGES = {
  [RouteNames.HOME]: "/pages/index/index",
  [RouteNames.PROFILE]: "/pages/profile/index",
  [RouteNames.PRIVACY_POLICY]: "/pages/agreements/privacy-policy",
  [RouteNames.USER_AGREEMENT]: "/pages/agreements/user-agreement",
} as const;

/**
 * 适配路径，移除开头的斜杠
 * @param path 原始路径
 * @returns 适配后的路径
 */
export function adaptPath(path: string): string {
  return path.replace(/^\//, "");
}

// 适配taro后的页面路径
export const ADAPTED_PAGES = Object.entries(PAGES).reduce(
  (acc, [key, path]) => ({
    ...acc,
    [key]: adaptPath(path),
  }),
  {} as { [K in RouteNames]: string },
);
