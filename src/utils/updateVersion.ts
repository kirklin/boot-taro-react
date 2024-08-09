import {
  canIUse,
  getUpdateManager,
  showModal,
  showToast,
} from "@tarojs/taro";

export function updateVersion() {
  if (!canIUse("getUpdateManager")) {
    return;
  }
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
