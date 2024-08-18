import { sum } from "./sum";

it("1と2の合計が3になること", () => {
  expect(sum(1, 2)).toBe(3);
});
