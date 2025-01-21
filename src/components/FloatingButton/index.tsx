import { View } from "@tarojs/components";
import { memo } from "react";

interface FloatingButtonProps {
  /** 点击按钮时的回调函数 */
  onClick: () => void;
  /** 按钮的图标类名，默认为加号图标 */
  icon?: string;
  /** 按钮的位置，默认为右下角 */
  className?: string;
}

/**
 * 悬浮按钮组件
 * @param props FloatingButtonProps
 * @returns JSX.Element
 */
const FloatingButton = memo(({
  onClick,
  icon = "i-tabler-plus",
  className = "bottom-18 right-4",
}: FloatingButtonProps) => {
  return (
    <View
      className={`fixed ${className} z-50 size-12 flex items-center justify-center rounded-full bg-primary-6 shadow-lg transition-transform active:scale-95`}
      onClick={onClick}
    >
      <View className={`${icon} text-2xl text-white`} />
    </View>
  );
});

FloatingButton.displayName = "FloatingButton";

export default FloatingButton;
