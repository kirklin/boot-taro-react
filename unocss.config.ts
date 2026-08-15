import path from "node:path";
import IconIconamoon from "@iconify-json/iconamoon/icons.json";
import IconLineMd from "@iconify-json/line-md/icons.json";
import IconMdi from "@iconify-json/mdi/icons.json";

import IconTabler from "@iconify-json/tabler/icons.json";
import presetRemToPx from "@unocss/preset-rem-to-px";
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerVariantGroup } from "unocss";
import {
  presetApplet,
  presetRemRpx,
  transformerAttributify,
} from "unocss-applet";
import presetEase from "unocss-preset-ease";

const isApplet = process.env.TARO_ENV !== "h5";

/**
 * 生成一个 CSS 变量颜色 scale，同时支持语义编号（1-10）和 Tailwind 风格编号（100-1000）
 * 例如 makeScale("gray") 生成 { 1: "var(--gray-1)", 100: "var(--gray-1)", ... }
 */
function makeScale(prefix: string): Record<number, string> {
  const scale: Record<number, string> = {};
  for (let i = 1; i <= 10; i++) {
    const v = `var(--${prefix}-${i})`;
    scale[i] = v; // text-gray-1
    scale[i * 100] = v; // text-gray-100
  }
  return scale;
}

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.5,
      warn: true,
      collections: {
        "mdi": () => IconMdi,
        "tabler": () => IconTabler,
        "line-md": () => IconLineMd,
        "iconamoon": () => IconIconamoon,
      },
      extraProperties: {
        "display": "inline-block",
        "vertical-align": "middle",
      },
    }),
    /**
     * you can add `presetAttributify()` here to enable unocss attributify mode prompt
     * although preset is not working for applet, but will generate useless css
     */
    // presetChinese(), // Temporary disable: Complex quotes cause Syntax Error in Webpack css-loader output
    presetEase(),
    isApplet ? presetApplet() : presetUno(),
    presetAttributify(),
    isApplet ? presetRemRpx({ mode: "rem2rpx" }) : presetRemToPx({ baseFontSize: 28 }),
  ].filter(Boolean) as any,
  content: {
    pipeline: {
      exclude: [/\.(css|postcss|sass|scss|less|stylus|styl)$/, /node_modules/, /^data:/],
    },
    filesystem: [
      path.resolve(__dirname, "src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"),
    ],
  },
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
      gray: makeScale("gray"),
      blue: makeScale("blue"),
      green: makeScale("green"),
      primary: makeScale("primary-color"),
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
      xxxs: "var(--font-size-xxxs)",
      xxs: "var(--font-size-xxs)",
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
    // transformerDirectives(), // Disabled to prevent Webpack 5 data URI loader bug in H5
    transformerVariantGroup(),
    // Don't change the following order
    transformerAttributify(),
  ],
});
