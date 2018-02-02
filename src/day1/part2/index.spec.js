var solveCaptcha = require(".");

describe("Day 1: Inverse Captcha - Part II", function () {
  it("solve captcha must be a function", function () {
    expect(solveCaptcha).toBeDefined();
    expect(typeof(solveCaptcha)).toEqual('function');
  });

  it("1212 produces 6", function () {
    expect(solveCaptcha("1212")).toBe(6);
  });

  it("1221 produces 0", function () {
    expect(solveCaptcha("1221")).toBe(0);
  });

  it("123425 produces a sum of 4", function () {
    expect(solveCaptcha("123425")).toBe(4);
  });

  it("123123 produces a sum of 12", function () {
    expect(solveCaptcha("123123")).toBe(12);
  });

  it("12131415 produces a sum of 4", function () {
    expect(solveCaptcha("12131415")).toBe(4);
  });

  it("22aa produces null because it's not a valid input", function () {
    expect(solveCaptcha("22aa")).toBe(null);
  });

  it("empty sequence produces 0", function () {
    expect(solveCaptcha()).toBe(0);
  });

  it("sequence with an odd number of digits produces null", function () {
    expect(solveCaptcha("132")).toBe(null);
  });
});