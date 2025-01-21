// 模拟 API 请求延迟
const simulateApiDelay = () => new Promise(resolve => setTimeout(resolve, 300));

export { simulateApiDelay };
