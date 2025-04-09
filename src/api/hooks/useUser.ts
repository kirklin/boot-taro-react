import type { UpdateUserRequest, User } from "../models/user";
import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../core/queryKeys";
import { userApi } from "../endpoints/user";

// 缓存配置
const USER_CACHE_TIME = 1000 * 60 * 60; // 1小时
const USER_STALE_TIME = 1000 * 60 * 5; // 5分钟

/**
 * 获取用户资料
 * @param userId 用户ID
 */
export function useUserProfile(userId?: string) {
  return useQuery({
    queryKey: queryKeys.user.detail(userId || ""),
    queryFn: () => userApi.getUserDetail({ id: userId || "" }),
    enabled: !!userId,
    gcTime: USER_CACHE_TIME,
    staleTime: USER_STALE_TIME,
  });
}

/**
 * 获取多个用户资料
 * @param userIds 用户ID数组
 */
export function useUserProfiles(userIds: string[] = []) {
  // 确保userIds是有效的数组并且去重
  const uniqueUserIds = Array.isArray(userIds)
    ? [...new Set(userIds)].filter(Boolean)
    : [];

  // 使用useQueries批量处理查询
  const results = useQueries({
    queries: uniqueUserIds.map(id => ({
      queryKey: queryKeys.user.detail(id),
      queryFn: () => userApi.getUserDetail({ id }),
      enabled: !!id,
      gcTime: USER_CACHE_TIME,
      staleTime: USER_STALE_TIME,
      // 增加重试和防抖配置
      retry: 1,
      retryDelay: 1000,
    })),
    combine: (results) => {
      // 检查加载和错误状态
      const isLoading = results.some(result => result.isLoading);
      const isError = results.some(result => result.isError);
      const error = results.find(result => result.error)?.error;

      // 构建用户数据对象
      const usersData: Record<string, User> = {};

      if (Array.isArray(uniqueUserIds) && results.length > 0) {
        uniqueUserIds.forEach((id, index) => {
          if (index < results.length && results[index]?.data) {
            usersData[id] = results[index].data;
          }
        });
      }

      return {
        data: Object.keys(usersData).length > 0 ? usersData : undefined,
        isLoading,
        isError,
        error,
      };
    },
  });

  return results;
}

/**
 * 获取当前登录用户
 */
export function useCurrentUser() {
  return useQuery({
    queryKey: queryKeys.user.current(),
    queryFn: () => userApi.getCurrentUser(null),
    staleTime: USER_STALE_TIME,
  });
}

/**
 * 更新用户资料
 */
export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateUserRequest) => userApi.updateUser(data),
    onSuccess: (_data, variables) => {
      // 更新用户资料后，使相关查询失效
      queryClient.invalidateQueries({
        queryKey: queryKeys.user.detail(variables.id),
      });

      // 如果是当前用户，同时使当前用户查询失效
      const currentUser = queryClient.getQueryData(queryKeys.user.current());
      if (currentUser && (currentUser as any).id === variables.id) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.user.current(),
        });
      }
    },
  });
}

/**
 * 更新用户资料（接受分离的参数）
 */
export function useUpdateUserProfile() {
  const updateUserMutation = useUpdateUser();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { userId: string; data: Partial<User> }) => {
      // 转换为API接口需要的格式
      return updateUserMutation.mutateAsync({
        id: data.userId,
        nickname: data.data.nickname,
      });
    },
    onSuccess: (_data, variables) => {
      // 使用户相关查询无效
      queryClient.invalidateQueries({
        queryKey: [...queryKeys.user.all, variables.userId],
      });
    },
  });
}

/**
 * 置顶消息到个人资料
 */
export function usePinMessageToProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (messageId: string) => userApi.pinMessageToProfile({ id: messageId }),
    onSuccess: () => {
      // 使当前用户查询失效
      queryClient.invalidateQueries({
        queryKey: queryKeys.user.current(),
      });
    },
  });
}

/**
 * 上传头像
 */
export function useUploadAvatar() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: string) => userApi.uploadAvatar({ id: userId }),
    onSuccess: (_data, userId) => {
      // 使用户资料查询失效
      queryClient.invalidateQueries({
        queryKey: queryKeys.user.detail(userId),
      });

      // 如果是当前用户，同时使当前用户查询失效
      const currentUser = queryClient.getQueryData(queryKeys.user.current());
      if (currentUser && (currentUser as any).id === userId) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.user.current(),
        });
      }
    },
  });
}
