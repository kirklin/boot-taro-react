import type { RequestConfig } from "~/utils/httpClient/apiClient";
import { login } from "@tarojs/taro";
import { wechatLoginOrRegisterApi } from "~/api/wechat";
import { cache } from "~/cache";
import { isTokenExpired, saveAuthData } from "./index";
import { refreshAccessToken } from "./token";

// 用于存储刷新token的Promise
let refreshTokenPromise: Promise<boolean> | null = null;
let isRefreshing = false;

// 用于存储重新登录的Promise
let reLoginPromise: Promise<boolean> | null = null;
let isReLogging = false;

/**
 * 清除所有认证状态
 */
function clearAuthState() {
  cache.removeSync("access_token");
  cache.removeSync("refresh_token");
  cache.removeSync("expires_at");
  cache.removeSync("user");
  refreshTokenPromise = null;
  isRefreshing = false;
}

/**
 * 尝试重新登录
 * @returns 是否登录成功
 */
async function attemptReLogin(): Promise<boolean> {
  try {
    const loginRes = await login();
    if (!loginRes.code) {
      return false;
    }

    const authResponse = await wechatLoginOrRegisterApi({ code: loginRes.code });
    if (!authResponse.access_token) {
      return false;
    }

    saveAuthData(authResponse);
    return true;
  } catch (error) {
    console.error("Relogin failed:", error);
    return false;
  }
}

/**
 * 认证拦截器
 * 处理token的添加、刷新等逻辑
 */
export async function authInterceptor(config: RequestConfig): Promise<RequestConfig> {
  // 如果请求配置中指定不需要认证,直接返回
  if (config.noAuth) {
    return config;
  }

  let accessToken = cache.getSync("access_token") || null;
  const expiresAt = cache.getSync("expires_at") || null;

  // 如果没有token,尝试登录
  if (!accessToken) {
    if (!isReLogging) {
      isReLogging = true;
      reLoginPromise = attemptReLogin()
        .finally(() => {
          isReLogging = false;
          reLoginPromise = null;
        });
    }

    if (reLoginPromise) {
      const success = await reLoginPromise;
      if (success) {
        accessToken = cache.getSync("access_token") || null;
      } else {
        throw new Error("Login required");
      }
    }
    // 如果token过期,需要刷新
  } else if (isTokenExpired(expiresAt)) {
    if (!isRefreshing) {
      isRefreshing = true;
      refreshTokenPromise = refreshAccessToken()
        .finally(() => {
          isRefreshing = false;
          refreshTokenPromise = null;
        });
    }

    // 等待token刷新完成
    if (refreshTokenPromise) {
      const success = await refreshTokenPromise;
      if (success) {
        accessToken = cache.getSync("access_token") || null;
      } else {
        refreshTokenPromise = null; // 确保失败后清除Promise
        // 刷新失败,尝试重新登录
        if (!isReLogging) {
          isReLogging = true;
          reLoginPromise = attemptReLogin()
            .finally(() => {
              isReLogging = false;
              reLoginPromise = null;
            });
        }

        if (reLoginPromise) {
          const loginSuccess = await reLoginPromise;
          if (loginSuccess) {
            accessToken = cache.getSync("access_token") || null;
          } else {
            throw new Error("Login required");
          }
        }
      }
    }
  }

  // 添加认证头
  if (accessToken) {
    if (!config.header) {
      config.header = {};
    }
    config.header.Authorization = `Bearer ${accessToken}`;
  }

  return config;
}

/**
 * 响应拦截器
 * 处理认证相关的错误响应
 */
export function authResponseInterceptor(response: any) {
  // 处理 401 错误
  if (response.statusCode === 401) {
    clearAuthState();
    const error = new Error("Unauthorized");
    error.name = "AuthError";
    throw error;
  }
  return response;
}
