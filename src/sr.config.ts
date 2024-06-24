// srInit.ts
import sr from "sr-sdk-wxapp";

// srConfig.ts
export const srConfig = {
  /**
   * 有数 - ka‘接入测试用’ 分配的 app_id，对应的业务接口人负责
   */
  token: "bi72fccc7184ef4xxx",

  /**
   * 微信小程序appID，以wx开头
   */
  appid: "wx195745e8e342bxxx",

  /**
   * 如果使用了小程序插件，需要设置为 true
   */
  usePlugin: false,

  /**
   * 开启打印调试信息， 默认 false
   */
  debug: true,

  /**
   * 建议开启-开启自动代理 Page， 默认 false
   * sdk 负责上报页面的 browse 、leave、share 等事件
   * 可以使用 sr.page 代替 Page(sr.page(options))
   * 元素事件跟踪，需要配合 autoTrack: true
   */
  proxyPage: true,
  /**
   * 建议开启-开启组件自动代理， 默认 false
   * sdk 负责上报页面的 browse 、leave、share 等事件
   */
  proxyComponent: true,
  // 建议开启-是否开启页面分享链路自动跟踪
  openSdkShareDepth: true,
  // 建议开启-元素事件跟踪，自动上报元素事件，入tap、change、longpress、confirm
  autoTrack: true,
  // 建议开启-自动化获取openId，授权过的小程序可自动化获取openId
  openAutoTrackOpenId: true,
  // 开启自动代理，此功能为有数 SDK 核心功能，建议开启，开启前请完成「小程序授权」操作，详见下文“init 参数说明”部分
  autoProxy: {
    // 开启后代理采集启动应用事件，默认为true
    app_launch: true,
    // 开启后代理采集显示应用事件，默认为true
    app_show: true,
    // 开启后代理采集隐藏应用事件，默认为true
    app_exit: true,
    // 开启后代理采集浏览页面事件，默认为true
    browse_page: true,
    // 开启后代理采集离开页面事件，默认为true
    leave_page: true,
    // 开启后代理采集元素事件，v2.0.0版本之前默认为true，v2.0.0版本之后默认为false
    autoTrack: false,
    // 开启后代理采集下拉刷新页面事件，v2.0.0版本之前默认为true，v2.0.0版本之后默认为false
    page_pull_down_refresh: false,
    // 开启后代理采集上拉触底页面事件，默认为true
    page_reach_bottom: true,
    // 开启后代理采集分享页面事件，默认为true
    page_share_app_message: true,
    // 开启后自动采集openid，默认为true
    openAutoTrackOpenId: true,
    // 开启后自动采集unionId，默认为true
    openAutoTrackUnionId: true,
    // 开启后自动采集分享裂变，默认为true
    openSdkShareDepth: true,
  },
};

export function initSRSDK(isEnabled: boolean) {
  if (isEnabled) {
    sr.init(srConfig);
  }
}
