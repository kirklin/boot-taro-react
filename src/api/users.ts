// 用户相关接口
import { createFetch } from "~/utils/httpClient";

export interface User {
  id: string;
  nickname: string;
  username: string;
  phone?: string;
  wechat_open_id?: string;
  wechat_union_id: string;
  avatar_url?: string;
  created_at: string;
  updated_at: {
    Time: string;
    Valid: boolean;
  };
  deleted_at: {
    Time: string;
    Valid: boolean;
  };
}

export interface UpdateUserRequest {
  id: string;
  nickname?: string;
}

// 头像上传响应
export interface UploadAvatarResponse {
  avatar_url: string;
}

// 获取用户的资料
export const getUserDetailApi = createFetch<{ id: string }, User>("/v1/api/users/:id", "GET");
// 更新用户资料
export const updateUserApi = createFetch<UpdateUserRequest, User>("/v1/api/users/:id", "PUT");
// 获取当前用户
export const getCurrentUserApi = createFetch<null, User>("/v1/api/users/current", "GET");

export const pinMessageToProfileApi = createFetch<{ id: string }, null>(
  "/v1/api/users/pin/:id",
  "PATCH",
);

// 上传头像
export const uploadAvatarApi = createFetch<{ id: string }, UploadAvatarResponse>("/v1/api/users/:id/avatar", "POST");
