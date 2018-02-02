var solveCaptcha = require(".");

describe("Day 1: Inverse Captcha - Part I", function () {
  it("solve captcha must be a function", function () {
    expect(solveCaptcha).toBeDefined();
    expect(typeof(solveCaptcha)).toEqual('function');
  });

  it("1122 produces a sum of 3", function () {
    expect(solveCaptcha("1122")).toBe(3);
  });

  it("1111 produces a sum of 4", function () {
    expect(solveCaptcha("1111")).toBe(4);
  });

  it("1234 produces a sum of 0", function () {
    expect(solveCaptcha("1234")).toBe(0);
  });

  it("91212129 produces a sum of 9", function () {
    expect(solveCaptcha("91212129")).toBe(9);
  });

  it("22aa produces null because it's not a valid input", function () {
    expect(solveCaptcha("22aa")).toBe(null);
  });

  it("empty sequence produces 0", function () {
    expect(solveCaptcha()).toBe(0);
  });
});