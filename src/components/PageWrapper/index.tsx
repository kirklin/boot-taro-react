import type { ReactNode } from "react";
import type { PageWrapperProps } from "./types";
import { ConfigProvider, PullRefresh } from "@taroify/core";
import { View } from "@tarojs/components";
import LoadingAnimation from "~/components/LoadingAnimation";
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
  shouldShowBottomActions = true,
  onRefresh,
  enablePullToRefresh = false,
  backgroundClassName,
  loading = false,
}: PageWrapperProps) {
  const { getThemeVars } = useTheme();

  // 判断 navTitle 是字符串还是 JSX 元素，并进行相应处理:
  const resolvedNavTitle: ReactNode
    = typeof navTitle === "string"
      ? (
          <View className="text-text font-bold">{navTitle}</View>
        )
      : (
          navTitle
        );

  // 主要内容
  const content = (
    <View className={className}>
      {children}
    </View>
  );

  // 动态计算背景样式：如果提供了 `backgroundClassName` 则优先使用，否则使用默认样式
  const wrapperBackgroundClass = backgroundClassName || "bg-gray-1 bg-opacity-10";

  return (
    <ConfigProvider theme={getThemeVars()}>
      <View className={`page-wrapper flex flex-col h-full min-h-screen ${wrapperBackgroundClass} relative`}>
        {/* 导航栏组件 */}
        {shouldShowNavigation && (
          <Navigation
            navTitle={resolvedNavTitle}
            navClassName={navClassName}
            shouldShowNavigationMenu={shouldShowNavigationMenu}
            renderCustomHeader={renderCustomHeader}
          />
        )}
        {/* 根据 enablePullToRefresh 决定是否启用下拉刷新 */}
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
        {/* Loading遮罩层 */}
        {loading && (
          <View className="absolute inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
            <LoadingAnimation />
          </View>
        )}
        {shouldShowBottomActions && (
          <BottomActions />
        )}
      </View>
    </ConfigProvider>
  );
}
