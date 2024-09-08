import { View } from "@tarojs/components";
import { ConfigProvider, PullRefresh } from "@taroify/core";
import Navigation from "./Navigation";
import type { PageWrapperProps } from "./types";
import BottomActions from "~/components/PageWrapper/BottomActions";

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
  // 主要内容
  const content = (
    <View className={className}>
      {children}
    </View>
  );

  return (
    <ConfigProvider
      theme={{
      }}
    >
      <View className="page-wrapper flex flex-col h-screen bg-gray-1">
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
