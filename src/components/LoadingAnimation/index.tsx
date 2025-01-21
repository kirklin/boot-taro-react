import { View } from "@tarojs/components";
import "./styles.scss";

export default function LoadingAnimation() {
  return (
    <View className="loading-animation">
      <View className="loading-dot" />
      <View className="loading-dot" />
      <View className="loading-dot" />
    </View>
  );
}
