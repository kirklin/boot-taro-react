import type { PropsWithChildren } from "react";
import { getUpdateManager, nextTick, showModal, showToast, useDidHide, useDidShow, useLaunch } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "@kirklin/reset-css/taro/kirklin.css";
import "uno.css";
import "./app.scss";
import { initSRSDK } from "~/sr.config";
import { setSystemInfoAsync } from "~/utils";

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
        const updateManager = getUpdateManager();

        updateManager.onCheckForUpdate(async (res) => {
          if (res.hasUpdate) {
            showToast({
              title: "发现新版本",
              icon: "none",
              duration: 2000,
            });
          }
        });

        updateManager.onUpdateReady(() => {
          showModal({
            title: "更新就绪",
            content: "新版本已准备完毕。立即重启应用以享受最新功能和改进？",
            confirmText: "立即重启",
            cancelText: "稍后再说",
            success: (res) => {
              if (res.confirm) {
                updateManager.applyUpdate();
              }
            },
          });
        });

        updateManager.onUpdateFailed(() => {
          showModal({
            title: "更新未成功",
            content: "很抱歉，更新遇到了问题。请尝试重新打开小程序，如果问题持续，可以删除后重新安装。",
            confirmText: "我明白了",
            showCancel: false,
          });
        });
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
