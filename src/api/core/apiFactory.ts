import type { HttpMethod } from "~/utils/httpClient";
import type { ApiPath } from "~/utils/httpClient/constants";
import { createFetch } from "~/utils/httpClient";

/**
 * API端点定义类型
 */
export interface ApiEndpoint<P, R> {
  method: HttpMethod;
  path: ApiPath;
  params: P;
  response: R;
  options?: { noAuth?: boolean };
}

/**
 * 创建类型安全的API对象
 * @param endpoints API端点定义对象
 * @returns 类型安全的API对象
 */
export function createApi<T extends Record<string, ApiEndpoint<any, any>>>(endpoints: T) {
  const api = {} as {
    [K in keyof T]: (params: T[K]["params"]) => Promise<T[K]["response"]>
  };

  for (const [key, endpoint] of Object.entries(endpoints)) {
    // 使用闭包确保每个API函数都能访问到正确的endpoint
    api[key as keyof T] = ((endpoint) => {
      // 创建具体的API函数实例
      return (params) => {
        // 处理null参数的情况
        const safeParams = params || {} as any;

        // 使用createFetch创建请求
        const fetchFunc = createFetch<
          typeof endpoint.params,
          typeof endpoint.response
        >(
          endpoint.path,
          endpoint.method,
          endpoint.options,
        );

        // 调用fetchFunc并传递参数
        return fetchFunc(safeParams);
      };
    })(endpoint);
  }

  return api;
}
