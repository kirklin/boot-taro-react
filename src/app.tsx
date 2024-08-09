import type { PropsWithChildren } from "react";
import { nextTick, useDidHide, useDidShow, useLaunch } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "@kirklin/reset-css/taro/kirklin.css";
import "uno.css";
import "./app.scss";
import { initSRSDK } from "~/sr.config";
import { setSystemInfoAsync, updateVersion } from "~/utils";

// 是否开启腾讯有数
const isSDKEnabled = false;

initSRSDK(isSDKEnabled);

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
  });
  // 对应 onShow
  useDidShow(() => {
    nextTick(() => {
      setSystemInfoAsync();
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
