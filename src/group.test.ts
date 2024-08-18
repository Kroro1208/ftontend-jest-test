describe("配列に関するテスト", () => {
  it("配列に要素を追加できる", () => {
    const arry = [];
    arry.push("element");
    expect(arry).toEqual(["element"]);
  });

  it("配列の長さが正しい", () => {
    const fruits = ["apple", "orange"];
    expect(fruits.length).toBe(2);
  });

  describe("配列の検索に関するテスト", () => {
    it("配列の要素を検索できる", () => {
      const arry = ["apple", "orange", "grape", "melon", "banana"];
      expect(arry.indexOf("melon")).toBe(3);
    });
  });
});
