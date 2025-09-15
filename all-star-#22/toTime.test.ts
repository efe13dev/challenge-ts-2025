import { expect, it } from "bun:test";

import { toTime } from "./toTime.ts";

it("should return '1 hour(s) and 0 minute(s)' for 3600 seconds", () => {
  expect(toTime(3600)).toBe("1 hour(s) and 0 minute(s)");
});

it("should return '1 hour(s) and 0 minute(s)' for 3601 seconds", () => {
  expect(toTime(3601)).toBe("1 hour(s) and 0 minute(s)");
});

it("should return '0 hour(s) and 58 minute(s)' for 3500 seconds", () => {
  expect(toTime(3500)).toBe("0 hour(s) and 58 minute(s)");
});

it("should return '89 hour(s) and 51 minute(s)' for 323500 seconds", () => {
  expect(toTime(323500)).toBe("89 hour(s) and 51 minute(s)");
});
