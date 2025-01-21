import { View } from "@tarojs/components";

function ListItem({
  icon: IconComponent,
  label,
  color = "primary", // Default color
  onClick,
  className = "",
  labelClassName = "",
  iconContainerClassName = "",
  rightIcon: RightIconComponent = () => <View className="i-tabler-chevron-right size-5 text-gray-500"></View>,
}) {
  return (
    <View
      className={`flex items-center justify-between py-2  ${className}`}
      onClick={onClick}
    >
      <View className="mx-4 flex items-center">
        {IconComponent && (
          <View
            className={`size-10 rounded-full bg-${color}-1 flex items-center justify-center mr-4 ${iconContainerClassName}`}
          >
            <View className={`text-${color}-5 ${IconComponent} font-bold text-lg`} />
          </View>
        )}
        <View className={`text-text font-bold ${labelClassName}`}>{label}</View>
      </View>
      <View className="mx-4 flex items-center justify-center rounded-full">
        {RightIconComponent && <RightIconComponent />}
      </View>
    </View>
  );
}

export default ListItem;
