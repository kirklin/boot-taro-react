// src/themes.ts
import type { ConfigProviderThemeVars } from "@taroify/core";

export const lightTheme: ConfigProviderThemeVars = {
  buttonPrimaryBackgroundColor: "#3B82F6FF",
  // 添加其他亮色主题变量
};

export const darkTheme: ConfigProviderThemeVars = {
  buttonPrimaryBackgroundColor: "#1D4ED8",
  // 添加其他暗色主题变量
};

export const greenTheme: ConfigProviderThemeVars = {
  buttonPrimaryBackgroundColor: "#D6E5BE",
  // 添加其他绿色主题变量
};

export type ThemeName = "light" | "dark" | "green";

export const themes: Record<ThemeName, ConfigProviderThemeVars> = {
  light: lightTheme,
  dark: darkTheme,
  green: greenTheme,
};
