import type { RequestConfig, ResponseResult } from "./apiClient";
import type { ApiPath, ApiVersion, Environment } from "./constants";
import { getCurrentEnvironment } from "~/utils";
import { authInterceptor, authResponseInterceptor } from "~/utils/httpClient/auth/interceptor";
import { apiRequest } from "./apiClient";
import domainConfig from "./constants";

// HTTP方法类型
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTIONS" | "PATCH";

function formatUrl(option: RequestConfig) {
  let url = option.url;
  // 如果已经是完整URL，先提取相对路径部分
  if (url.startsWith("http://") || url.startsWith("https://")) {
    try {
      const urlObj = new URL(url);
      url = urlObj.pathname + urlObj.search;
    } catch (error) {
      console.error("Invalid URL:", url, error);
      throw new Error("Invalid URL format");
    }
  }

  // 验证URL格式
  if (!url.startsWith("/")) {
    console.error("Invalid URL format: URL must start with /", url);
    throw new Error("Invalid URL format: URL must start with /");
  }

  // 提取并验证prefix
  const urlParts = url.split("/");
  if (urlParts.length < 2) {
    console.error("Invalid URL format: Missing API version prefix", url);
    throw new Error("Invalid URL format: Missing API version prefix");
  }

  const prefix = urlParts[1] as ApiVersion;
  // 动态获取当前小程序环境（development/preview/production）
  const currentEnv: Environment = getCurrentEnvironment();

  // console.debug("URL processing:", {
  //   originalUrl: option.url,
  //   processedUrl: url,
  //   prefix,
  //   currentEnv,
  //   availablePrefixes: Object.keys(domainConfig[currentEnv]),
  // });

  // 从配置中取对应环境的 API 地址前缀
  const domain = domainConfig[currentEnv][prefix];

  if (!domain) {
    console.error("Domain configuration error:", {
      prefix,
      currentEnv,
      availablePrefixes: Object.keys(domainConfig[currentEnv]),
      url: option.url,
    });
    throw new Error(`Invalid API version or environment: ${currentEnv}, version: ${prefix}`);
  }

  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  option.url = `${domain}${url}${url.includes("?") ? "&" : "?"}t=${Date.now()}`;
}

/**
 * 解析路径参数
 * 将 /api/users/:id 格式的URL中的 :id 替换为实际值
 */
function resolvePathParams(url: ApiPath, data: Record<string, any> | null): ApiPath {
  if (!data) {
    return url;
  }
  return url.replace(/:([^/]+)/g, (_, param) => {
    const value = data[param];
    delete data[param];
    return value;
  }) as ApiPath;
}

/**
 * 发起HTTP请求
 * @param config 请求配置
 * @param fullResponse 是否返回完整响应
 */
async function request<T>(
  config: RequestConfig,
  fullResponse: boolean = false,
): Promise<T | ResponseResult<T>> {
  try {
    // 格式化URL
    formatUrl(config);

    // 应用认证拦截器
    config = await authInterceptor(config);

    // 发起请求
    const response = await apiRequest<T>(config);

    // 应用响应拦截器
    const processedResponse = authResponseInterceptor(response);

    return fullResponse ? processedResponse : processedResponse.data;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
}

/**
 * 创建API请求函数
 */
export function createFetch<REQ extends Record<string, any> | null, RES extends Record<string, any> | null>(
  url: ApiPath,
  method: HttpMethod,
  options?: { noAuth?: boolean },
) {
  function fetch(data: REQ): Promise<RES>;
  function fetch(data: REQ, fullResponse: true): Promise<ResponseResult<RES>>;
  function fetch(data: REQ, fullResponse: false): Promise<RES>;
  function fetch(data: REQ, fullResponse?: boolean): Promise<RES | ResponseResult<RES>> {
    // 动态解析路径参数
    const resolvedUrl = resolvePathParams(url, data);

    return request<RES>(
      {
        url: resolvedUrl,
        method,
        data,
        ...options,
      },
      fullResponse ?? false,
    );
  }

  return fetch;
}
