import TestUtils from "@tarojs/test-utils-react";

describe("testing", () => {
  it("test", async () => {
    const testUtils = new TestUtils();
    await testUtils.createApp();
    await testUtils.PageLifecycle.onShow("pages/index/index");
    expect(testUtils.html()).toMatchSnapshot();
  });
});
