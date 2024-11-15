import { Avatar, Toast } from "@taroify/core";
import { Text, View } from "@tarojs/components";
import PageWrapper from "~/components/PageWrapper";
import ProfileSettingsGroup from "~/pages/profile/ProfileSettingsGroup";
import ProfileSettingsItem from "~/pages/profile/ProfileSettingsItem";
import "./index.scss";

function UserProfilePage() {
  const menuItems = [
    { label: "客服", icon: "i-tabler-message-circle-question", isLink: true, color: "text-emerald-600" },
    { label: "设置", icon: "i-tabler-settings", isLink: true, color: "text-indigo-600" },
  ];

  return (
    <PageWrapper
      navTitle="我的"
      className="pages-index-index h-full w-full p-6"
      shouldShowNavigationMenu={true}
    >
      <View className="mb-4 flex flex-col items-center justify-center rounded-b-3xl p-4 pb-8">
        <Avatar
          size="large"
          className="mb-4 border-2 border-white rounded-full"
        />
        <Text className="nickname text-2xl text-gray-800 font-bold">微信用户</Text>
      </View>
      <View className="rounded-3xl bg-white px-4 shadow-sm">
        <ProfileSettingsGroup title="">
          {menuItems.map(item => (
            <ProfileSettingsItem
              icon={`${item.icon} ${item.color}`}
              label={item.label}
              key={item.label}
              color={item.color}
              onClick={() => Toast.open("功能待开发，敬请期待")}
            />
          ))}
        </ProfileSettingsGroup>
      </View>
      <Toast id="toast" />
    </PageWrapper>
  );
}

export default UserProfilePage;
