// src/themes.ts
import type { ConfigProviderThemeVars } from "@taroify/core";

export const lightTheme: ConfigProviderThemeVars = {
  buttonPrimaryBackgroundColor: "var(--primary-color)",
  tagDefaultBackgroundColor: "var(--gray-2)",
  tagDefaultColor: "var(--gray-8)",
  tagColor: "var(--white)",
  tabsLineBorderRadius: "32px",
  floatingBubbleDuration: 0,
  // 添加其他亮色主题变量
};

export const darkTheme: ConfigProviderThemeVars = {
  buttonPrimaryBackgroundColor: "var(--primary-color-7)",
  tabsLineBorderRadius: "32px",
  floatingBubbleDuration: 0,
  // 添加其他暗色主题变量
};

export const greenTheme: ConfigProviderThemeVars = {
  buttonPrimaryBackgroundColor: "var(--green)",
  tabsLineBorderRadius: "32px",
  floatingBubbleDuration: 0,
  // 添加其他绿色主题变量
};

export type ThemeName = "light" | "dark" | "green";

export const themes: Record<ThemeName, ConfigProviderThemeVars> = {
  light: lightTheme,
  dark: darkTheme,
  green: greenTheme,
};
