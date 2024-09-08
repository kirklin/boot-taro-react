import { defineConfig, presetAttributify, presetIcons, transformerDirectives, transformerVariantGroup } from "unocss";
import {
  presetApplet,
  presetRemRpx,
  transformerAttributify,
} from "unocss-applet";
import presetChinese from "unocss-preset-chinese";
import presetEase from "unocss-preset-ease";

const isApplet = process.env.TARO_ENV !== "h5" ?? false;
export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.5,
      warn: true,
      extraProperties: {
        "display": "inline-block",
        "vertical-align": "middle",
      },
    }),
    /**
     * you can add `presetAttributify()` here to enable unocss attributify mode prompt
     * although preset is not working for applet, but will generate useless css
     */
    presetChinese(),
    presetEase(),
    presetApplet(),
    presetAttributify(),
    presetRemRpx({ mode: isApplet ? "rem2rpx" : "rpx2rem" }),
  ],
  shortcuts: {
    // position
    "common-bg": "bg-gray-100 dark:bg-gray-900",
    "pr": "relative",
    "pa": "absolute",
    "pf": "fixed",
    "ps": "sticky",

    // position layout
    "position-x-center": "absolute left-1/2 -translate-x-1/2",
    "pxc": "position-x-center",
    "position-y-center": "absolute top-1/2 -translate-y-1/2",
    "pyc": "position-y-center",
    "position-center": "position-x-center position-y-center",
    "pc": "position-center",

    // size
    "size-0": "w-0 h-0",
    "size-full": "w-full h-full",
    "size-screen": "w-screen h-screen",
    "size-1/2": "w-1/2 h-1/2",

    // flex layout
    "flex-center": "flex justify-center items-center",
    "flex-col-center": "flex-center flex-col",
    "flex-x-center": "flex justify-center",
    "flex-y-center": "flex items-center",
  },
  theme: {
    colors: {
      primary: "var(--primary-color)",
      primary_1: "var(--primary-color-1)",
      primary_2: "var(--primary-color-2)",
      primary_3: "var(--primary-color-3)",
      primary_4: "var(--primary-color-4)",
      primary_5: "var(--primary-color-5)",
      primary_6: "var(--primary-color-6)",
      primary_7: "var(--primary-color-7)",
      primary_8: "var(--primary-color-8)",
      primary_9: "var(--primary-color-9)",
      primary_10: "var(--primary-color10)",
      info: "var(--info-color)",
      success: "var(--success-color)",
      warning: "var(--warning-color))",
      danger: "var(--danger-color))",
      active: "var(--active-color))",
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    // Don't change the following order
    transformerAttributify(),
  ],
});
