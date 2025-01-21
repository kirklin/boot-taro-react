import { QueryClient } from "@tanstack/react-query";

// 创建 QueryClient 实例
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 数据被认为是陈旧的时间, 30秒
      staleTime: 1000 * 30,
      // 数据在内存中的缓存时间
      gcTime: 1000 * 60 * 60, // 1小时
      // 重试次数
      retry: 2,
      // 重试延迟时间（毫秒）
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      // 网络错误时自动重试
      retryOnMount: true,
      // 窗口重新获得焦点时重新获取数据(可以根据具体页面需求在组件中覆盖)
      refetchOnWindowFocus: "always",
      // 组件重新挂载时重新获取数据
      refetchOnMount: true,
    },
    mutations: {
      // 默认重试次数
      retry: 1,
      // 重试延迟
      retryDelay: 1000,
    },
  },
});
