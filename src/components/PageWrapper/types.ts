import type { ReactNode } from "react";

/**
 * 菜单按钮信息接口
 * Menu button information interface
 */
export interface MenuButtonInfo {
  /**
   * 按钮顶部距离屏幕顶部的距离（单位像素）
   * Distance from the top of the button to the top of the screen (in pixels)
   */
  top: number;

  /**
   * 按钮高度（单位像素）
   * Button height (in pixels)
   */
  height: number;

  /**
   * 状态栏高度（单位像素）
   * Status bar height (in pixels)
   */
  statusBarHeight: number;

  /**
   * 按钮宽度（单位像素）
   * Button width (in pixels)
   */
  width: number;

  /**
   * 按钮右边距（单位像素）
   * Button right margin (in pixels)
   */
  marginRight: number;
}

/**
 * Navigation 组件的 props 接口
 * Props interface for Navigation component
 */
export interface NavigationProps {
  /**
   * 导航栏标题
   * Navigation bar title
   */
  navTitle?: ReactNode;

  /**
   * 导航栏自定义类名
   * Custom class name for navigation bar
   */
  navClassName?: string;

  /**
   * 是否显示导航菜单
   * Whether to show the navigation menu
   */
  shouldShowNavigationMenu: boolean;

  /**
   * 自定义渲染导航栏头部的函数
   * Custom function to render navigation bar header
   * @param navHeight 导航栏高度 (Navigation bar height)
   * @param statusBarHeight 状态栏高度 (Status bar height)
   * @param safeAreaRight 安全区域右边距 (Safe area right margin)
   */
  renderCustomHeader?: (
    navHeight: number,
    statusBarHeight: number,
    safeAreaRight: number,
  ) => ReactNode;
}

/**
 * NavBar 组件的 props 接口
 * Props interface for NavBar component
 */
export interface NavBarProps extends NavigationProps {
  /**
   * 导航栏标题
   * Navigation bar title
   */
  title: ReactNode;

  /**
   * 菜单按钮信息
   * Menu button information
   */
  menuButton: MenuButtonInfo;
}

/**
 * NavigationMenu 组件的 props 接口
 * Props interface for NavigationMenu component
 */
export interface NavigationMenuProps {
  /**
   * 首页 URL
   * Home page URL
   */
  homeUrl: string;

  /**
   * 菜单按钮信息
   * Menu button information
   */
  menuButton: MenuButtonInfo;
}

/**
 * PageWrapper 组件的 props 接口
 * Props interface for PageWrapper component
 */
export interface PageWrapperProps {
  /**
   * 容器类名
   * Container class name
   */
  className: string;

  /**
   * 子组件
   * Child components
   */
  children: ReactNode;

  /**
   * 是否显示导航栏
   * Whether to show the navigation bar
   */
  shouldShowNavigation?: boolean;

  /**
   * 是否显示导航菜单
   * Whether to show the navigation menu
   */
  shouldShowNavigationMenu?: boolean;

  /**
   * 是否显示底部导航栏
   * Whether to show the bottom actions
   */
  shouldShowBottomActions?: boolean;

  /**
   * 导航栏标题
   * Navigation bar title
   */
  navTitle?: ReactNode;

  /**
   * 导航栏自定义类名
   * Custom class name for navigation bar
   */
  navClassName?: string;

  /**
   * 是否启用下拉刷新
   * Whether to enable pull-to-refresh
   */
  enablePullToRefresh?: boolean;

  /**
   * 刷新回调函数
   * Refresh callback function
   */
  onRefresh?: () => Promise<void>;

  /**
   * 是否正在刷新
   * Whether it's currently refreshing
   */
  isRefreshing?: boolean;

  /**
   * 自定义渲染导航栏头部的函数
   * Custom function to render navigation bar header
   * @param navHeight 导航栏高度 (Navigation bar height)
   * @param statusBarHeight 状态栏高度 (Status bar height)
   * @param safeAreaRight 安全区域右边距 (Safe area right margin)
   */
  renderCustomHeader?: (
    navHeight: number,
    statusBarHeight: number,
    safeAreaRight: number,
  ) => ReactNode;

  /**
   * 自定义背景类名，允许用户覆盖默认背景样式
   * Custom background class name, allows user to override default background styles
   */
  backgroundClassName?: string;

  /**
   * 是否显示加载状态
   * Whether to show loading state
   */
  loading?: boolean;
}
