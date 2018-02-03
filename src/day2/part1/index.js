/**
 * --- Day 2: Corruption Checksum - Part I ---
 *
 * This function obtains the checksum for a spreadsheet. An spreadsheet will be
 * defined as a matrix of numerical values. The checksum will be obtained by
 * calculating the difference between the largest and smallest value in each row,
 * and then adding all of these differences into a single value.
 *
 * For this function to work properly, the input value must be specified as a
 * bidimensional array in JSON format. In order to transform the input given
 * in the challenge description to the expected format, we can use this:
 *
 *    > JSON.stringify(input.split("\n").map(line => line.split("\t")))
 *
 * @author Sara Hernández <sara.her.su@gmail.com>
 *
 * @param {string} input - A string representing a matrix of numbers. It must
 *  be defined as a bidimensional array as written into JSON format.
 * @return {number} - Sum of differences between the max and min values for
 *  all of the available rows.
 */
const obtainChecksum = function (input) {
  const spreadsheet = JSON.parse(input);

  let rowDiff = [];
  for (let row of spreadsheet) {
    let
      min = null,
      max = null;

    // Obtain max and min values for the row
    for (let value of row) {
      if (!min || value < min) {
        min = value;
      }

      if (!max || value > max) {
        max = value;
      }
    }

    rowDiff.push(max - min);
  }

  return rowDiff.reduce((total, currentValue) => total + currentValue);
};

module.exports = obtainChecksum;
