var isValidPassphrase = require(".");

describe("Day 4: High-Entropy Passphrases - Part I", function () {
  it("is valid passphrase must be a function", function () {
    expect(isValidPassphrase).toBeDefined();
    expect(typeof(isValidPassphrase)).toEqual('function');
  });

  it("'aa bb cc dd ee' is valid", function () {
    expect(isValidPassphrase("aa bb cc dd ee")).toBe(true);
  });

  it("'aa bb cc dd aa' is not valid", function () {
    expect(isValidPassphrase("aa bb cc dd aa")).toBe(false);
  });

  it("'aa bb cc dd aaa' is valid", function () {
    expect(isValidPassphrase("aa bb cc dd aaa")).toBe(true);
  });

  it("passphrase with a single word is not valid", function () {
    expect(isValidPassphrase("one")).toBe(false);
  });

  it("empty passphrase is not valid", function () {
    expect(isValidPassphrase()).toBe(false);
  });
});