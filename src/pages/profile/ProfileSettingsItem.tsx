import { View } from "@tarojs/components";

function ProfileSettingsItem({ icon, label, color, onClick }) {
  return (
    <View className="flex cursor-pointer items-center justify-between py-4" onClick={onClick}>
      <View className="flex items-center">
        <View className={`w-12 h-12 rounded-full bg-${color}-100 flex items-center justify-center mr-6`}>
          <View className={`${icon}  text-${color}-500 font-bold text-lg`}></View>
        </View>
        <View className="text-[#232323] font-400">{label}</View>
      </View>
      <View
        className="flex items-center justify-center rounded-full"
        onClick={onClick}
      >
        <View className="i-tabler-chevron-right text-lg text-[#232323] font-bold"></View>
      </View>
    </View>
  );
}

export default ProfileSettingsItem;
