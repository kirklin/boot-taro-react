import type { UserConfigExport } from "@tarojs/cli";
import { resolve } from "node:path";
import { defineConfig } from "@tarojs/cli";
import { createSwcRegister, getModuleDefaultExport } from "@tarojs/helper";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import devConfig from "./dev";
import { logEnv, setupEnv } from "./envConfig";
import prodConfig from "./prod";

// 设置环境变量
setupEnv();

// 打印环境变量和版本号
logEnv();

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig(async (merge) => {
  createSwcRegister({
    only: [filePath => filePath.includes("@unocss")],
  });
  const UnoCSS = getModuleDefaultExport(await import("@unocss/webpack"));
  const baseConfig: UserConfigExport = {
    projectName: "_boot-taro-react_",
    date: "2025-01-21",
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2,
    },
    alias: {
      "~": resolve(process.cwd(), "src"),
    },
    sourceRoot: "src",
    // 开启多端同步调试
    outputRoot: `dist/${process.env.TARO_ENV}`,
    plugins: ["@taro-hooks/plugin-react", "@tarojs/plugin-html"],
    defineConstants: {
    },
    copy: {
      patterns: [
      ],
      options: {
      },
    },
    framework: "react",
    compiler: "webpack5",
    cache: {
      enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    mini: {
      baseLevel: 8,
      postcss: {
        pxtransform: {
          enable: true,
          config: {

          },
        },
        url: {
          enable: true,
          config: {
            limit: 1024, // 设定转换尺寸上限
          },
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: "module", // 转换模式，取值为 global/module
            generateScopedName: "[name]__[local]___[hash:base64:5]",
          },
        },
      },
      // https://github.com/NervJS/taro/issues/7160
      miniCssExtractPluginOption: {
        ignoreOrder: true,
      },
      optimizeMainPackage: {
        enable: true,
      },
      webpackChain(chain) {
        chain.resolve.plugin("tsconfig-paths").use(TsconfigPathsPlugin);
        chain.plugin("unocss").use(UnoCSS());
      },
    },
    h5: {
      publicPath: "/",
      staticDirectory: "static",
      esnextModules: ["@taroify"],
      output: {
        filename: "js/[name].[hash:8].js",
        chunkFilename: "js/[name].[chunkhash:8].js",
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: "css/[name].[hash].css",
        chunkFilename: "css/[name].[chunkhash].css",
      },
      router: {
        mode: "browser",
      },
      devServer: {
        port: 8888,
        hot: false,
        host: "0.0.0.0",
        historyApiFallback: true,
        headers: {
          "Access-Control-Allow-Origin": "*", // 表示允许跨域
        },
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {},
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: "module", // 转换模式，取值为 global/module
            generateScopedName: "[name]__[local]___[hash:base64:5]",
          },
        },
      },
      webpackChain(chain) {
        chain.resolve.plugin("tsconfig-paths").use(TsconfigPathsPlugin);
        chain.plugin("unocss").use(UnoCSS());
      },
    },
    rn: {
      appName: "_boot-taro-react_",
      postcss: {
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        },
      },
    },
  };
  if (process.env.NODE_ENV === "development") {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig);
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig);
});
