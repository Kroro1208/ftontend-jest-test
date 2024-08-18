import { sum } from "./sum";

it("1と2の合計が3になること", () => {
  expect(sum(1, 2)).toBe(3);
});

it.each`
  a    | b     | expected
  ${1} | ${2}  | ${3}
  ${1} | ${-2} | ${-1}
`("$aと$bを足すと$expectedになる", ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});
