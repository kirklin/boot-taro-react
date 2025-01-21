import { Button, Popup } from "@taroify/core";
import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useCallback } from "react";
import { cache } from "~/cache";
import { RouteNames } from "~/constants/routes";
import { navigateTo } from "~/utils/route";

interface PrivacyPolicyPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyPopup({ open, onClose }: PrivacyPolicyPopupProps) {
  const handleAgree = useCallback(() => {
    cache.setSync("privacyAgreed", true);
    onClose();
  }, [onClose]);

  const handleDisagree = useCallback(() => {
    Taro.exitMiniProgram();
  }, []);

  const handleViewAgreement = useCallback((type: "privacy" | "user") => {
    navigateTo(type === "privacy" ? RouteNames.PRIVACY_POLICY : RouteNames.USER_AGREEMENT);
  }, []);

  // 空函数，用于阻止默认的关闭行为
  const handleClose = useCallback(() => {
    // 不执行任何操作
  }, []);

  return (
    <Popup
      open={open}
      placement="bottom"
      rounded
      onClose={handleClose}
    >
      <Popup.Backdrop closeable={false} />
      <View className="mx-auto max-w-md rounded-t-2xl bg-white p-6 shadow-lg space-y-4">
        <View className="text-center text-lg font-bold">_boot-taro-react_隐私保护指引</View>
        <View className="text-xs text-text leading-sm space-y-2">
          <View>
            点击"同意并继续"表示你已阅读并理解,
            <Text
              className="text-primary-6 underline"
              onClick={() => handleViewAgreement("user")}
            >
              《_boot-taro-react_用户协议》
            </Text>
            <Text>和</Text>
            <Text
              className="text-primary-6 underline"
              onClick={() => handleViewAgreement("privacy")}
            >
              《隐私政策》
            </Text>
            ，同意开启基本业务功能。
          </View>
          <View>
            当你在使用过程中自愿开启功能时，我们将告知提供该功能所必须收集的个人信息范围并征得你的单独同意。针对收集敏感个人信息、向第三方共享你的信息以及获取设备系统权限，我们都将单独征得你的同意。此外，还为你提供撤回同意与查询、更正、删除个人信息和注销账号的路径，更好地保护你的个人信息。
          </View>
          <View>
            若点击"不同意并退出"，你将无法使用我们的产品和服务，并会退出本小程序。
          </View>
        </View>
        <View className="space-y-2">
          <Button
            className="font-bold"
            color="primary"
            shape="round"
            block
            onClick={handleAgree}
          >
            同意并继续
          </Button>
          <Button
            className="font-bold"
            shape="round"
            block
            onClick={handleDisagree}
          >
            不同意并退出
          </Button>
        </View>
      </View>
    </Popup>
  );
}
