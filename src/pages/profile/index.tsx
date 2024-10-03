import { Text, View } from "@tarojs/components";
import { Avatar, Toast } from "@taroify/core";
import "./index.scss";
import PageWrapper from "~/components/PageWrapper";
import ProfileSettingsGroup from "~/pages/profile/ProfileSettingsGroup";
import ProfileSettingsItem from "~/pages/profile/ProfileSettingsItem";

function UserProfilePage() {
  const menuItems = [
    { label: "客服", icon: "i-tabler-message-circle-question", isLink: true, color: "text-emerald-600" },
    { label: "设置", icon: "i-tabler-settings", isLink: true, color: "text-indigo-600" },
  ];

  return (
    <PageWrapper
      navTitle={(
        <Text className="text-xl font-bold text-gray-800">我的</Text>
      )}
      className="pages-index-index p-6 h-full w-full"
      shouldShowNavigationMenu={true}
    >
      <View className="p-4 pb-8 rounded-b-3xl flex flex-col items-center justify-center mb-4">
        <Avatar
          size="large"
          className="mb-4 rounded-full border-white border-2"
        />
        <Text className="nickname text-2xl font-bold text-gray-800">微信用户</Text>
      </View>
      <View className="rounded-3xl px-4 bg-white shadow-sm">
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
