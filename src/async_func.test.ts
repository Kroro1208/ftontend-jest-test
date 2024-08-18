import { delay } from "./async_func";

it("delay関数が指定された時間経過後メッセージを返す", async () => {
  const result = await delay("Hello, Jest", 1000);
  expect(result).toBe("Hello, Jest");
});

it("timeがマイナスの場合はエラーが発生する", async () => {
  try {
    await delay("Hello, Jest", -1);
  } catch (error: any) {
    expect(error.message).toBe("timeは0以上で指定してください");
  }
});
