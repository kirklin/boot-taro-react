import { Text, View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import PageWrapper from "~/components/PageWrapper";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <PageWrapper
      navTitle={(
        <Text className="text-xl font-bold">boot-taro-react</Text>
      )}
      className="pages-index-index p-4 h-full w-full"
      shouldShowNavigationMenu={false}
    >
      <View />
    </PageWrapper>
  );
}
