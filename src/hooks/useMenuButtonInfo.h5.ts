import type { MenuButtonInfo } from "../components/PageWrapper/types";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

export function useMenuButtonInfo() {
  const [menuButton, setMenuButton] = useState<MenuButtonInfo | null>(null);

  useEffect(() => {
    try {
      const windowInfo = Taro.getWindowInfo();
      // H5 模拟胶囊按钮信息的默认值
      const menuButtonInfo = {
        top: 7,
        height: 32,
        width: 87,
        right: windowInfo.windowWidth - 7,
      };

      setMenuButton({
        top: menuButtonInfo.top,
        height: menuButtonInfo.height,
        statusBarHeight: windowInfo.statusBarHeight || 0,
        width: menuButtonInfo.width,
        marginRight: windowInfo.windowWidth - menuButtonInfo.right,
      });
    } catch (error) {
      console.error("获取菜单按钮信息失败:", error);
    }
  }, []);

  return menuButton;
}
