import TestUtils from "@tarojs/test-utils-react";

// eslint-disable-next-line no-undef
describe("testing", () => {
  // eslint-disable-next-line no-undef
  it("test", async () => {
    const testUtils = new TestUtils();
    await testUtils.createApp();
    await testUtils.PageLifecycle.onShow("pages/index/index");
    // eslint-disable-next-line no-undef
    expect(testUtils.html()).toMatchSnapshot();
  });
});
