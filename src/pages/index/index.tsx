import { Image, ScrollView, Text, View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";
import { Avatar, Tag } from "@taroify/core";
import PageWrapper from "~/components/PageWrapper";
import { ROUTES } from "~/constants/routes";

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
      navTitle={<View className="text-xl font-bold text-gray-800">Boot Taro React</View>}
      className="h-full"
      shouldShowNavigationMenu={false}
    >
      <ScrollView scrollY className="h-full">
        <View className="p-4 space-y-6">
          {/* 用户信息区域 */}
          <View className="flex justify-between items-center" onClick={() => redirectTo(ROUTES.PROFILE)}>
            <View className="flex items-center space-x-2">
              <View className="text-2xl wave-hand">👋</View>
              <View className="text-lg font-medium text-gray-800">你好, 开发者</View>
            </View>
            <Avatar src="https://avatars.githubusercontent.com/u/17453452?v=4" size="large" />
          </View>

          <View className="text-lg font-medium text-gray-600 mb-4">
            欢迎使用Boot Taro React模板
          </View>

          {/* 功能卡片区域 */}
          <View className="flex space-x-4">
            {/* 示例卡片1 */}
            <View className="bg-primary rounded-2xl shadow-sm p-4 flex-1" onClick={() => redirectTo(ROUTES.HOME)}>
              <View className="text-lg font-medium text-white mb-4">示例卡片1</View>
              <Avatar.Group>
                {[1, 2, 3].map(i => (
                  <Avatar key={i} src={`https://avatars.githubusercontent.com/u/17453452?v=${i}`} />
                ))}
              </Avatar.Group>
              <View className="text-sm text-white mt-2">
                这里可以放一些统计信息
              </View>
            </View>

            {/* 示例卡片2 */}
            <View className="space-y-4 flex-1">
              <View className="bg-white rounded-2xl shadow-sm p-4">
                <View className="flex items-center justify-between mb-2">
                  <View className="flex items-center">
                    <View className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                      <View className="text-purple-500 i-mdi-cog text-lg" />
                    </View>
                    <Text className="text-base font-medium text-gray-800">示例开关</Text>
                  </View>
                </View>
                <View className="flex justify-center mb-2">
                  <View
                    className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer"
                    onClick={toggleSwitch}
                  >
                    <View
                      className="w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
                      style={{ transform: isToggled ? "translateX(1.5rem)" : "translateX(0)" }}
                    />
                  </View>
                </View>
                <Text className="text-xs text-gray-600 text-center">这是一个示例开关</Text>
              </View>

              <View className="bg-white rounded-2xl shadow-sm p-4" onClick={() => redirectTo(ROUTES.HOME)}>
                <View className="flex items-center justify-between mb-2">
                  <View className="flex items-center">
                    <View className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                      <View className="text-green-500 i-mdi-card text-lg" />
                    </View>
                    <Text className="text-base font-medium text-gray-800">示例功能卡片</Text>
                  </View>
                </View>
                <Text className="text-xs text-gray-600 text-center">点击查看示例</Text>
              </View>
            </View>
          </View>

          {/* 示例列表区域 */}
          <View className="">
            <View className="flex justify-between items-center mb-4">
              <View className="text-lg font-medium text-gray-800">
                <Text className="mr-1">示例列表</Text>
                <Tag color="primary" shape="rounded">
                  3
                </Tag>
              </View>
              <View
                className="text-blue-500 rounded-full text-sm font-medium"
                onClick={() => redirectTo(ROUTES.HOME)}
              >
                查看全部
              </View>
            </View>
            <View className="space-y-4 m-0 relative">
              {[1, 2, 3].map((item, index) => (
                <View
                  key={item}
                  className="absolute w-full transition-transform"
                  style={{
                    transform: `translateY(${index * 1.6}rem) scale(${1 - index * 0.1})`,
                    zIndex: 4 - index,
                  }}
                >
                  <View className="bg-gray-100 rounded-xl p-4 shadow-lg flex items-center">
                    <Image className="w-8 h-8 rounded-full mr-2" src={`https://avatars.githubusercontent.com/u/17453452?v=" />${item}`} />
                    <View className="flex-1">
                      <View className="font-medium text-gray-800">
                        示例项目
                        {item}
                      </View>
                      <View className="text-gray-600 truncate">这是一个示例项目描述</View>
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
