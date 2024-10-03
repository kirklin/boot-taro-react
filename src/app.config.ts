import { ROUTES } from "~/constants/routes";

export default defineAppConfig({
  pages: [
    ROUTES.HOME,
    ROUTES.PROFILE,
  ],
  window: {
    // 微信全局设置自定义导航栏
    navigationStyle: "custom",
    // 支付宝全局设置自定义导航栏
    transparentTitle: "always",
    // 支付宝是否允许导航栏点击穿透。默认 NO，支持 YES / NO。
    titlePenetrate: "YES",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
