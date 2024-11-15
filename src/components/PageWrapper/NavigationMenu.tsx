import type { NavigationMenuProps } from "./types";
import { View } from "@tarojs/components";
import { getCurrentPages, navigateBack, reLaunch } from "@tarojs/taro";
import { useCallback, useEffect, useState } from "react";
import { ADAPTED_PAGES } from "~/constants/routes";

// 菜单按钮组件
function MenuButton({ menuButton, homeUrl }: NavigationMenuProps) {
  const [showBackButton, setShowBackButton] = useState(false);
  const [showHomeButton, setShowHomeButton] = useState(false);

  // 处理返回上一页
  const handleGoBack = useCallback(() => {
    navigateBack({ delta: 1 });
  }, []);

  // 处理返回首页
  const handleGoHome = useCallback(() => {
    reLaunch({ url: `/${homeUrl}` });
  }, [homeUrl]);

  useEffect(() => {
    const pages = getCurrentPages();
    if (pages.length > 0) {
      const currentPage = pages[pages.length - 1];
      let currentUrl = currentPage?.route || currentPage?.__route__;

      const noMenuPages = [
        ADAPTED_PAGES.HOME,
        ADAPTED_PAGES.PROFILE,
      ];

      if (currentUrl && currentUrl[0] === "/") {
        currentUrl = currentUrl.substring(1);
      }
      const currentRoute = currentUrl?.split("?")[0];
      const isNoMenuPage = noMenuPages.includes(currentRoute);

      // 判断是否显示返回按钮, 非白名单且多于一页时显示
      setShowBackButton(pages.length > 1 && !isNoMenuPage);

      // 判断是否显示首页按钮, 非白名单且当前页层级大于 2 且不是首页时显示
      setShowHomeButton(pages.length > 2 && currentRoute !== homeUrl && !isNoMenuPage);
    }
  }, [homeUrl]);

  if (!showBackButton && !showHomeButton) {
    return null;
  }

  return (
    <View
      className="navigation-menu fixed z-800 flex-row"
      style={{
        top: `${menuButton.top}px`,
        left: `${menuButton.marginRight}px`,
        width: `${menuButton.width}px`,
        height: `${menuButton.height}px`,
        display: "flex",
      }}
    >
      {showBackButton && (
        <NavigationButton
          className="navigation-menu__back mr-10px"
          icon="i-tabler-arrow-back-up"
          onClick={handleGoBack}
          size={menuButton.height}
        />
      )}
      {showHomeButton && (
        <NavigationButton
          className="navigation-menu__home"
          icon="i-tabler-home"
          onClick={handleGoHome}
          size={menuButton.height}
        />
      )}
    </View>
  );
}

// 导航按钮组件
interface NavigationButtonProps {
  className: string;
  icon: string;
  onClick: () => void;
  size: number;
}

function NavigationButton({ className, icon, onClick, size }: NavigationButtonProps) {
  return (
    <View
      className={`rounded-full flex items-center justify-center ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      onClick={onClick}
    >
      <View className={`${icon} text-bold`}></View>
    </View>
  );
}

// 导航菜单组件
export default function NavigationMenu({ homeUrl, menuButton }: NavigationMenuProps) {
  if (!menuButton || process.env.TARO_ENV === "alipay") {
    return null;
  }

  return <MenuButton menuButton={menuButton} homeUrl={homeUrl} />;
}
