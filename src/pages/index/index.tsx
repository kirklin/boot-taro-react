import { Avatar, Tag } from "@taroify/core";
import { Image, Text, View } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { useState } from "react";
import { cache } from "~/cache";
import PageWrapper from "~/components/PageWrapper";
import PrivacyPolicyPopup from "~/components/PrivacyPolicyPopup";
import { RouteNames } from "~/constants/routes";
import { redirectTo } from "~/utils/route";
import "./index.scss";

export default function Index() {
  const [isToggled, setIsToggled] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  useLoad(() => {
    console.log("Page loaded.");
    // 检查用户是否已同意隐私政策
    const hasAgreed = cache.getSync("privacyAgreed");
    if (!hasAgreed) {
      setShowPrivacyPolicy(true);
    }
  });

  // Privacy check
  if (showPrivacyPolicy) {
    return (
      <PageWrapper
        navTitle="Boot Taro React"
        className="h-full"
        shouldShowBottomActions={false}
      >
        {/* 隐私政策弹窗 */}
        <PrivacyPolicyPopup
          open={showPrivacyPolicy}
          onClose={() => setShowPrivacyPolicy(false)}
        />
      </PageWrapper>
    );
  }
  const toggleSwitch = () => {
    setIsToggled(prev => !prev);
  };

  return (
    <PageWrapper
      navTitle="Boot Taro React"
      className="h-full"
      shouldShowNavigationMenu={false}
    >
      <View className="p-4 space-y-6">
        {/* 用户信息区域 */}
        <View className="flex items-center justify-between" onClick={() => redirectTo(RouteNames.PROFILE)}>
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
          <View className="flex-1 rounded-2xl bg-primary-6 p-4 shadow-sm" onClick={() => redirectTo(RouteNames.HOME)}>
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
              {/* 自定义 Toggle 开关
                   - 轨道: h-6 w-12 p-1 → weapp 下为 48rpx × 96rpx，内边距 8rpx
                   - 滑块: h-4 w-4 → weapp 下为 32rpx × 32rpx
                   - 背景色根据 isToggled 状态动态切换，提供开/关视觉反馈
                   - translateX 使用 Taro.pxTransform 保证 weapp/H5 双端单位兼容 */}
              <View className="mb-2 flex justify-center">
                {/* 轨道：开启时蓝色(bg-primary-6)，关闭时灰色(bg-gray-200) */}
                <View
                  className={`h-6 w-12 cursor-pointer rounded-full p-1 transition-all duration-300 ${isToggled ? "bg-primary-6" : "bg-gray-200"}`}
                  onClick={toggleSwitch}
                >
                  {/* 滑块：滑动距离 = 轨道内宽(96-8×2) - 滑块宽(32) = 48rpx
                       Taro.pxTransform(48) 会根据 designWidth=750 自动转换:
                       - weapp → 48rpx
                       - H5 → 对应 rem 值 */}
                  <View
                    className="h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out"
                    style={{ transform: isToggled ? `translateX(${Taro.pxTransform(48)})` : "translateX(0)" }}
                  />
                </View>
              </View>
              <Text className="text-center text-xs text-gray-600">这是一个示例开关</Text>
            </View>

            <View className="rounded-2xl bg-white p-4 shadow-sm" onClick={() => redirectTo(RouteNames.HOME)}>
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
              onClick={() => redirectTo(RouteNames.HOME)}
            >
              查看全部
            </View>
          </View>
          <View className="relative m-0" style={{ height: Taro.pxTransform(230) }}>
            {[1, 2, 3].map((item, index) => (
              <View
                key={item}
                className="absolute w-full"
                style={{
                  top: 0,
                  left: 0,
                  right: 0,
                  transform: `translateY(${Taro.pxTransform(index * 70)}) scale(${1 - index * 0.04})`,
                  zIndex: 4 - index,
                }}
              >
                <View className="flex items-center rounded-xl bg-gray-100 p-4 shadow-lg">
                  <Image className="mr-2 h-8 w-8 rounded-full" src={`https://avatars.githubusercontent.com/u/17453452?v=${item}`} />
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
    </PageWrapper>
  );
}
