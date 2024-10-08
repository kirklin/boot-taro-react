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
      gray: {
        1: "var(--gray-1)",
        2: "var(--gray-2)",
        3: "var(--gray-3)",
        4: "var(--gray-4)",
        5: "var(--gray-5)",
        6: "var(--gray-6)",
        7: "var(--gray-7)",
        8: "var(--gray-8)",
        9: "var(--gray-9)",
        10: "var(--gray-10)",
        100: "var(--gray-1)",
        200: "var(--gray-2)",
        300: "var(--gray-3)",
        400: "var(--gray-4)",
        500: "var(--gray-5)",
        600: "var(--gray-6)",
        700: "var(--gray-7)",
        800: "var(--gray-8)",
        900: "var(--gray-9)",
        1000: "var(--gray-10)",
      },
      blue: {
        1: "var(--blue-1)",
        2: "var(--blue-2)",
        3: "var(--blue-3)",
        4: "var(--blue-4)",
        5: "var(--blue-5)",
        6: "var(--blue-6)",
        7: "var(--blue-7)",
        8: "var(--blue-8)",
        9: "var(--blue-9)",
        10: "var(--blue-10)",
        100: "var(--blue-1)",
        200: "var(--blue-2)",
        300: "var(--blue-3)",
        400: "var(--blue-4)",
        500: "var(--blue-5)",
        600: "var(--blue-6)",
        700: "var(--blue-7)",
        800: "var(--blue-8)",
        900: "var(--blue-9)",
        1000: "var(--blue-10)",
      },
      green: {
        1: "var(--green-1)",
        2: "var(--green-2)",
        3: "var(--green-3)",
        4: "var(--green-4)",
        5: "var(--green-5)",
        6: "var(--green-6)",
        7: "var(--green-7)",
        8: "var(--green-8)",
        9: "var(--green-9)",
        10: "var(--green-10)",
        100: "var(--green-1)",
        200: "var(--green-2)",
        300: "var(--green-3)",
        400: "var(--green-4)",
        500: "var(--green-5)",
        600: "var(--green-6)",
        700: "var(--green-7)",
        800: "var(--green-8)",
        900: "var(--green-9)",
        1000: "var(--green-10)",
      },
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
      success: "var(--success-color)",
      danger: "var(--danger-color)",
      warning: "var(--warning-color)",
      text: "var(--text-color)",
      active: "var(--active-color)",
      background: "var(--background-color)",
      backgroundLight: "var(--background-color-light)",
      textLink: "var(--text-link-color)",
    },
    fontSize: {
      xs: "var(--font-size-xs)",
      sm: "var(--font-size-sm)",
      base: "var(--font-size-base)",
      md: "var(--font-size-md)",
      lg: "var(--font-size-lg)",
    },
    lineHeight: {
      xs: "var(--line-height-xs)",
      sm: "var(--line-height-sm)",
      base: "var(--line-height-base)",
      md: "var(--line-height-md)",
      lg: "var(--line-height-lg)",
    },
    borderRadius: {
      sm: "var(--border-radius-sm)",
      md: "var(--border-radius-md)",
      lg: "var(--border-radius-lg)",
      max: "var(--border-radius-max)",
    },
    borderColor: "var(--border-color)",
    borderWidthBase: "var(--border-width-base)",
    padding: {
      base: "var(--padding-base)",
      xs: "var(--padding-xs)",
      sm: "var(--padding-sm)",
      md: "var(--padding-md)",
      lg: "var(--padding-lg)",
      xl: "var(--padding-xl)",
    },
    animation: {
      duration: {
        base: "var(--animation-duration-base)",
        fast: "var(--animation-duration-fast)",
      },
      timingFunction: {
        enter: "var(--animation-timing-function-enter)",
        leave: "var(--animation-timing-function-leave)",
      },
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    // Don't change the following order
    transformerAttributify(),
  ],
});
