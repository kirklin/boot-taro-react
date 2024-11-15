// 页面路径常量
// Page path constants
export const HOME_PAGE = "/pages/index/index";
export const PROFILE_PAGE = "/pages/profile/index";

/**
 * 原始页面路径
 * Original page paths
 */
export const PAGES = {
  HOME_PAGE,
  PROFILE_PAGE,
};

/**
 * 适配路径，移除开头的斜杠
 * Adapt path by removing the leading slash
 * @param path 原始路径 Original path
 * @returns 适配后的路径 Adapted path
 */
export function adaptPath(path: string): string {
  return path.replace(/^\//, "");
}

/**
 * 适配taro后的页面路径
 * Adapted page paths
 */
export const ADAPTED_PAGES = {
  HOME: adaptPath(PAGES.HOME_PAGE),
  PROFILE: adaptPath(PAGES.PROFILE_PAGE),
};
