import type { MenuButtonInfo, NavBarProps, NavigationProps } from "./types";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import NavigationMenu from "~/components/PageWrapper/NavigationMenu";
import { ADAPTED_PAGES, RouteNames } from "~/constants/routes";

// NavBar 组件
function NavBar({
  title,
  navClassName,
  renderCustomHeader,
  menuButton,
  shouldShowNavigationMenu,
}: NavBarProps) {
  // 计算导航栏高度
  const navHeight = menuButton.top + menuButton.height + (menuButton.top - menuButton.statusBarHeight);
  const { statusBarHeight } = menuButton;
  const horizontalPadding = menuButton.width + menuButton.marginRight * 2;

  return (
    <>
      {/* 实际的导航栏 */}
      <View className={`navigation-bar fixed top-0 left-0 right-0 z-800 text-black ${navClassName || ""}`}>
        <View
          style={{
            height: `${navHeight}px`,
            paddingTop: `${statusBarHeight}px`,
          }}
        >
          {shouldShowNavigationMenu && <NavigationMenu homeUrl={ADAPTED_PAGES[RouteNames.MESSAGES]} menuButton={menuButton} />}
          <View
            className="navigation-bar__content h-full flex flex-col items-center justify-center"
            style={{
              marginLeft: `${horizontalPadding}px`,
              marginRight: `${horizontalPadding}px`,
            }}
          >
            <View className="navigation-bar__title w-full text-ellipsis text-center text-base font-bold font-chinese">
              {title}
            </View>
          </View>
        </View>
        {renderCustomHeader && renderCustomHeader(navHeight, statusBarHeight, horizontalPadding)}
      </View>
      {/* 占位元素，保持内容不被导航栏遮挡 */}
      <View className="navigation-bar__placeholder visibility-hidden relative top-[-999px]">
        <View style={{ height: `${navHeight}px`, width: "100%" }} />
        {renderCustomHeader?.(navHeight, statusBarHeight, horizontalPadding)}
      </View>
    </>
  );
}

// 主 Navigation 组件
export default function Navigation({
  navTitle,
  navClassName,
  renderCustomHeader,
  shouldShowNavigationMenu,
}: NavigationProps) {
  const [menuButton, setMenuButton] = useState<MenuButtonInfo | null>(null);

  useEffect(() => {
    // 获取菜单按钮（胶囊按钮）的位置信息
    const fetchMenuButtonInfo = async () => {
      try {
        const systemInfo = await Taro.getSystemInfo();
        const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();
        setMenuButton({
          top: menuButtonInfo.top,
          height: menuButtonInfo.height,
          statusBarHeight: systemInfo.statusBarHeight || 0,
          width: menuButtonInfo.width,
          marginRight: systemInfo.windowWidth - menuButtonInfo.right,
        });
      } catch (error) {
        console.error("获取菜单按钮信息失败:", error);
      }
    };

    fetchMenuButtonInfo();
  }, []);

  return menuButton
    ? (
        <NavBar
          title={navTitle}
          menuButton={menuButton}
          shouldShowNavigationMenu={shouldShowNavigationMenu}
          navClassName={navClassName}
          renderCustomHeader={renderCustomHeader}
        />
      )
    : null;
}
