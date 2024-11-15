import type { RequestConfig, ResponseResult } from "./apiClient";
import type { ApiPath, ApiVersion, Environment } from "./constants";
import { hideLoading } from "@tarojs/taro";
import { cache } from "~/cache";
import { apiRequest } from "./apiClient";
import DOMAIN from "./constants";

function formatUrl(option: RequestConfig) {
  const [, prefix] = option.url.split("/") as [string, ApiVersion];
  const domain = DOMAIN[process.env.API_ENV as Environment][prefix];
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  option.url = `${domain}${option.url}${option.url.includes("?") ? "&" : "?"}t=${Date.now()}`;
}

function setHeader(option: RequestConfig) {
  option.header = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "X-M-VERSION": process.env.DEPLOY_VERSION,
    "X-M-TYPE": process.env.TARO_ENV,
    "x-m-app": "custom",
    "x-m-token": cache.getSync("session_key") || "",
    ...option.header,
  };
}

function sendMonitor(query: RequestConfig, res: ResponseResult) {
  console.log("Monitoring:", query, res);
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTIONS";

function request<T = any>(
  query: { method: HttpMethod; data: any; url: ApiPath },
  fullResponse: boolean,
): Promise<T | ResponseResult<T>> {
  formatUrl(query);
  setHeader(query);

  return apiRequest<T>(query).then((res) => {
    if (res.code !== 200) {
      sendMonitor(query, res);
    }

    if (res.code === 200) {
      return fullResponse ? res : res.data;
    } else {
      if (fullResponse) {
        return res;
      } else {
        try {
          hideLoading();
        } catch {}
        throw res;
      }
    }
  });
}

export function createFetch<REQ extends Record<string, any>, RES extends Record<string, any>>(
  url: ApiPath,
  method: HttpMethod,
) {
  function fetch(data: REQ): Promise<RES>;
  function fetch(data: REQ, fullResponse: true): Promise<ResponseResult<RES>>;
  function fetch(data: REQ, fullResponse: false): Promise<RES>;
  function fetch(data: REQ, fullResponse?: boolean): Promise<RES | ResponseResult<RES>> {
    return request<RES>(
      {
        url,
        method,
        data,
      },
      fullResponse ?? false,
    );
  }

  return fetch;
}
