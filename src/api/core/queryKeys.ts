/**
 * React Query 查询键管理
 * 按照模块统一管理查询键，便于缓存控制和数据失效
 */
export const queryKeys = {
  user: {
    all: ["users"] as const,
    detail: (id: string) => [...queryKeys.user.all, id] as const,
    current: () => [...queryKeys.user.all, "current"] as const,
    list: (params?: Record<string, any>) => [...queryKeys.user.all, "list", params] as const,
  },
};

// 导出各模块查询键
export const USER_KEYS = queryKeys.user;
