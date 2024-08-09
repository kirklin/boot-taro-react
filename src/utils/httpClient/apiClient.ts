import Taro from "@tarojs/taro";
import type { ApiPath } from "./constants";

// 定义API响应类型
export interface ApiResponse<T = any> {
  status: "success" | "error";
  data: T;
  code: number;
  message: string;
}

// 定义请求配置类型
export type RequestConfig<T = any> = Omit<Taro.request.Option<T>, "success" | "fail" | "complete"> & {
  url: ApiPath;
};

// 定义响应结果类型
export interface ResponseResult<T = any> {
  data: T;
  statusCode: number;
  header: Record<string, any>;
  code: number;
  message?: string;
}

/**
 * 封装的API请求函数
 * @param config 请求配置
 * @returns Promise<ResponseResult>
 */
export function apiRequest<T = any>(config: RequestConfig<T>): Promise<ResponseResult<T>> {
  const defaultConfig: Partial<Taro.request.Option> = {
    method: "GET",
    dataType: "json",
    responseType: "text",
    timeout: 30000,
  };

  const mergedConfig: Taro.request.Option = { ...defaultConfig, ...config };

  return new Promise((resolve) => {
    Taro.request<ApiResponse<T>>({
      ...mergedConfig,
      success: (res) => {
        const { data, statusCode, header } = res;
        if (data.status === "success" && (data.data || data.code)) {
          resolve({
            data: data.data,
            statusCode,
            header,
            code: data.code,
            message: data.message,
          });
        } else {
          resolve({
            data: data.data,
            statusCode,
            header,
            code: data.code,
            message: data.message || "请求失败",
          });
        }
      },
      fail: (err) => {
        resolve({
          data: {} as T,
          statusCode: 500,
          header: {},
          code: 500,
          message: err.errMsg || "网络请求失败",
        });
      },
    });
  });
}
