import type { UpdateUserRequest, UploadAvatarResponse, User } from "../models/user";
import { createApi } from "../core/apiFactory";

/**
 * 用户相关API端点
 */
export const userApi = createApi({
  /**
   * 获取用户详情
   */
  getUserDetail: {
    method: "GET",
    path: "/v1/api/users/:id",
    params: {} as { id: string },
    response: {} as User,
  },

  /**
   * 更新用户资料
   */
  updateUser: {
    method: "PUT",
    path: "/v1/api/users/:id",
    params: {} as UpdateUserRequest,
    response: {} as User,
  },

  /**
   * 获取当前用户
   */
  getCurrentUser: {
    method: "GET",
    path: "/v1/api/users/current",
    params: null,
    response: {} as User,
  },

  /**
   * 置顶消息到个人资料
   */
  pinMessageToProfile: {
    method: "PATCH",
    path: "/v1/api/users/pin/:id",
    params: {} as { id: string },
    response: null,
  },

  /**
   * 上传头像
   */
  uploadAvatar: {
    method: "POST",
    path: "/v1/api/users/:id/avatar",
    params: {} as { id: string },
    response: {} as UploadAvatarResponse,
  },
});
