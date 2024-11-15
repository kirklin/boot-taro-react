import type { PageWrapperProps } from "./types";
import { ConfigProvider, PullRefresh } from "@taroify/core";
import { View } from "@tarojs/components";
import BottomActions from "~/components/PageWrapper/BottomActions";
import { useTheme } from "~/hooks/useTheme";
import Navigation from "./Navigation";

// 页面包装器组件
export default function PageWrapper({
  navTitle,
  navClassName,
  renderCustomHeader,
  children,
  isRefreshing,
  className,
  shouldShowNavigation = true,
  shouldShowNavigationMenu = true,
  onRefresh,
  enablePullToRefresh = false,
}: PageWrapperProps) {
  const { getThemeVars } = useTheme();

  // 主要内容
  const content = (
    <View className={className}>
      {children}
    </View>
  );

  return (
    <ConfigProvider
      theme={getThemeVars()}
    >
      <View className="page-wrapper h-full min-h-screen flex flex-col bg-gray-1 bg-opacity-10">
        {/* 导航栏组件 */}
        {shouldShowNavigation && (
          <Navigation
            navTitle={navTitle}
            navClassName={navClassName}
            shouldShowNavigationMenu={shouldShowNavigationMenu}
            renderCustomHeader={renderCustomHeader}
          />
        )}
        {/* 根据enablePullToRefresh决定是否启用下拉刷新 */}
        {enablePullToRefresh
          ? (
              <PullRefresh
                loading={isRefreshing}
                onRefresh={onRefresh}
                className="h-full w-full"
              >
                {content}
              </PullRefresh>
            )
          : (
              content
            )}
        <BottomActions />
      </View>
    </ConfigProvider>
  );
}
