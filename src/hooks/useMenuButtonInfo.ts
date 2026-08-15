import type { MenuButtonInfo } from "../components/PageWrapper/types";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

export function useMenuButtonInfo() {
  const [menuButton, setMenuButton] = useState<MenuButtonInfo | null>(null);

  useEffect(() => {
    try {
      const windowInfo = Taro.getWindowInfo();
      const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();

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
