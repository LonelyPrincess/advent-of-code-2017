var isValidPassphrase = require(".");

describe("Day 4: High-Entropy Passphrases - Part II", function () {
  it("is valid passphrase must be a function", function () {
    expect(isValidPassphrase).toBeDefined();
    expect(typeof(isValidPassphrase)).toEqual('function');
  });

  it("'abcde fghij' is valid", function () {
    expect(isValidPassphrase('abcde fghij')).toBe(true);
  });

  it("'abcde xyz ecdab' is not valid", function () {
    expect(isValidPassphrase('abcde xyz ecdab')).toBe(false);
  });

  it("'a ab abc abd abf abj' is valid", function () {
    expect(isValidPassphrase('a ab abc abd abf abj')).toBe(true);
  });

  it("'iiii oiii ooii oooi oooo' is valid", function () {
    expect(isValidPassphrase('iiii oiii ooii oooi oooo')).toBe(true);
  });

  it("'oiii ioii iioi iiio' is not valid", function () {
    expect(isValidPassphrase('oiii ioii iioi iiio')).toBe(false);
  });

  it("passphrase with a single word is not valid", function () {
    expect(isValidPassphrase('one')).toBe(false);
  });

  it("empty passphrase is not valid", function () {
    expect(isValidPassphrase()).toBe(false);
  });
});