import { FixedView } from "@taroify/core";
import { View } from "@tarojs/components";

// 底部操作按钮组件
export default function BottomActions() {
  return (
    <FixedView position="bottom" safeArea="bottom">
      <View className="bottom-actions flex items-center justify-between">
      </View>
    </FixedView>
  );
}
