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
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    // Don't change the following order
    transformerAttributify(),
  ],
});
