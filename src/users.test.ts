import axios from "axios";
import { Users } from "./users";

jest.mock("axios");
const mockAxios = jest.mocked(axios);

describe("Users", () => {
    // 各テストケース間でモックの状態をリセットする
  beforeEach(() => {
    mockAxios.get.mockClear();
  });
  it("ユーザーを取得できる", async () => {
    const users = [{ name: "Taro " }, { name: "Keiko " }, { name: "Masami " }];
    const res = { data: users };
    mockAxios.get.mockResolvedValue(res);

    const result = await Users.all();
    expect(result).toEqual(users);
    expect(mockAxios.get).toHaveBeenCalledWith("/users.json");
  });
});
