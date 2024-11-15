import { View } from "@tarojs/components";

function ProfileSettingsGroup({ title, children }) {
  return (
    <View className="mb-6">
      <View className="mb-4 text-xl font-semibold">{title}</View>
      {children}
    </View>
  );
}

export default ProfileSettingsGroup;
