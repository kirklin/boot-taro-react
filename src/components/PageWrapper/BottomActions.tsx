import { View } from "@tarojs/components";
import { FixedView } from "@taroify/core";

// 底部操作按钮组件
export default function BottomActions() {
  return (
    <FixedView position="bottom" safeArea="bottom">
      <View className="bottom-actions flex justify-between items-center">
      </View>
    </FixedView>
  );
}
