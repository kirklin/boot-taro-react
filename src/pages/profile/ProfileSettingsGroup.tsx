import { View } from "@tarojs/components";

function ProfileSettingsGroup({ title, children }) {
  return (
    <View className="mb-6">
      <View className="text-xl font-semibold mb-4">{title}</View>
      {children}
    </View>
  );
}

export default ProfileSettingsGroup;
