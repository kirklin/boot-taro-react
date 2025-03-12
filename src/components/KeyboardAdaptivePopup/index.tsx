import type { CSSProperties, FC, PropsWithChildren } from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

interface KeyboardAdaptivePopupProps {
  open: boolean;
  onClose: () => void;
  placement?: "center" | "bottom" | "top" | "left" | "right";
  rounded?: boolean;
  zIndex?: number;
  lockScroll?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * 适配键盘高度的自定义弹出层组件
 */
const KeyboardAdaptivePopup: FC<PropsWithChildren<KeyboardAdaptivePopupProps>> = ({
  open,
  onClose,
  placement = "bottom",
  rounded = false,
  zIndex = 1010,
  lockScroll = true,
  closeOnOverlayClick = true,
  className = "",
  style = {},
  children,
}) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [contentStyle, setContentStyle] = useState<CSSProperties>({});
  const [animation, setAnimation] = useState<boolean>(false);

  // 处理键盘高度变化
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyboardChange = (res) => {
      const { height } = res;
      setKeyboardHeight(height);

      if (height > 0 && placement === "bottom") {
        setContentStyle({
          bottom: `${height}px`,
          transition: "bottom 0.3s ease",
        });
      } else {
        setContentStyle({});
      }
    };

    Taro.onKeyboardHeightChange(onKeyboardChange);

    return () => {
      Taro.offKeyboardHeightChange(onKeyboardChange);
    };
  }, [open, placement]);

  // 处理弹窗开关动画
  useEffect(() => {
    if (open) {
      // 确保渲染完DOM后再添加动画效果，避免初始动画
      setTimeout(() => {
        setAnimation(true);
      }, 10);

      // 处理锁定滚动
      if (lockScroll) {
        document.body.style.overflow = "hidden";
      }
    } else {
      setAnimation(false);

      // 恢复滚动
      if (lockScroll) {
        document.body.style.overflow = "";
      }
    }
  }, [open, lockScroll]);

  // 计算容器位置样式
  const getContentPositionStyle = (): CSSProperties => {
    const baseStyle: CSSProperties = {
      ...contentStyle,
      zIndex: zIndex + 1,
    };

    switch (placement) {
      case "bottom":
        return {
          ...baseStyle,
          left: 0,
          right: 0,
          bottom: keyboardHeight > 0 ? `${keyboardHeight}px` : 0,
          borderTopLeftRadius: rounded ? "16px" : 0,
          borderTopRightRadius: rounded ? "16px" : 0,
          transform: animation ? "translateY(0)" : "translateY(100%)",
        };
      case "top":
        return {
          ...baseStyle,
          left: 0,
          right: 0,
          top: 0,
          borderBottomLeftRadius: rounded ? "16px" : 0,
          borderBottomRightRadius: rounded ? "16px" : 0,
          transform: animation ? "translateY(0)" : "translateY(-100%)",
        };
      case "left":
        return {
          ...baseStyle,
          left: 0,
          top: 0,
          bottom: 0,
          borderTopRightRadius: rounded ? "16px" : 0,
          borderBottomRightRadius: rounded ? "16px" : 0,
          transform: animation ? "translateX(0)" : "translateX(-100%)",
        };
      case "right":
        return {
          ...baseStyle,
          right: 0,
          top: 0,
          bottom: 0,
          borderTopLeftRadius: rounded ? "16px" : 0,
          borderBottomLeftRadius: rounded ? "16px" : 0,
          transform: animation ? "translateX(0)" : "translateX(100%)",
        };
      case "center":
      default:
        return {
          ...baseStyle,
          top: "50%",
          left: "50%",
          borderRadius: rounded ? "16px" : 0,
          transform: animation
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -50%) scale(0.8)",
          opacity: animation ? 1 : 0,
        };
    }
  };

  // 处理点击背景
  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  // 防止内容点击事件冒泡
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  if (!open) {
    return null;
  }

  return (
    <View className="fixed inset-0 flex items-center justify-center" style={{ zIndex }}>
      {/* 背景蒙层 */}
      <View
        className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${animation ? "opacity-100" : "opacity-0"}`}
        onClick={handleOverlayClick}
      />

      {/* 内容容器 */}
      <View
        className={`absolute bg-white transition-all duration-300 ${className}`}
        style={{ ...style, ...getContentPositionStyle() }}
        onClick={handleContentClick}
      >
        {children}
      </View>
    </View>
  );
};

export default KeyboardAdaptivePopup;
