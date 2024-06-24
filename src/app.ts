import type { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import "./app.scss";
import { initSRSDK } from "@/sr.config";

// 是否开启腾讯有数
const isSDKEnabled = false;

initSRSDK(isSDKEnabled);

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
