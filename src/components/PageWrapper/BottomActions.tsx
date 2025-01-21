import type { ReactNode } from "react";
import { FixedView } from "@taroify/core";
import { View } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { useEffect, useState } from "react";
import { PAGES, RouteNames } from "~/constants/routes";
import { redirectTo } from "~/utils/route";

export default function BottomActions() {
  const [currentPage, setCurrentPage] = useState("");
  const router = useRouter();

  // 设置当前页面路径
  useEffect(() => {
    setCurrentPage(router.path);
  }, [router]);

  // 页面跳转处理
  function handleRedirect(route: RouteNames) {
    const path = PAGES[route] as string;
    setCurrentPage(path);
    redirectTo(route);
  }

  // 判断当前页面是否是需要显示底部按钮的页面
  const showBottomActions = [
    PAGES[RouteNames.HOME],
    PAGES[RouteNames.PROFILE],
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
  ].includes(currentPage);

  return (
    // 如果当前页面不在允许显示导航的页面列表中，则不渲染导航
    showBottomActions && (
      <FixedView position="bottom" safeArea="bottom">
        <View
          className="bottom-actions mb-3 flex justify-around rounded-full bg-white px-4 py-2 shadow-lg"
          style={{ width: "fit-content", margin: "1rem auto" }}
        >
          {/* 留言页图标 */}
          <BottomActionButton
            className={` ${currentPage === PAGES[RouteNames.HOME] ? "bg-primary-1 text-primary-6" : "text-text"}`}
            icon="i-line-md-home-md-alt-twotone"
            onClick={() => handleRedirect(RouteNames.HOME)}
            index={0}
          />
          {/* 个人资料页图标 */}
          <BottomActionButton
            className={`${currentPage === PAGES[RouteNames.PROFILE] ? "bg-primary-1 text-primary-6" : "text-text"} `}
            icon="i-iconamoon-profile"
            onClick={() => handleRedirect(RouteNames.PROFILE)}
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
