import { convertToGBP } from "../src/converter.js";

test("converts foreign currency to GBP correctly", () => {
  const result = convertToGBP(100, 10);
  expect(result).toBe(10);
});

test("throws an error for negative amounts", () => {
  expect(() => convertToGBP(-50, 10)).toThrow();
});

test("throws an error for zero exchange rate", () => {
  expect(() => convertToGBP(100, 0)).toThrow();
});
