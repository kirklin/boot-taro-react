import { useCallback, useEffect, useState } from "react";
import { getCurrentPages, navigateBack, reLaunch } from "@tarojs/taro";
import { View } from "@tarojs/components";
import type { NavigationMenuProps } from "./types";

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

      // 判断是否显示返回按钮
      setShowBackButton(pages.length > 1);

      // 判断是否显示首页按钮
      if (currentUrl && currentUrl[0] === "/") {
        currentUrl = currentUrl.substring(1);
      }
      setShowHomeButton(currentUrl?.split("?")[0] !== homeUrl);
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
          icon="i-tabler:arrow-back-up"
          onClick={handleGoBack}
          size={menuButton.height}
        />
      )}
      {showHomeButton && (
        <NavigationButton
          className="navigation-menu__home"
          icon="i-tabler:home"
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
