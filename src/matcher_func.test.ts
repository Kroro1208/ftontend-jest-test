// toBe
it("数値テスト", () => {
  expect(5 + 5).toBe(10);
});

it("文字列テスト", () => {
  expect("jest").toBe("jest");
});

it("真偽値テスト", () => {
  expect(true).toBe(true);
});

// toEquall
it("配列のテスト", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  expect(arr1).toEqual(arr2);
});

it("オブジェクトのテスト", () => {
  const obj = {
    a: 1,
    b: 2,
  };
  const obj2 = {
    a: 1,
    b: 2,
  };
  expect(obj).toEqual(obj2);
});

//notEquall

it("2+2は5ではない", () => {
  expect(2 + 2).not.toBe(5);
});
