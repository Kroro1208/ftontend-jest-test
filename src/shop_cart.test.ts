import { ShoppingList } from "./shop_cart";

describe("ShoppingList", () => {
  let shoppingList: ShoppingList;
  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  describe("addItem", () => {
    it("アイテムをリストに追加できる", () => {
      shoppingList.addItem("apple");
      expect(shoppingList.list).toEqual(["apple"]);
    });

    it("複数のアイテムを追加できる", () => {
      shoppingList.addItem("apple");
      shoppingList.addItem("banana");
      expect(shoppingList.list).toEqual(["apple", "banana"]);
    });
  });
  describe("removeItem", () => {
    beforeEach(() => {
      shoppingList.addItem("apple");
      shoppingList.addItem("banana");
    });

    it("アイテムをリストから削除できる", () => {
      shoppingList.removeItem("apple");
      expect(shoppingList.list).not.toContain("apple");
      expect(shoppingList.list).toEqual(["banana"]);
    });

    it("リストにアイテムが存在しない場合はエラーを投げる", () => {
      expect(() => shoppingList.removeItem("orange")).toThrow(
        "アイテム: orange"
      );
    });
  });
});
