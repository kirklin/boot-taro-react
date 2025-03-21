import type { ReactNode } from "react";
import { FixedView } from "@taroify/core";
import { View } from "@tarojs/components";
import { getCurrentInstance, useDidShow } from "@tarojs/taro";
import { useEffect, useState } from "react";
import { PAGES, RouteNames } from "~/constants/routes";
import { switchTab } from "~/utils/route";

export default function BottomActions() {
  // 获取当前页面路径
  const getCurrentPath = () => {
    return getCurrentInstance().router?.path || "";
  };

  const [currentPage, setCurrentPage] = useState(getCurrentPath());

  // 使用useDidShow钩子监听页面显示事件
  useDidShow(() => {
    setCurrentPage(getCurrentPath());
  });

  // 每次重新渲染时更新当前页面路径
  useEffect(() => {
    setCurrentPage(getCurrentPath());
  }, []);

  // 判断当前页面是否是需要显示底部按钮的页面
  const showBottomActions = Object.values(PAGES).some((path) => {
    // 标准化路径比较
    const normalizedCurrentPage = currentPage.replace(/^\//, "");
    const normalizedPagePath = path.replace(/^\//, "");

    return normalizedCurrentPage === normalizedPagePath
      || normalizedCurrentPage.split("?")[0] === normalizedPagePath;
  });

  // 处理页面跳转的逻辑
  function handleTabSwitch(route: RouteNames) {
    switchTab(route);
  }

  // 判断当前页面是哪个Tab
  const isCurrentTab = (pagePath: string) => {
    // 标准化路径以确保一致性比较（移除开头的斜杠）
    const normalizedCurrentPage = currentPage.replace(/^\//, "");
    const normalizedPagePath = pagePath.replace(/^\//, "");

    // 检查标准化后的路径是否匹配
    return normalizedCurrentPage === normalizedPagePath
    // 如果当前页面路径包含查询参数，只比较路径部分
      || normalizedCurrentPage.split("?")[0] === normalizedPagePath;
  };

  return (
    showBottomActions && (
      <FixedView position="bottom" safeArea="bottom">
        <View
          className="bottom-actions mb-3 flex justify-around rounded-full bg-white px-4 py-2 shadow-lg"
          style={{ width: "fit-content", margin: "1rem auto" }}
        >
          {/* 首页图标 */}
          <BottomActionButton
            className={`${isCurrentTab(PAGES[RouteNames.HOME]) ? "bg-primary-1 text-primary-6" : "text-text"} `}
            icon="i-line-md-home-md-alt-twotone"
            onClick={() => handleTabSwitch(RouteNames.HOME)}
            index={0}
          />
          {/* 个人资料页图标 */}
          <BottomActionButton
            className={`${isCurrentTab(PAGES[RouteNames.PROFILE]) ? "bg-primary-1 text-primary-6" : "text-text"} `}
            icon="i-iconamoon-profile"
            onClick={() => handleTabSwitch(RouteNames.PROFILE)}
            index={2}
          />
        </View>
      </FixedView>
    )
  );
}

// 导航按钮组件
interface BottomActionButtonProps {
  className: string;
  icon: string;
  onClick: () => void;
  index: number; // index 参数来表示按钮位置
  text?: ReactNode;
}

function BottomActionButton({ className, icon, onClick, index, text }: BottomActionButtonProps) {
  // 根据 index 动态设置 margin
  const marginClass = index === 0
    ? "mr-2" // 第一个按钮只设置右边距
    : index === 2
      ? "ml-2" // 最后一个按钮只设置左边距
      : "mx-2"; // 中间的按钮左右边距都有

  return (
    <View
      className={`flex items-center justify-center rounded-full size-10 ${marginClass} ${className}`}
      onClick={onClick}
    >
      {icon && <View className={`${icon} text-base`} />}
      {text && <View>{text}</View>}
    </View>
  );
}
