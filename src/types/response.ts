export type ResStatus = "success" | "error";

export interface ErrorDetails {
  code?: string;
  message: string;
}

export interface MetaInfo {
  debug?: string;
}

export interface Pagination {
  current: number;
  page_size: number;
  total: number;
  has_next: boolean;
  next_page_token?: string;
}

export interface PageData<T> {
  list: T[];
  pagination: Pagination;
}

export interface ApiResponse<T> {
  status: ResStatus;
  message: string;
  data?: T;
  error?: ErrorDetails;
  meta?: MetaInfo;
}

export type PageResponse<T> = ApiResponse<PageData<T>>;
