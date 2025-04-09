import { z } from "zod";

/**
 * 自定义错误消息映射
 */
export const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  let message: string;
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      if (issue.received === "undefined" || issue.received === "null") {
        message = "此项不能为空";
      } else {
        message = `期望类型为 ${issue.expected}，实际类型为 ${issue.received}`;
      }
      break;
    case z.ZodIssueCode.invalid_string:
      if (issue.validation === "url") {
        message = "请输入有效的网址";
      } else if (issue.validation === "email") {
        message = "请输入有效的邮箱地址";
      } else if (issue.validation === "datetime") {
        message = "请输入有效的日期时间";
      } else {
        message = "请输入有效的字符串";
      }
      break;
    case z.ZodIssueCode.too_small:
      if (issue.type === "string") {
        if (issue.minimum === 1) {
          message = "此项不能为空";
        } else {
          message = `最少需要 ${issue.minimum} 个字符`;
        }
      } else if (issue.type === "number") {
        message = `不能小于 ${issue.minimum}`;
      } else {
        message = `不能少于 ${issue.minimum} 项`;
      }
      break;
    case z.ZodIssueCode.too_big:
      if (issue.type === "string") {
        message = `不能超过 ${issue.maximum} 个字符`;
      } else if (issue.type === "number") {
        message = `不能大于 ${issue.maximum}`;
      } else {
        message = `不能超过 ${issue.maximum} 项`;
      }
      break;
    case z.ZodIssueCode.invalid_enum_value:
      message = "选项无效";
      break;
    case z.ZodIssueCode.invalid_arguments:
      message = "参数无效";
      break;
    case z.ZodIssueCode.invalid_return_type:
      message = "返回值类型无效";
      break;
    case z.ZodIssueCode.invalid_date:
      message = "请输入有效的日期";
      break;
    case z.ZodIssueCode.invalid_intersection_types:
      message = "无法同时满足多个类型要求";
      break;
    case z.ZodIssueCode.not_multiple_of:
      message = `必须是 ${issue.multipleOf} 的倍数`;
      break;
    default:
      message = ctx.defaultError;
  }
  return { message };
};
