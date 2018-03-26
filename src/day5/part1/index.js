/**
 * --- Day 5: A Maze of Twisty Trampolines, All Alike - Part I ---
 *
 * This function solves a jump instructions maze. In each step,
 * the system jumps the number of positions contained in the current
 * position. Before jumping, that position of the maze is incremented
 * in one unit.
 *
 * The process doesn't end until the system jumps out to a non-existant
 * index of the jump instructions array.
 *
 * @author Sara Hernández <sara.her.su@gmail.com>
 *
 * @param {string} maze - An array of numbers representing the jump instructions.
 * @return {number}  Number of steps required to find an exit to the maze.
 */
const getStepsToEscape = function (maze = []) {
  let steps = 0,
      currentPos = 0;

  // offset is how much we jump
  // inc is the amount to increment previous maze item before jumping
  while (maze[currentPos] !== undefined) {
    steps++;
    let offset = maze[currentPos];
    maze[currentPos]++;
    currentPos += offset;
  }

  return steps;
}

module.exports = getStepsToEscape;
