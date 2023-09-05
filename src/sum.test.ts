import { test, expect, describe } from "vitest";

function sum(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  const firstItem = numbers.shift() as number;

  return firstItem + sum(numbers);
}

describe("Sum", () => {
  test("sums the given numbers", () => {
    const numbers = [1, 2, 3, 4];

    const output = sum(numbers);

    expect(output).toEqual(10);
  });
});
