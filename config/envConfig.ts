// 定义环境变量的类型
interface EnvConfig {
  TARO_ENV: string;
  NODE_ENV: string;
  AUTHOR: string;
}

// 设置环境变量的默认值
const defaultEnvVars: EnvConfig = {
  TARO_ENV: "weapp",
  NODE_ENV: "production",
  AUTHOR: "Kirk Lin",
};

// 定义获取格式化日期时间字符串的函数
function getFormattedDatePart(value: number): string {
  return value.toString().padStart(2, "0");
}

function getVersion(): string {
  const date = new Date();
  return [
    date.getFullYear(),
    getFormattedDatePart(date.getMonth() + 1),
    getFormattedDatePart(date.getDate()),
    getFormattedDatePart(date.getHours()),
    getFormattedDatePart(date.getMinutes()),
    getFormattedDatePart(date.getSeconds()),
  ].join("");
}

// 设置环境变量
function setupEnv(): void {
  Object.keys(defaultEnvVars).forEach((key) => {
    // 使用 as 断言确保类型正确
    (process.env as any)[key] = (process.env as any)[key] ?? defaultEnvVars[key];
  });
}

// 获取版本号，使用类型注解
const version: string = (process.env.VERSION as string) || getVersion();

// 打印环境变量和版本号的函数
function logEnv(): void {
  console.debug("Template Author:", process.env.AUTHOR);
  console.debug("TaroEnv:", process.env.TARO_ENV);
  console.debug("NodeEnv:", process.env.NODE_ENV);
  console.debug("Version:", version);
  console.debug();
}

// 导出setupEnv和logEnv函数，以及version变量
export { logEnv, setupEnv, version };
