/**
 * 微信小程序场景值枚举
 * 用于标识用户进入小程序的入口
 * 参考: https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html
 * https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html
 */
export enum Scene {
  /**
   * 其他
   */
  OTHER = 1000,

  /**
   * 发现页小程序「最近使用」列表
   */
  DISCOVER_RECENT = 1001,

  /**
   * 微信首页顶部搜索框的搜索结果页
   */
  SEARCH_TOP = 1005,

  /**
   * 发现栏小程序主入口搜索框的搜索结果页
   */
  DISCOVER_SEARCH = 1006,

  /**
   * 单人聊天会话中的小程序消息卡片
   */
  SINGLE_CHAT = 1007,

  /**
   * 群聊会话中的小程序消息卡片
   */
  GROUP_CHAT = 1008,

  /**
   * 收藏夹
   */
  FAVORITES = 1010,

  /**
   * 扫描二维码
   */
  SCAN_QR_CODE = 1011,

  /**
   * 长按图片识别二维码
   */
  LONG_PRESS_QR_CODE = 1012,

  /**
   * 扫描手机相册中选取的二维码
   */
  SCAN_ALBUM_QR_CODE = 1013,

  /**
   * 小程序订阅消息
   */
  SUBSCRIBE_MESSAGE = 1014,

  /**
   * 前往小程序体验版的入口页
   */
  EXPERIENCE = 1017,

  /**
   * 微信钱包
   */
  WALLET = 1019,

  /**
   * 小程序 profile 页
   */
  PROFILE = 1024,

  /**
   * 扫描一维码
   */
  SCAN_BARCODE = 1025,

  /**
   * 发现栏小程序主入口，「附近的小程序」列表
   */
  NEARBY = 1026,

  /**
   * 微信首页顶部搜索框搜索结果页「使用过的小程序」列表
   */
  SEARCH_USED = 1027,

  /**
   * 我的卡包
   */
  CARD_PACKAGE = 1028,

  /**
   * 小程序中的卡券详情页
   */
  CARD_DETAIL = 1029,

  /**
   * 自动化测试下打开小程序
   */
  TEST = 1030,

  /**
   * 长按图片识别一维码
   */
  LONG_PRESS_BARCODE = 1031,

  /**
   * 扫描手机相册中选取的一维码
   */
  SCAN_ALBUM_BARCODE = 1032,

  /**
   * 微信支付完成页
   */
  PAYMENT_COMPLETE = 1034,

  /**
   * 公众号自定义菜单
   */
  OFFICIAL_ACCOUNT_MENU = 1035,

  /**
   * App 分享消息卡片
   */
  APP_SHARE = 1036,

  /**
   * 小程序打开小程序
   */
  MINI_PROGRAM_OPEN = 1037,

  /**
   * 从另一个小程序返回
   */
  MINI_PROGRAM_BACK = 1038,

  /**
   * 摇电视
   */
  SHAKE_TV = 1039,

  /**
   * 添加好友搜索框的搜索结果页
   */
  ADD_FRIEND_SEARCH = 1042,

  /**
   * 公众号模板消息
   */
  TEMPLATE_MESSAGE = 1043,

  /**
   * 带 shareTicket 的小程序消息卡片
   */
  SHARE_TICKET = 1044,

  /**
   * 朋友圈广告
   */
  MOMENTS_AD = 1045,

  /**
   * 朋友圈广告详情页
   */
  MOMENTS_AD_DETAIL = 1046,

  /**
   * 扫描小程序码
   */
  SCAN_MINI_PROGRAM_CODE = 1047,

  /**
   * 长按图片识别小程序码
   */
  LONG_PRESS_MINI_PROGRAM_CODE = 1048,

  /**
   * 扫描手机相册中选取的小程序码
   */
  SCAN_ALBUM_MINI_PROGRAM_CODE = 1049,

  /**
   * 卡券的适用门店列表
   */
  CARD_STORE_LIST = 1052,

  /**
   * 搜一搜的结果页
   */
  SEARCH_RESULT = 1053,

  /**
   * 聊天顶部音乐播放器右上角菜单
   */
  MUSIC_PLAYER = 1056,

  /**
   * 钱包中的银行卡详情页
   */
  BANK_CARD_DETAIL = 1057,

  /**
   * 公众号文章
   */
  OFFICIAL_ACCOUNT_ARTICLE = 1058,

  /**
   * 体验版小程序绑定邀请页
   */
  EXPERIENCE_BIND = 1059,

  /**
   * 微信首页连Wi-Fi状态栏
   */
  WIFI_STATUS = 1064,

  /**
   * URL scheme
   */
  URL_SCHEME = 1065,

  /**
   * 公众号文章广告
   */
  ARTICLE_AD = 1067,

  /**
   * 移动应用通过openSDK进入微信，打开小程序
   */
  OPEN_SDK = 1069,

  /**
   * 钱包中的银行卡列表页
   */
  BANK_CARD_LIST = 1071,

  /**
   * 二维码收款页面
   */
  QR_CODE_PAYMENT = 1072,

  /**
   * 客服消息列表下发的小程序消息卡片
   */
  CUSTOMER_SERVICE = 1073,

  /**
   * 公众号会话下发的小程序消息卡片
   */
  OFFICIAL_ACCOUNT_CHAT = 1074,

  /**
   * 摇周边
   */
  SHAKE_AROUND = 1077,

  /**
   * 微信连Wi-Fi成功提示页
   */
  WIFI_SUCCESS = 1078,

  /**
   * 微信游戏中心
   */
  GAME_CENTER = 1079,

  /**
   * 客服消息下发的文字链
   */
  CUSTOMER_SERVICE_TEXT = 1081,

  /**
   * 公众号会话下发的文字链
   */
  OFFICIAL_ACCOUNT_TEXT = 1082,

  /**
   * 朋友圈广告原生页
   */
  MOMENTS_AD_NATIVE = 1084,

  /**
   * 微信聊天主界面下拉，「最近使用」栏
   */
  CHAT_DROPDOWN_RECENT = 1089,

  /**
   * 长按小程序右上角菜单唤出最近使用历史
   */
  LONG_PRESS_MENU = 1090,

  /**
   * 公众号文章商品卡片
   */
  ARTICLE_PRODUCT = 1091,

  /**
   * 城市服务入口
   */
  CITY_SERVICE = 1092,

  /**
   * 小程序广告组件
   */
  MINI_PROGRAM_AD = 1095,

  /**
   * 聊天记录，打开小程序
   */
  CHAT_HISTORY = 1096,

  /**
   * 微信支付签约原生页，打开小程序
   */
  PAYMENT_SIGN = 1097,

  /**
   * 页面内嵌插件
   */
  PLUGIN = 1099,

  /**
   * 红包封面详情页打开小程序
   */
  RED_PACKET_COVER = 1100,

  /**
   * 远程调试热更新
   */
  REMOTE_DEBUG = 1101,

  /**
   * 公众号 profile 页服务预览
   */
  OFFICIAL_ACCOUNT_SERVICE = 1102,

  /**
   * 发现页小程序「我的小程序」列表
   */
  DISCOVER_MY = 1103,

  /**
   * 微信聊天主界面下拉，「我的小程序」栏
   */
  CHAT_DROPDOWN_MY = 1104,

  /**
   * 聊天主界面下拉，从顶部搜索结果页，打开小程序
   */
  CHAT_DROPDOWN_SEARCH = 1106,

  /**
   * 订阅消息，打开小程序
   */
  SUBSCRIBE_OPEN = 1107,

  /**
   * 安卓手机负一屏，打开小程序
   */
  ANDROID_NEGATIVE_SCREEN = 1113,

  /**
   * 安卓手机侧边栏，打开小程序
   */
  ANDROID_SIDEBAR = 1114,

  /**
   * 企业微信工作台内打开小程序
   */
  WORK_WEIXIN_WORKBENCH = 1119,

  /**
   * 企业微信个人资料页内打开小程序
   */
  WORK_WEIXIN_PROFILE = 1120,

  /**
   * 企业微信聊天加号附件框内打开小程序
   */
  WORK_WEIXIN_CHAT_ATTACHMENT = 1121,

  /**
   * 扫"一物一码"打开小程序
   */
  SCAN_ONE_CODE = 1124,

  /**
   * 长按图片识别"一物一码"
   */
  LONG_PRESS_ONE_CODE = 1125,

  /**
   * 扫描手机相册中选取的"一物一码"
   */
  SCAN_ALBUM_ONE_CODE = 1126,

  /**
   * 微信爬虫访问
   */
  CRAWLER = 1129,

  /**
   * 浮窗
   */
  FLOAT_WINDOW = 1131,

  /**
   * 硬件设备打开小程序
   */
  HARDWARE_DEVICE = 1133,

  /**
   * 小程序profile页相关小程序列表，打开小程序
   */
  PROFILE_RELATED = 1135,

  /**
   * 公众号文章 - 视频贴片
   */
  ARTICLE_VIDEO = 1144,

  /**
   * 发现栏 - 发现小程序
   */
  DISCOVER_FIND = 1145,

  /**
   * 地理位置信息打开出行类小程序
   */
  LOCATION_TRAVEL = 1146,

  /**
   * 卡包-交通卡，打开小程序
   */
  CARD_PACKAGE_TRANSPORT = 1148,

  /**
   * 扫一扫商品条码结果页打开小程序
   */
  SCAN_PRODUCT = 1150,

  /**
   * 发现栏 - 我的订单
   */
  DISCOVER_ORDER = 1151,

  /**
   * 订阅号视频打开小程序
   */
  SUBSCRIPTION_VIDEO = 1152,

  /**
   * "识物"结果页打开小程序
   */
  RECOGNIZE_OBJECT = 1153,

  /**
   * 朋友圈内打开"单页模式"
   */
  MOMENTS_SINGLE_PAGE = 1154,

  /**
   * "单页模式"打开小程序
   */
  SINGLE_PAGE = 1155,

  /**
   * 服务号会话页打开小程序
   */
  SERVICE_ACCOUNT_CHAT = 1157,

  /**
   * 群工具打开小程序
   */
  GROUP_TOOL = 1158,

  /**
   * 群待办
   */
  GROUP_TODO = 1160,

  /**
   * H5 通过开放标签打开小程序
   */
  H5_OPEN_TAG = 1167,

  /**
   * 移动/网站应用直接运行小程序
   */
  APP_DIRECT_RUN = 1168,

  /**
   * 发现栏小程序主入口，各个生活服务入口
   */
  DISCOVER_LIFE_SERVICE = 1169,

  /**
   * 微信运动记录
   */
  WEIXIN_SPORT = 1171,

  /**
   * 聊天素材用小程序打开
   */
  CHAT_MATERIAL = 1173,

  /**
   * 视频号主页商店入口
   */
  VIDEO_ACCOUNT_STORE = 1175,

  /**
   * 视频号直播间主播打开小程序
   */
  VIDEO_ACCOUNT_LIVE = 1176,

  /**
   * 视频号直播商品
   */
  VIDEO_ACCOUNT_LIVE_PRODUCT = 1177,

  /**
   * 在电脑打开手机上打开的小程序
   */
  PC_OPEN_MOBILE = 1178,

  /**
   * #话题页打开小程序
   */
  TOPIC_PAGE = 1179,

  /**
   * 网站应用打开PC小程序
   */
  WEB_OPEN_PC = 1181,

  /**
   * PC微信 - 小程序面板 - 发现小程序 - 搜索
   */
  PC_DISCOVER_SEARCH = 1183,

  /**
   * 视频号链接打开小程序
   */
  VIDEO_ACCOUNT_LINK = 1184,

  /**
   * 群公告
   */
  GROUP_ANNOUNCEMENT = 1185,

  /**
   * 收藏 - 笔记
   */
  FAVORITES_NOTE = 1186,

  /**
   * 浮窗
   */
  FLOAT_WINDOW_NEW = 1187,

  /**
   * 表情雨广告
   */
  EMOJI_RAIN_AD = 1189,

  /**
   * 视频号活动
   */
  VIDEO_ACCOUNT_ACTIVITY = 1191,

  /**
   * 企业微信联系人profile页
   */
  WORK_WEIXIN_CONTACT_PROFILE = 1192,

  /**
   * 视频号主页服务菜单打开小程序
   */
  VIDEO_ACCOUNT_SERVICE_MENU = 1193,

  /**
   * URL Link
   */
  URL_LINK = 1194,

  /**
   * 视频号主页商品tab
   */
  VIDEO_ACCOUNT_PRODUCT_TAB = 1195,

  /**
   * 个人状态打开小程序
   */
  PERSONAL_STATUS = 1196,

  /**
   * 视频号主播从直播间返回小游戏
   */
  VIDEO_ACCOUNT_LIVE_BACK = 1197,

  /**
   * 视频号开播界面打开小游戏
   */
  VIDEO_ACCOUNT_LIVE_START = 1198,

  /**
   * 视频号广告打开小程序
   */
  VIDEO_ACCOUNT_AD = 1200,

  /**
   * 视频号广告详情页打开小程序
   */
  VIDEO_ACCOUNT_AD_DETAIL = 1201,

  /**
   * 企微客服号会话打开小程序卡片
   */
  WORK_WEIXIN_CUSTOMER_SERVICE_CARD = 1202,

  /**
   * 微信小程序压测工具的请求
   */
  PRESSURE_TEST = 1203,

  /**
   * 视频号小游戏直播间打开小游戏
   */
  VIDEO_ACCOUNT_GAME_LIVE = 1206,

  /**
   * 企微客服号会话打开小程序文字链
   */
  WORK_WEIXIN_CUSTOMER_SERVICE_TEXT = 1207,

  /**
   * 聊天打开商品卡片
   */
  CHAT_PRODUCT_CARD = 1208,

  /**
   * 青少年模式申请页打开小程序
   */
  TEENAGER_MODE = 1212,

  /**
   * 广告预约打开小程序
   */
  AD_RESERVATION = 1215,

  /**
   * 视频号订单中心打开小程序
   */
  VIDEO_ACCOUNT_ORDER = 1216,

  /**
   * 微信键盘预览打开小程序
   */
  WEIXIN_KEYBOARD = 1218,

  /**
   * 视频号直播间小游戏一键上车
   */
  VIDEO_ACCOUNT_GAME_JOIN = 1219,

  /**
   * 发现页设备卡片打开小程序
   */
  DISCOVER_DEVICE = 1220,

  /**
   * 安卓桌面Widget打开小程序
   */
  ANDROID_WIDGET = 1223,

  /**
   * 音视频通话打开小程序
   */
  VOICE_VIDEO_CALL = 1225,

  /**
   * 聊天消息在设备打开后打开小程序
   */
  DEVICE_OPEN_CHAT = 1226,

  /**
   * 视频号原生广告组件打开小程序
   */
  VIDEO_ACCOUNT_NATIVE_AD = 1228,

  /**
   * 订阅号H5广告进入小程序
   */
  SUBSCRIPTION_H5_AD = 1230,

  /**
   * 动态消息提醒入口打开小程序
   */
  DYNAMIC_MESSAGE = 1231,

  /**
   * 搜一搜竞价广告打开小程序
   */
  SEARCH_BID_AD = 1232,

  /**
   * 小程序搜索页人气游戏模块打开小游戏
   */
  SEARCH_POPULAR_GAME = 1233,

  /**
   * 看一看信息流广告打开小程序
   */
  LOOK_AROUND_AD = 1238,

  /**
   * 小程序发现页门店快送模块频道页进入小程序
   */
  DISCOVER_STORE_DELIVERY = 1242,

  /**
   * #tag搜索结果页打开小程序
   */
  TAG_SEARCH = 1244,

  /**
   * 小程序发现页门店快送搜索结果页进入小程序
   */
  DISCOVER_STORE_DELIVERY_SEARCH = 1245,

  /**
   * 通过小程序账号迁移进入小程序
   */
  ACCOUNT_MIGRATION = 1248,

  /**
   * 搜一搜小程序搜索页「小功能」模块进入小程序
   */
  SEARCH_SMALL_FEATURE = 1252,

  /**
   * 发现页「动态」卡片 打开小程序
   */
  DISCOVER_DYNAMIC = 1254,

  /**
   * 发现页「我的」卡片 打开小程序
   */
  DISCOVER_MY_CARD = 1255,

  /**
   * pc端小程序面板「最近使用」列表
   */
  PC_RECENT = 1256,

  /**
   * pc端小程序面板「我的小程序」列表
   */
  PC_MY = 1257,

  /**
   * pc端小程序面板「为电脑端优化」模块
   */
  PC_OPTIMIZED = 1258,

  /**
   * pc端小程序面板「小游戏专区」模块
   */
  PC_GAME_ZONE = 1259,

  /**
   * pc端小程序面板「推荐在电脑端使用」列表
   */
  PC_RECOMMENDED = 1260,

  /**
   * 公众号返佣商品卡片
   */
  OFFICIAL_ACCOUNT_REBATE = 1261,

  /**
   * 小程序图片详情页打开小程序
   */
  IMAGE_DETAIL = 1265,

  /**
   * 小程序图片长按半屏入口打开小程序
   */
  IMAGE_LONG_PRESS = 1266,

  /**
   * 小程序图片会话角标打开小程序
   */
  IMAGE_CHAT_BADGE = 1267,

  /**
   * 微信聊天主界面下拉，「我的常用小程序」栏
   */
  CHAT_DROPDOWN_COMMON = 1271,

  /**
   * 发现页「游戏」服务tab打开小程序
   */
  DISCOVER_GAME = 1272,

  /**
   * 发现页「常用的小程序」列表
   */
  DISCOVER_COMMON = 1273,

  /**
   * 发现页「发现小程序」列表打开小程序
   */
  DISCOVER_FIND_LIST = 1278,

  /**
   * 发现页「发现小程序」合集页打开小程序
   */
  DISCOVER_FIND_COLLECTION = 1279,

  /**
   * 下拉任务栏小程序垂搜「建议使用」打开小程序
   */
  TASKBAR_SUGGEST = 1280,

  /**
   * 下拉任务栏小程序垂搜「发现小程序」打开小程序
   */
  TASKBAR_DISCOVER = 1281,

  /**
   * 听一听播放器打开小程序
   */
  LISTEN_PLAYER = 1282,

  /**
   * 发现页「发现小程序」短剧合集打开小程序
   */
  DISCOVER_SHORT_DRAMA = 1285,

  /**
   * 明文scheme打开小程序
   */
  PLAIN_SCHEME = 1286,

  /**
   * 公众号短剧贴片打开小程序
   */
  OFFICIAL_ACCOUNT_SHORT_DRAMA = 1287,

  /**
   * 发现页「发现小程序」poi 详情页打开小程序
   */
  DISCOVER_POI_DETAIL = 1292,

  /**
   * 发现页短剧卡片追剧页打开小程序
   */
  DISCOVER_DRAMA_FOLLOW = 1293,

  /**
   * 下拉任务栏小程序垂搜「发现小程序」广告打开小程序
   */
  TASKBAR_DISCOVER_AD = 1295,

  /**
   * 视频号付费短剧气泡打开小程序
   */
  VIDEO_ACCOUNT_PAID_DRAMA = 1296,

  /**
   * 发现-小程序-搜索「发现小程序」打开小程序
   */
  DISCOVER_SEARCH_FIND = 1297,

  /**
   * 下拉任务栏小程序垂搜「发现小程序」打开的合集访问小程序
   */
  TASKBAR_DISCOVER_COLLECTION = 1298,

  /**
   * 下拉任务栏小程序垂搜「发现小程序」poi 详情页打开小程序
   */
  TASKBAR_POI_DETAIL = 1299,

  /**
   * 发现-小程序-搜索「发现小程序」打开的合集访问小程序
   */
  DISCOVER_SEARCH_COLLECTION = 1300,

  /**
   * 发现-小程序-搜索「发现小程序」poi 详情页打开小程序
   */
  DISCOVER_SEARCH_POI_DETAIL = 1301,

  /**
   * PC端面板「发现小程序」
   */
  PC_DISCOVER = 1302,

  /**
   * 发现页短剧卡片视频流打开小程序
   */
  DISCOVER_DRAMA_VIDEO = 1303,

  /**
   * 手机负一屏打开小程序
   */
  MOBILE_NEGATIVE_SCREEN = 1304,

  /**
   * 公众号播放结束页打开小程序
   */
  OFFICIAL_ACCOUNT_PLAY_END = 1305,

  /**
   * 公众号短剧固定选集入口打开小程序
   */
  OFFICIAL_ACCOUNT_DRAMA_SELECTION = 1306,

  /**
   * 发现页附近服务境外专区打开小程序
   */
  DISCOVER_OVERSEAS = 1307,

  /**
   * PC端面板小游戏专区页面
   */
  PC_GAME = 1308,

  /**
   * 公众号文章打开小游戏CPS卡片
   */
  OFFICIAL_ACCOUNT_GAME_CPS = 1309,
}
