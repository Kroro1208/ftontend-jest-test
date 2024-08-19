import fs from "fs";
import { readFile } from "./mock_module";

 // Step 1: fsモジュールのモック化
jest.mock("fs"); //必ずトップレベルで記載する

// Step 2: モック化されたfsモジュールの取得
const mockFs = jest.mocked(fs);

// Step 3: モック関数の振る舞いの設定
mockFs.readFileSync.mockReturnValue("dummy data");

it("readFileがdataを返却するか", () => {
  const result = readFile("path/dummy-test");
  expect(result).toBe("dummy data");
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
});
