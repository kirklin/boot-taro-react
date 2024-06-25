// eslint-disable-next-line ts/no-require-imports,ts/no-var-requires
const defineJestConfig = require("@tarojs/test-utils-react/dist/jest.js").default;

module.exports = defineJestConfig({
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/__tests__/**/*.(spec|test).[jt]s?(x)"],
});
