import { expect, test, describe } from "bun:test";

import { driver } from "./driver.ts";

describe("driver", () => {
  test("should handle basic case with middle name", () => {
    expect(driver(["John", "James", "Smith", "01-Jan-2000", "M"])).toBe("SMITH001010JJ9AA");
  });

  test("should handle case with no middle name", () => {
    expect(driver(["Andrew", "", "Lee", "02-Sep-1981", "M"])).toBe("LEE99809021A99AA");
  });

  test("should handle female gender (month adjustment)", () => {
    expect(driver(["Maria", "Jane", "Lopez", "15-Apr-1990", "F"])).toBe("LOPEZ954150MJ9AA");
  });

  test("should handle short surname with padding", () => {
    expect(driver(["Bob", "Daniel", "Li", "25-Dec-1995", "M"])).toBe("LI999912255BD9AA");
  });

  test("should handle December month", () => {
    expect(driver(["Peter", "", "Smith", "01-Dec-1988", "M"])).toBe("SMITH812018P99AA");
  });
});
