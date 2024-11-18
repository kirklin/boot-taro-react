import type { PropsWithChildren } from "react";
import { View } from "@tarojs/components";
import { nextTick, useDidHide, useDidShow, useLaunch } from "@tarojs/taro";
import { useLaunchOptions } from "taro-hooks";
import { cache } from "~/cache";
import { initSRSDK } from "~/sr.config";
import { fetchAndCacheSystemInfoAsync, updateVersion } from "~/utils";
import "@kirklin/reset-css/taro/kirklin.css";
import "uno.css";
import "./app.scss";

// 是否开启腾讯有数
const isSDKEnabled = false;

initSRSDK(isSDKEnabled);

function App({ children }: PropsWithChildren<any>) {
  const launchOptions = useLaunchOptions();
  useLaunch(() => {
    cache.set("launchOptions", launchOptions).then(() => console.log("App launched.", launchOptions));
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
    console.log("app hide");
  });

  // children 是将要会渲染的页面
  return <View className="font-chinese antialiased">{children}</View>;
}

export default App;
