import type { UserConfigExport } from "@tarojs/cli";

export default {
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {
    webpackChain: (chain) => {
      chain.merge({
        plugin: {
          install: {
            // eslint-disable-next-line ts/no-require-imports
            plugin: require("terser-webpack-plugin"),
            args: [
              {
                terserOptions: {
                  compress: true, // 默认使用terser压缩
                  // mangle: false,
                  keep_classnames: true, // 不改变class名称
                  keep_fnames: true, // 不改变函数名称
                },
              },
            ],
          },
        },
      });
    },
  },
  h5: {},
} satisfies UserConfigExport;
