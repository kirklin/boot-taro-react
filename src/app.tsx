import type { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { View } from "@tarojs/components";
import { nextTick, useDidHide, useDidShow, useLaunch } from "@tarojs/taro";
import { useLaunchOptions } from "taro-hooks";
import { cache } from "~/cache";
import { initSRSDK } from "~/sr.config";
import { fetchAndCacheSystemInfoAsync, updateVersion } from "~/utils";
import { queryClient } from "./lib/react-query";
import "@kirklin/reset-css/taro/kirklin.css";
import "uno.css";
import "./app.scss";
import "event-target-polyfill";
import "yet-another-abortcontroller-polyfill";

// 是否开启腾讯有数
const isSDKEnabled = false;

initSRSDK(isSDKEnabled);

function App({ children }: PropsWithChildren<any>) {
  const launchOptions = useLaunchOptions();
  useLaunch(() => {
    cache.set("launchOptions", launchOptions).then(() => console.debug("App launched.", launchOptions));
  });
  // 对应 onShow
  useDidShow(() => {
    nextTick(() => {
      fetchAndCacheSystemInfoAsync().then();
      if (process.env.TARO_ENV !== "h5") {
        updateVersion();
      }
    });
  });

  // 对应 onHide
  useDidHide(() => {
    console.debug("app hide");
  });

  // children 是将要会渲染的页面
  return (
    <QueryClientProvider client={queryClient}>
      <View className="font-chinese antialiased">{children}</View>
    </QueryClientProvider>
  );
}

export default App;
