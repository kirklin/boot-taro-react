import kirklin from "@kirklin/eslint-config";

export default kirklin({
  rules: {
    "node/prefer-global/process": "off",
    "no-console": "off",
    "style/multiline-ternary": "off",
    "e18e/prefer-static-regex": "off",
    "erasable-syntax-only/enums": "off",
    // trustPolicy is disabled here: Taro 4.2.0's dependency tree pulls legacy
    // packages (semver@6.3.1, detect-port@1.6.1) that fail the no-downgrade check.
    "pnpm/yaml-enforce-settings": "off",
  },
  formatters: {
    /**
     * 格式化CSS、LESS、SCSS文件，以及Vue中的`<style>`块
     * 默认情况下使用Prettier
     */
    css: true,
    /**
     * 格式化HTML文件
     * 默认情况下使用Prettier
     */
    html: true,
    /**
     * 格式化Markdown文件
     * 支持Prettier和dprint
     * 默认情况下使用Prettier
     */
    markdown: "prettier",
  },
  unocss: true,
});
