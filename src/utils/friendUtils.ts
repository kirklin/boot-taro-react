import type { User } from "~/api/models/user";
import { pinyin } from "pinyin-pro";
import { getUserDisplayName } from "./bll/user";

// 获取名字或备注的拼音首字母
export function getPinyinFirstLetter(text: string): string {
  if (!text) {
    return "#";
  } // 如果为空，返回特殊字符
  const firstLetter = pinyin(text, { pattern: "first", toneType: "none" }).charAt(0).toUpperCase();
  return /^[A-Z]$/.test(firstLetter) ? firstLetter : "#"; // 如果首字母不为A-Z，返回#
}

// 生成索引条并进行排序的工具函数
export function sortFriendsAndGenerateIndexes(
  friends: User[],
): { sortedFriends: User[]; indexList: string[] } {
  // 按照备注优先，然后名字，基于拼音首字母排序
  const sortedFriends = friends.sort((a, b) => {
    const nameA = getUserDisplayName(a, "#", true);
    const nameB = getUserDisplayName(b, "#", true);
    const firstLetterA = getPinyinFirstLetter(nameA);
    const firstLetterB = getPinyinFirstLetter(nameB);
    return firstLetterA.localeCompare(firstLetterB);
  });

  // 生成索引列表，提取每个好友的拼音首字母并去重
  const indexList = Array.from(
    new Set(
      sortedFriends.map(friend =>
        getPinyinFirstLetter(getUserDisplayName(friend, "#", true)).charAt(0),
      ),
    ),
  );

  return { sortedFriends, indexList };
}
