import type { ConfigProviderThemeVars } from "@taroify/core";
import type { ThemeName } from "~/constants/themes";
import { useCallback, useState } from "react";
import { themes } from "~/constants/themes";

export function useTheme(initialTheme: ThemeName = "light") {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(initialTheme);

  const changeTheme = useCallback((newTheme: ThemeName) => {
    setCurrentTheme(newTheme);
  }, []);

  const getThemeVars = useCallback((): ConfigProviderThemeVars => {
    return themes[currentTheme];
  }, [currentTheme]);

  return {
    currentTheme,
    changeTheme,
    getThemeVars,
  };
}
