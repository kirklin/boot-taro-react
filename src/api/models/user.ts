/**
 * 用户接口
 */
export interface User {
  id: string;
  nickname: string;
  username: string;
  email?: string;
  wechat_open_id?: string;
  wechat_union_id: string;
  note?: string; // 备注
  avatar_url?: string;
  pinned_message_id?: string;
  phone_number?: string; // 手机号（可选）
  is_phone_verified: boolean; // 手机号是否已验证
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

/**
 * 更新用户请求
 */
export interface UpdateUserRequest {
  id: string;
  nickname?: string;
}

/**
 * 头像上传响应
 */
export interface UploadAvatarResponse {
  avatar_url: string;
}
