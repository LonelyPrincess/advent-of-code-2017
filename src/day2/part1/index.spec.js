var obtainChecksum = require("./index");

describe("Obtain checksum", function () {
  it("obtain checksum must be a function", function () {
    expect(obtainChecksum).toBeDefined();
    expect(typeof(obtainChecksum)).toEqual('function');
  });

  it("checksum for spreadsheet [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]] would be 8 + 4 + 6 = 18", function () {
    const spreadsheet = "[[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]]";
    expect(obtainChecksum(spreadsheet)).toBe(18);
  });
});