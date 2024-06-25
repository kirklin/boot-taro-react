import { Text, View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import { Button } from "@taroify/core";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <Button color="primary">主要按钮</Button>
      <Text className="text-red">Hello world!</Text>
    </View>
  );
}
