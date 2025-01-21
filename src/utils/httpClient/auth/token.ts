import { cache } from "~/cache";
import { createFetch } from "~/utils/httpClient";

export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_at: string;
}

// 定义刷新token的API
export const refreshTokenApi = createFetch<{ refresh_token: string }, RefreshTokenResponse>("/v1/api/refresh", "POST", {
  noAuth: true,
});

/**
 * 刷新访问令牌
 * @returns 是否刷新成功
 */
export async function refreshAccessToken(): Promise<boolean> {
  try {
    const refreshToken = cache.getSync("refresh_token");
    if (!refreshToken) {
      console.warn("No refresh token found");
      return false;
    }

    const response = await refreshTokenApi({ refresh_token: refreshToken });
    if (!response.access_token || !response.expires_at) {
      console.error("Invalid token response:", response);
      return false;
    }

    // 更新token信息
    cache.setSync("access_token", response.access_token);
    cache.setSync("expires_at", response.expires_at);
    if (response.refresh_token) {
      cache.setSync("refresh_token", response.refresh_token);
    }

    return true;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    return false;
  }
}
