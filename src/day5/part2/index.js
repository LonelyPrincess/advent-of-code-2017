/**
 * --- Day 5: A Maze of Twisty Trampolines, All Alike - Part II ---
 *
 * This function solves a jump instructions maze. In each step,
 * the system jumps the number of positions contained in the current
 * position (offset).
 *
 * Before jumping, that offset is incremented by 1 if it was lower than
 * 3 and decrease it by 1 otherwise.
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

  while (maze[currentPos] !== undefined) {
    steps++;
    let offset = maze[currentPos];
    maze[currentPos] += (offset < 3 ? 1 : -1);
    currentPos += offset;
  }

  return steps;
}

module.exports = getStepsToEscape;