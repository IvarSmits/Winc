const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCase,
  hasLowerCase,
  hasDigit,
  minimumConditionsReached,
} = require("./verify-password");

describe("Password verifier utility functions", () => {
  test("hasRightLength", () => {
    expect(hasRightLength("123456789")).toBe(false);
  });

  test("hasRightLength, happy path 1", () => {
    expect(hasRightLength("12345678")).toBe(true);
  });

  test("hasRightLength, happy path 2", () => {
    expect(hasRightLength("")).toBe(true);
  });

  test("hasRightLength, null", () => {
    expect(hasRightLength(null)).toBe(false);
  });

  test("isNotNull", () => {
    expect(isNotNull(null)).toBe(false);
  });

  test("isNotNull, happy path", () => {
    expect(isNotNull("a")).toBe(true);
  });

  test("HasUpperCase", () => {
    expect(hasUpperCase("a")).toBe(false);
  });

  test("HasUpperCase, happy path 1", () => {
    expect(hasUpperCase("A")).toBe(true);
  });

  test("HasUpperCase, happy path 2", () => {
    expect(hasUpperCase("Ab")).toBe(true);
  });

  test("HasUpperCase, only digits", () => {
    expect(hasUpperCase("12")).toBe(false);
  });

  test("HasUpperCase, null", () => {
    expect(hasUpperCase(null)).toBe(false);
  });

  test("hasLowerCase", () => {
    expect(hasLowerCase("Z")).toBe(false);
  });

  test("hasLowerCase, happy path 1", () => {
    expect(hasLowerCase("z")).toBe(true);
  });

  test("hasLowerCase, happy path 2", () => {
    expect(hasLowerCase("Zy")).toBe(true);
  });

  test("hasLowerCase, only digits", () => {
    expect(hasLowerCase("12")).toBe(false);
  });

  test("hasLowerCase, null", () => {
    expect(hasLowerCase(null)).toBe(false);
  });

  test("hasDigit", () => {
    expect(hasDigit("a")).toBe(false);
  });

  test("hasDigit, happy path 1", () => {
    expect(hasDigit("1")).toBe(true);
  });

  test("hasDigit, happy path 2", () => {
    expect(hasDigit("a1")).toBe(true);
  });

  test("hasDigit, null", () => {
    expect(hasDigit(null)).toBe(false);
  });
});

describe("Check combination of conditions", () => {
  test("minimumConditionsReached, all conditions false", () => {
    const conditions = [false, false, false, false, false];
    expect(minimumConditionsReached(conditions)).toBe(false);
  });

  test("minimumConditionsReached under cutoff", () => {
    const conditions = [true, true, false, false, false];
    expect(minimumConditionsReached(conditions)).toBe(false);
  });

  test("minimumConditionsReached on cutoff", () => {
    const conditions = [true, true, true, false, false];
    expect(minimumConditionsReached(conditions)).toBe(true);
  });

  test("minimumConditionsReached over cutoff", () => {
    const conditions = [true, true, true, true, false];
    expect(minimumConditionsReached(conditions)).toBe(true);
  });
});

describe("Verify password", () => {
  test("verifyPassword null", () => {
    expect(verifyPassword(null)).toBe(false);
  });

  test("verifyPassword '1'", () => {
    expect(verifyPassword("1")).toBe(false);
  });

  test("verifyPassword only digits", () => {
    expect(verifyPassword("12345678")).toBe(false);
  });

  test("verifyPassword only uppercase", () => {
    expect(verifyPassword("ABC")).toBe(false);
  });

  test("verifyPassword only lowercase", () => {
    expect(verifyPassword("abc")).toBe(true);
  });

  test("verifyPassword only lowercase, but too long", () => {
    expect(verifyPassword("abcdefghi")).toBe(false);
  });

  test("verifyPassword lowercase and uppercase, but too long", () => {
    expect(verifyPassword("Ab")).toBe(true);
  });

  test("verifyPassword, correct password", () => {
    expect(verifyPassword("Ab1")).toBe(true);
  });
});
