import type { RouteNames } from "~/constants/routes";
import type { RouteParamsFor } from "~/constants/routeTypes";
import Taro from "@tarojs/taro";
import { PAGES } from "~/constants/routes";

// 微信小程序页面栈最大深度限制
const MAX_PAGE_STACK = 10;
// 当页面栈深度达到该值时使用redirectTo
const REDIRECT_THRESHOLD = 8;

/**
 * 获取当前页面栈深度
 * @returns 当前页面栈深度
 */
function getCurrentPages(): number {
  return Taro.getCurrentPages().length;
}

/**
 * 构建带参数的路由URL
 * @param route 路由名称
 * @param params 路由参数
 * @returns 完整的路由URL
 */
export function buildRoute<T extends RouteNames>(
  route: T,
  params?: RouteParamsFor<T>,
): string {
  const baseUrl = PAGES[route];

  if (!params || Object.keys(params).length === 0) {
    return baseUrl;
  }

  const queryParts: string[] = [];

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      // 对布尔值特殊处理
      if (typeof value === "boolean") {
        queryParts.push(`${key}=${value ? "true" : "false"}`);
      } else {
        queryParts.push(`${key}=${encodeURIComponent(String(value))}`);
      }
    }
  });

  return queryParts.length > 0 ? `${baseUrl}?${queryParts.join("&")}` : baseUrl;
}

/**
 * 解析URL中的参数
 * @param url URL字符串
 * @returns 解析后的参数对象
 */
export function parseRouteParams(url: string): Record<string, string> {
  const [, queryString] = url.split("?");
  if (!queryString) {
    return {};
  }

  return queryString.split("&").reduce((params: Record<string, string>, pair) => {
    const [key, value] = pair.split("=");
    if (key && value) {
      params[key] = decodeURIComponent(value);
    }
    return params;
  }, {});
}

/**
 * 类型安全的智能导航函数 - 根据页面栈深度自动选择导航方式
 * @param route 路由名称
 * @param params 路由参数
 */
export function navigateTo<T extends RouteNames>(
  route: T,
  params?: RouteParamsFor<T>,
): Promise<TaroGeneral.CallbackResult> {
  const currentStackDepth = getCurrentPages();

  // 如果页面栈深度接近限制,使用redirectTo
  if (currentStackDepth >= REDIRECT_THRESHOLD) {
    console.debug(`Page stack depth (${currentStackDepth}) approaching limit ${MAX_PAGE_STACK}, using redirectTo instead of navigateTo`);
    return redirectTo(route, params);
  }

  const url = buildRoute(route, params);
  return Taro.navigateTo({ url });
}

/**
 * 类型安全的重定向函数
 * @param route 路由名称
 * @param params 路由参数
 */
export function redirectTo<T extends RouteNames>(
  route: T,
  params?: RouteParamsFor<T>,
): Promise<TaroGeneral.CallbackResult> {
  const url = buildRoute(route, params);
  return Taro.redirectTo({ url });
}

/**
 * 类型安全的返回上一页
 * @param delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页
 */
export function navigateBack(delta = 1): Promise<TaroGeneral.CallbackResult> {
  return Taro.navigateBack({ delta });
}

/**
 * 类型安全的切换Tab页面
 * @param route Tab页面路由名称
 */
export function switchTab<T extends RouteNames>(
  route: T,
): Promise<TaroGeneral.CallbackResult> {
  const url = PAGES[route];
  return Taro.switchTab({ url });
}

/**
 * 类型安全的重启动函数
 * @param route 路由名称
 * @param params 路由参数
 */
export function reLaunch<T extends RouteNames>(
  route: T,
  params?: RouteParamsFor<T>,
): Promise<TaroGeneral.CallbackResult> {
  const url = buildRoute(route, params);
  return Taro.reLaunch({ url });
}
