import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn"; // 导入中文语言包
import "dayjs/locale/en"; // 导入英文语言包

// 使用插件
dayjs.extend(relativeTime); // 支持相对时间
dayjs.extend(calendar); // 支持日历时间
dayjs.extend(localizedFormat); // 支持本地化格式

/**
 * 格式化日期为不同显示格式
 * @param date 要格式化的日期
 * @param formatType 格式类型: full, short, medium, yearOnly
 * @returns 格式化后的日期字符串
 */
export function formatDate(date: Date, formatType = "full"): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  switch (formatType) {
    case "yearOnly":
      return `${year}年`;
    case "short":
      return `${year}.${month}`;
    case "medium":
      return `${month}月${day}日`;
    default:
      return `${year}/${month}/${day}`;
  }
}

/**
 * 格式化时间戳用于显示方式
 *  1. 如果是今天的时间，显示 "HH:mm" (例如：14:23)
 *  2. 如果是今年但不是今天的时间，显示 "MM-DD HH:mm" (例如：03-21 14:23)
 *  3. 如果是跨年时间，显示 "YYYY-MM-DD HH:mm" (例如：2021-03-21 14:23)
 *  4. 如果是最近的时间（例如七天内），显示相对时间，如"2天前"、"昨天"等
 *
 * @param timestamp 消息时间戳，单位是毫秒
 * @param locale 语言环境，默认为中文('zh-cn')，可以切换为英文('en')等
 */
export function formatRelativeTimestamp(
  timestamp: dayjs.ConfigType,
  locale: "zh-cn" | "en" = "zh-cn",
): string {
  // 设置语言环境
  dayjs.locale(locale);

  // 当前时间和消息时间
  const messageTime = dayjs(timestamp);
  const now = dayjs();

  // 计算时间差，单位为天
  const daysDiff: number = now.diff(messageTime, "day");

  // 如果是今天的消息，显示"HH:mm"格式
  if (messageTime.isSame(now, "day")) {
    return messageTime.format("HH:mm");
  }

  // 如果是最近七天内，返回相对时间
  if (daysDiff <= 7) {
    return messageTime.fromNow(); // 例如："2天前"
  }

  // 如果是今年的消息但不是七天内，显示"MM-DD HH:mm"
  if (messageTime.isSame(now, "year")) {
    return messageTime.format("MM-DD HH:mm"); // 例如："05-21 14:23"
  }

  // 如果是跨年消息，显示"YYYY-MM-DD HH:mm"
  return messageTime.format("YYYY-MM-DD HH:mm"); // 例如："2024-05-21 14:23"
}
