it("mock関数が呼び出されたかを監視する", () => {
  const mockFunc = jest.fn();
  mockFunc();
  // expectには実行結果ではなく関数そのものを渡すので()はつけない
  expect(mockFunc).toHaveBeenCalled();
});

it("mock関数が2回呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  mockFunc();
  expect(mockFunc).toHaveBeenCalledTimes(2);
});

it("mock関数に引数elementが渡される", () => {
  const mockFunc = jest.fn();
  mockFunc("element");
  expect(mockFunc).toHaveBeenCalledWith("element");
});
