import { getPercent, getTextResult } from "../utils/utils";

// GETPERCENT
test("All questions correct should give a 100%", () => {
  expect(getPercent(6, 6)).toBe(100);
});

test("1 of 10 should give a 10%", () => {
  expect(getPercent(1, 10)).toBe(10);
});

test("3 of 10 should give a 30%", () => {
  expect(getPercent(3, 10)).toBe(30);
});

test("5 of 10 should give a 50%", () => {
  expect(getPercent(5, 10)).toBe(50);
});

test("7 of 10 should give a 70%", () => {
  expect(getPercent(7, 10)).toBe(70);
});

test("1.2 of 10 should give a 12%", () => {
  expect(getPercent(1.2, 10)).toBe(12);
});

// GETTEXTRESULT
test("All questions correct should give a 1", () => {
  expect(getTextResult(100)).toBe(1);
});

test("12% should give a 5", () => {
  expect(getTextResult(12)).toBe(5);
});

test("38% should give a 4", () => {
  expect(getTextResult(38)).toBe(4);
});

test("55% should give a 3", () => {
  expect(getTextResult(55)).toBe(3);
});

test("72% should give a 2", () => {
  expect(getTextResult(72)).toBe(2);
});
