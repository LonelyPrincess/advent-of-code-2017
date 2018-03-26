var getStepsToEscape = require(".");

describe("Day 5: A Maze of Twisty Trampolines, All Alike - Part II", function () {
  it("get steps to escape must be a function", function () {
    expect(getStepsToEscape).toBeDefined();
    expect(typeof(getStepsToEscape)).toEqual('function');
  });

  it("it takes 10 steps to escape sample maze [0, 3, 0, 1, -3]", function () {
    const maze = [0, 3, 0, 1, -3];
    expect(getStepsToEscape(maze)).toBe(10);
  });

  it("empty maze requires no steps to escape", function () {
    expect(getStepsToEscape()).toBe(0);
  });
});
