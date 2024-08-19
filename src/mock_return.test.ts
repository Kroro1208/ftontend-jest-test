it("モック関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
});

it("モック関数に1度だけ返される戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe(undefined);
});

// 非同期処理
it("mock関数に非同期な戻り値を設定する", async () => {
  const mockFunk = jest.fn();
  mockFunk.mockResolvedValue("Resolved value");
  const result = await mockFunk();
  expect(result).toBe("Resolved value");
});
