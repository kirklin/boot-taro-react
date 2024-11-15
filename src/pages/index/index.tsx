import { Avatar, Tag } from "@taroify/core";
import { Image, ScrollView, Text, View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { useState } from "react";
import PageWrapper from "~/components/PageWrapper";
import { ADAPTED_PAGES } from "~/constants/routes";
import "./index.scss";

export default function Index() {
  const [isToggled, setIsToggled] = useState(false);

  useLoad(() => {
    console.log("Page loaded.");
  });

  const toggleSwitch = () => {
    setIsToggled(prev => !prev);
  };

  const redirectTo = async (route: string) => {
    await Taro.redirectTo({ url: `/${route}` });
  };

  return (
    <PageWrapper
      navTitle={<View className="text-xl text-gray-800 font-bold">Boot Taro React</View>}
      className="h-full"
      shouldShowNavigationMenu={false}
    >
      <ScrollView scrollY className="h-full">
        <View className="p-4 space-y-6">
          {/* 用户信息区域 */}
          <View className="flex items-center justify-between" onClick={() => redirectTo(ADAPTED_PAGES.PROFILE)}>
            <View className="flex items-center space-x-2">
              <View className="wave-hand text-2xl">👋</View>
              <View className="text-lg text-gray-800 font-medium">你好, 开发者</View>
            </View>
            <Avatar src="https://avatars.githubusercontent.com/u/17453452?v=4" size="large" />
          </View>

          <View className="mb-4 text-lg text-gray-600 font-medium">
            欢迎使用Boot Taro React模板
          </View>

          {/* 功能卡片区域 */}
          <View className="flex space-x-4">
            {/* 示例卡片1 */}
            <View className="flex-1 rounded-2xl bg-primary p-4 shadow-sm" onClick={() => redirectTo(ADAPTED_PAGES.HOME)}>
              <View className="mb-4 text-lg text-white font-medium">示例卡片1</View>
              <Avatar.Group>
                {[1, 2, 3].map(i => (
                  <Avatar key={i} src={`https://avatars.githubusercontent.com/u/17453452?v=${i}`} />
                ))}
              </Avatar.Group>
              <View className="mt-2 text-sm text-white">
                这里可以放一些统计信息
              </View>
            </View>

            {/* 示例卡片2 */}
            <View className="flex-1 space-y-4">
              <View className="rounded-2xl bg-white p-4 shadow-sm">
                <View className="mb-2 flex items-center justify-between">
                  <View className="flex items-center">
                    <View className="mr-2 h-8 w-8 flex items-center justify-center rounded-full bg-white">
                      <View className="i-mdi-cog text-lg text-purple-500" />
                    </View>
                    <Text className="text-base text-gray-800 font-medium">示例开关</Text>
                  </View>
                </View>
                <View className="mb-2 flex justify-center">
                  <View
                    className="h-6 w-12 cursor-pointer rounded-full bg-gray-200 p-1"
                    onClick={toggleSwitch}
                  >
                    <View
                      className="h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out"
                      style={{ transform: isToggled ? "translateX(1.5rem)" : "translateX(0)" }}
                    />
                  </View>
                </View>
                <Text className="text-center text-xs text-gray-600">这是一个示例开关</Text>
              </View>

              <View className="rounded-2xl bg-white p-4 shadow-sm" onClick={() => redirectTo(ADAPTED_PAGES.HOME)}>
                <View className="mb-2 flex items-center justify-between">
                  <View className="flex items-center">
                    <View className="mr-2 h-8 w-8 flex items-center justify-center rounded-full bg-white">
                      <View className="i-mdi-card text-lg text-green-500" />
                    </View>
                    <Text className="text-base text-gray-800 font-medium">示例功能卡片</Text>
                  </View>
                </View>
                <Text className="text-center text-xs text-gray-600">点击查看示例</Text>
              </View>
            </View>
          </View>

          {/* 示例列表区域 */}
          <View className="">
            <View className="mb-4 flex items-center justify-between">
              <View className="text-lg text-gray-800 font-medium">
                <Text className="mr-1">示例列表</Text>
                <Tag color="primary" shape="rounded">
                  3
                </Tag>
              </View>
              <View
                className="rounded-full text-sm text-blue-500 font-medium"
                onClick={() => redirectTo(ADAPTED_PAGES.HOME)}
              >
                查看全部
              </View>
            </View>
            <View className="relative m-0 space-y-4">
              {[1, 2, 3].map((item, index) => (
                <View
                  key={item}
                  className="absolute w-full transition-transform"
                  style={{
                    transform: `translateY(${index * 1.6}rem) scale(${1 - index * 0.1})`,
                    zIndex: 4 - index,
                  }}
                >
                  <View className="flex items-center rounded-xl bg-gray-100 p-4 shadow-lg">
                    <Image className="mr-2 h-8 w-8 rounded-full" src={`https://avatars.githubusercontent.com/u/17453452?v=" />${item}`} />
                    <View className="flex-1">
                      <View className="text-gray-800 font-medium">
                        示例项目
                        {item}
                      </View>
                      <View className="truncate text-gray-600">这是一个示例项目描述</View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </PageWrapper>
  );
}
